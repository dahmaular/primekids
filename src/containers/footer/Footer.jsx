import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Whatsapp from "../../assets/wp.png";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>
          This contest is powered by The Prime Kids Global and showcases the beauty and
          Indomitable spirit of the Nigerian child. <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Support</h4>
        <Link to={"/terms"}>
          <p>Terms & Conditions</p>
        </Link>
        <Link to={"/register"}>
          <p>Register</p>
        </Link>
        <Link to={"/gallery"}>
          <p>Vote</p>
        </Link>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        {/* <p>Crechterwoord K12 182 DK Alknjkcb</p> */}
        <p>+234 702 006 5252</p>
        <p>primekidsglobal@gmail.com</p>
        <diV class="social-icons">
          <Link
            class="social-icon-link instagram"
            to={{
              pathname: "https://instagram.com/#",
            }}
            target="_blank"
            aria-label="Instagram"
          >
            <img src={Instagram} width={30} height={30} />
          </Link>
          <Link
            class="social-icon-link facebook"
            to={{
              pathname:
                "https://www.facebook.com/#",
            }}
            target="_blank"
            aria-label="facebook"
          >
            <img src={Facebook} width={30} height={30} />
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
          </Link>
          <Link
            class="social-icon-link whatsapp"
            to={{ pathname: "https://wa.me/message/KSCPY7WAWWSNH1" }}
            target="_blank"
            aria-label="WhatsApp"
            color="white"
          >
            <img src={Whatsapp} width={30} height={30} />
          </Link>
        </diV>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 PrimeKidsGlobal. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
