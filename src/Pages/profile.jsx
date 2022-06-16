import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { PaystackButton } from "react-paystack";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "../styles/Profile.css";
import { ContestantContext } from "../services/contestants-service";
import { Navbar } from "../Components";
import Tick from "../assets/tick.png";

export const Profile = (props) => {
  const {
    fetchContestant,
    // fetchContestantStage2,
    // fetchContestantStage3,
    contestant,
    savePayment,
    // voteContestantStage3
    // voteContestantStage2
    voteContestant,
    settings,
  } = useContext(ContestantContext);
  const { id } = useParams();
  const url = window.location.href;
  // console.log(id, url);
  console.log(parseInt(settings[0]?.stageVote))

  // const publicKey = "pk_live_e7a8830a35d772e53f2bbb1698bee7142e52f1d1";
  const publicKey = `${settings[0]?.paymentKey}`;

  const [quantity, setQuantity] = useState(10);
  const [btnAmount, setBtnAmount] = useState(1000);
  const [stage, setStage] = useState();
  const [copied, setCopied] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myArray = [
    "mgalaxyhosting@gmail.com",
    "favouritekere.tis@gmail.com",
    "joshpetersus@gmail.com",
    "bilbliss020@gmail.com",
    "watchbiblenow@gmail.com",
    "seebiblenow@gmail.com",
    "treasuregreat71@gmail.com",
    "preciouswealth106@gmail.com",
    "goddywengiemi@gmail.com",
    "erezimena.sfaith@gmail.com",
    "sunshinemiss2021@littlemisssunshine360.com",
    "littlemisssunshine2021@littlemisssunshine360.com",
    "misssunshinenija@littlemisssunshine360.com",
    "nijasunshinemiss21@littlemisssunshine360.com",
    "360nijasunshine21@littlemisssunshine360.com",
    "2021sunshinemiss@littlemisssunshine360.com",
    "alllittlesunshine11@littlemisssunshine360.com",
    "see21@littlemisssunshine360.com",
    "nija360@littlemisssunshine360.com",
    "contest@littlemisssunshine360.com",
    "winner360@littlemisssunshine360.com",
    "nijacontest@littlemisssunshine360.com",
    "new01@littlemisssunshine360.com",
    "classic1@littlemisssunshine360.com",
    "prefect10@littlemisssunshine360.com",
    "takeit@littlemisssunshine360.com",
    "from001@littlemisssunshine360.com",
    "who007@littlemisssunshine360.com",
    "001great@littlemisssunshine360.com",
    "Glory224@littlemisssunshine360.com",
  ];

  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  // console.log(randomItem);

  let num = Math.floor(Math.random() * 100);
  // console.log("Num", Math.floor(num));
  var email = num + randomItem;
  // console.log("email", email);

  const decrease = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) setQuantity(1);
    //   setAmount();
  };

  const increase = () => {
    setQuantity(quantity + 1);
    // setAmount();
  };

  useEffect(() => {
    setAmount();
  }, [quantity]);

  const setAmount = () => {
    let amount = quantity * 100;
    setBtnAmount(amount);
  };

  const onChange = (e) => {
    setQuantity("");
    setQuantity(e.target.value);
  };

  const componentProps = {
    email: email,
    amount: btnAmount * 100,
    metadata: {
      name: contestant?.user?.childName,
      phone: contestant?.user?.parentNumber,
    },
    publicKey,
    text: "Vote with " + btnAmount,

    onSuccess: function (response) {
      //   alert("Thanks for doing business with us! Come back soon!!");
      // console.log("Payemnt response", response);
      if (response.status === "success") {
        voteUser();
        savePaymentDetails(response);
      }
      handleShow();
    },
    onClose: () =>
      alert("Please! we need you to vote for this kid, don't go!!!!"),
  };

  const savePaymentDetails = async (res) => {
    const data = {
      payer: contestant.user.childName,
      contestantId: contestant.user._id,
      vote: quantity,
      amount: btnAmount,
      status: res.status,
      reference: res.reference,
    };
    await savePayment(data);
  }

  const voteUser = async () => {
    const data = {
      votes: quantity,
      userId: id,
    };
    // console.log(data, contestant._id);
    await voteContestant(contestant._id, id, data);
  };

  useEffect(() => {
    fetchContestant(id);
    setStage(settings[0]?.stageVote);
  }, []);

  return (
    <>
      <Navbar />
      <div className="banner-container">
        <h1>VOTE</h1>
      </div>
      <div className="body-container">
        <div className="left-column">
          <img className="img" src={contestant?.user?.image} />
        </div>
        <div className="right-column">
          <h2>{contestant?.user?.childName}</h2>
          <h1>{contestant?.votes} Vote(s)</h1>
          <p>Age: {contestant?.user?.age}</p>
          <div className="payment">
          {contestant?.votes < stage ? 
            <p>
              {stage - contestant?.votes} votes remaining to qualify for next stage
            </p>
            : <p>
              
            </p>}
            <div className="def-number-input number-input">
              <button onClick={() => decrease()} className="minus"></button>
              <input
                className="quantity"
                name="quantity"
                value={quantity}
                type="number"
                onChange={onChange}
              />
              <button onClick={() => increase()} className="plus"></button>
            </div>

            {settings[0]?.voteButton && (<PaystackButton className="paystack-button" {...componentProps} />)}
          </div>
          <hr className="mt-4"/>
          <CopyToClipboard text={url}
          onCopy={() => setCopied(true)}>
          <Button variant="warning" className="form-input.btn mt-4">Click to copy contestant voting link</Button>
        </CopyToClipboard>
        {copied ? <span style={{color: 'red'}}>
          <img src={Tick} className="mt-4" />
        </span> : null}
          <div className="p-text">
            <p>
              If you are paying via Bank Transfers, kindly ensure that Transfers
              are made through the Bank Details below ONLY. Use the contestants
              full name as the description while doing your Transfer then send
              proof of payment via <a href="https://wa.me/message/KSCPY7WAWWSNH1">WhatsApp here</a>
               
            </p>
            <div className="bank">
              <p>Bank Name:</p> <p> GTBank </p>
              <p>Account Number:</p>
              <p> 0699640159 </p>
              <p>Account Name:</p>
              <p> Celebrity Kid Fashion Magazine</p>
            </div>
          </div>
          <div className="p-text2">
            {/* <p>
              Note: Send your payment receipt to the{" "}
              <a href="https://wa.me/message/JK5MG4SP7XZNJ1">
                WhatsApp number here
              </a>{" "}
              to validate your baby's vote.
            </p> */}
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>The PrimeKid Contest</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Thank you. You have successfully voted. Keep voting to keep your child ahead.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
