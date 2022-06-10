import React from "react";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import "../styles/register.css";
import success from "../assets/success.png";
import HTP from "../assets/How-to-Participate.png";
import { Navbar } from "../Components";
import useForm from "../containers/useForm";
import validate from "../containers/validateInfo";
import TermsBox from "../Components/terms-box/termsBox";
import { isMobile } from "react-device-detect";

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "500px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Register = ({ submitForm }) => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleFileChnage,
    handleCheck,
    checked,
    isLoading,
    show,
    handleClose,
    handleShow,
    progress,
    voteId,
    status,
    imageError
  } = useForm(submitForm, validate);
  return (
    <>
      <div className="total-bg">
        <div className="gradient__bg">
          <Navbar />
          {/* <div className="header_reg">
            <img src={bg} />
          </div> */}
        </div>
        <div className="container">
          <div className="top">
            <motion.div
              className="motion"
              initial={false}
              animate="collapsed"
              variants={backdropVariants}
              transition={expandingTransition}
            />
            <div className="header">
              <h2>Register</h2>
            </div>
          </div>
          <div className="inner">
            <div className="formBox">
              <form className="formContainer" onSubmit={handleSubmit}>
                <div className="form-inputs">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="input-form"
                    placeholder="Full Name:"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <input
                  id="age"
                  type="text"
                  name="age"
                  className="input-form"
                  placeholder="Age"
                  value={values.age}
                  onChange={handleChange}
                />
                {errors.age && <p className="error">{errors.age}</p>}
                <input
                  id="parentName"
                  type="text"
                  name="parentName"
                  className="input-form"
                  placeholder="Parent's Full Name"
                  value={values.parentName}
                  onChange={handleChange}
                />
                {errors.parentName && <p className="error">{errors.parentName}</p>}
                <input
                  className="input-form"
                  id="parentNumber"
                  type="numeric"
                  name="parentNumber"
                  placeholder="Parent's WhatsApp Number"
                  value={values.parentNumber}
                  onChange={handleChange}
                />
                {errors.parentNumber && <p className="error">{errors.parentNumber}</p>}
                <input
                  className="input-form"
                  id="parentEmail"
                  type="email"
                  name="parentEmail"
                  placeholder="Parent's Email"
                  value={values.parentEmail}
                  onChange={handleChange}
                />
                {errors.parentEmail && <p className="error">{errors.parentEmail}</p>}
                <div className="form-inputs mb-4">
                  <p>Upload child's image(Max. 5MB)</p>

                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    name="image"
                    value={values.image}
                    onChange={handleFileChnage}
                  />
                </div>
                {imageError && <p className="error">{imageError}</p>}
                {errors.image && <p className="error">{errors.image}</p>}
                <input
                  type="checkbox"
                  name="agree"
                  checked={checked}
                  onChange={handleCheck}
                />{" "}
                <p>
                  I have read and agreed with the{" "}
                  <a href="/terms">Terms and Conditions</a>
                </p>
                {errors.check && <p className="error">{errors.check}</p>}
                {isLoading ? (
                  <Button variant="primary">
                    <Spinner
                      as="span"
                      animation="border"
                      size="lg"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    className="form-input.btn mb-4"
                    type="submit"
                    // disabled
                  >
                    Register
                  </Button>
                )}
                {/* <span className="form-input-login">
                  Registration has ended!!!
                </span> */}
                <div className="terms_box_reg">
                  {isMobile ? (
                    <img src={HTP} height={430} />
                  ) : (
                    <img src={HTP} />
                  )}
                </div>
              </form>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h3>The PrimeKid Contest</h3>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <img src={success} className="modal-img" />
                  <br />
                  <p>Your registration is completed successfully</p>
                  <br />
                  <p>START VOTING NOW.</p>
                </Modal.Body>
                <Modal.Body>
                  {/* Kindly proceed to "Gallery" page to see details */}
                  <p>To vote for your child, kindly click on VOTE NOW</p>
                </Modal.Body>
                <Modal.Footer className="modal-body">
                  {/* <Link to="#">
                    <Button variant="danger" onClick={handleClose}>
                      Close
                    </Button>
                  </Link> */}
                  <Link className="width={'100%'}" to={"/profile/" + voteId}>
                    <Button variant="primary">VOTE NOW</Button>
                  </Link>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
