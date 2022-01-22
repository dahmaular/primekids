import React from "react";
import { motion } from "framer-motion";
import "../styles/register.css";
import bg from "../assets/about_bg.jpg";
import { Navbar } from "../Components";

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

const Register = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <div className="abt__header">
          <img src={bg} />
        </div>
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
            <form className="formContainer">
              <div className="form-inputs">
                <input
                  className="input-form"
                  type="text"
                  placeholder="Full Name:"
                />
              </div>
              <input className="input-form" type="text" placeholder="Age" />
              <input
                className="input-form"
                type="text"
                placeholder="Parent's Full Name"
              />
              <input
                className="input-form"
                type="text"
                placeholder="Parent's Number"
              />
              <input
                className="input-form"
                type="text"
                placeholder="Parent's Email"
              />
              <div className="form-inputs mb-4">
                <p>
                  Upload child's image
                </p>
                <input
                  className="form-control"
                  type="file"
                  id="image"
                  name="image"
                  //  value={values.image} onChange={handleFileChnage}
                />
              </div>
              <input
                type="checkbox"
                name="agree"
                // checked={checked}
                //   onChange={handleCheck}
              />{" "}
              <p>
                I have read and agreed with the{" "}
                <a href="/terms">Terms and Conditions</a>
              </p>
              {/* {errors.check && <p>{errors.check}</p>} */}
              <button
                color="primary"
                className="form-input.btn"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
