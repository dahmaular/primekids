import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

const CTA = () => (
  <div className="gpt3__cta" id="slide">
    {/* <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div> */}
    <div className="gpt3__cta-btn">
    <Link to="/register">
      <button type="button">Register For Free </button>
      </Link>
    </div>
  </div>
);

export default CTA;
