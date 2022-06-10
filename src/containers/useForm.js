import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect, useContext } from "react";
import { ContestantContext } from "../services/contestants-service";
import { storage } from "./firebase";

const useForm = (callback, validate) => {
  const { registerContestant, show, setShow, isLoading, setIsLoading, voteId } =
    useContext(ContestantContext);
  const [values, setValues] = useState({
    name: "",
    age: "",
    parentName: "",
    parentNumber: "",
    parentEmail: "",
    image: "",
    agree: "",
  });
  const [imageLink, setImageLink] = useState("");
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState({});
  const [imageError, setImageError] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checked, setChecked] = useState(false);

  const [progress, setProgress] = useState(0);

  // const formHandler = (e) => {
  //   e.preventDefault();
  //   const file = e.target[0].files[0];
  //   uploadFiles(file);
  // };

  // const uploadFiles = (file) => {
  //   //
  //   if (!file) return;
  //   const storageRef = ref(storage, `files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (error) => console.log(error),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         setProgress(0);
  //         setImageLink(downloadURL);
  //         setStatus(true);
  //       });
  //     }
  //   );
  // };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleFileChnage = (e) => {
    console.log(e.target.files[0]);
    setImageError('');
    if (e.target.files[0].size > 5000000){
      console.log("its more than 5mb");
      setImageError('Image must be 5MB or less');
    } else {
    setFile(e.target.files[0]);
    values.image = file;
    // console.log(file.size);
    // uploadFiles(imgFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values, checked));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      if (checked.toString() === 'true') {
        await register(values, reader.result);
        setValues({
          name: "",
          age: "",
          parentName: "",
          parentNumber: "",
          parentEmail: "",
          image: '',
          agree: ''
        });
        setChecked(false);
      } 
      
    };
    reader.onerror = () => {
      console.error("Error reading image file here");
      setIsLoading(false);
    };
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const register = async (data, base64EncodedImage) => {
    let details = {
      childName: data.name,
      age: data.age,
      parentName: data.parentName,
      parentNumber: data.parentNumber,
      parentEmail: data.parentEmail,
      image: base64EncodedImage,
    };
    await registerContestant(details);
  };

  return {
    handleChange,
    values,
    handleSubmit,
    file,
    errors,
    handleFileChnage,
    handleCheck,
    checked,
    isLoading,
    show,
    handleClose,
    progress,
    voteId,
    status,
    imageError
  };
};

export default useForm;
