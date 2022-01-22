import React from "react";
import logo from "../../assets/kings_logo.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>
          This contest is being organized by Skybearers International Nigeria
          Limited, a Contemporary Media and events management and Cultural
          engagement, Company with Head office in Abuja. <br /> All Rights
          Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Support</h4>
        <p>Terms & Conditions</p>
        <p>Register</p>
        <p>Vote</p>
        <p>Gallery</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        {/* <p>Crechterwoord K12 182 DK Alknjkcb</p> */}
        <p>085-132567</p>
        <p>info@tmikmagazine.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 TMIK. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
