import React from "react";
import "../styles/about.css";
import { Navbar } from "../Components";
import bg from "../assets/abtbg.jpg";
import reg from "../assets/reg.png";
import vote from "../assets/vot.png";
import win from "../assets/wi.png";
import { Footer } from "../containers";

const AboutUs = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <div className="abt__header">
          <img src={bg} />
        </div>
      </div>
      <div className="abt_title">
        <h1 className="gradient__text">About Us</h1>
        <div>
          <p>
            Prime kids, as the name implies, is an organisation positioned to
            view kids of all works and habitats as first, highest in rank or
            importance, the most to be desired amidst several other options.{" "}
            <br />
            <br />
            In our world today children have been relegated to the back seat
            where as other non beneficial and an important issues have taken
            centre Stage. Child poverty child illiteracy child abuse, child
            trafficking amongst other vices are the order of the day. <br />{" "}
            <br />
            At prime kids, we strive to ensure every child is recognised as
            prime. We achieve these through our programs; The Prime Kids
            contest, The Back-to-school program, where 20 kids are sent back to
            school, The food basket program, where 100 families are provided
            with food stuff, and the celebrity kid fashion magazine feature,
            where working with our partners we have a chance to feature our kids
            on an international magazine platform for modelling and influencing
            opportunities. <br />
            <br />
            Everything we do at prime kids is child-centric and we will not stop
            until we effect every child in the whole nation, the continent, and
            the globe at large.
          </p>
        </div>
      </div>
      <div className="abt_info">
        <div>
          <img src={reg} className="info_img" />
          <h2>Register</h2>
          <p>
            Our registeration requires only few information and it is free, We
            only need some special validation to ensure that all contestants are
            Authentic.
          </p>
        </div>
        <div>
          <img src={vote} className="info_img" />
          <h2>Vote</h2>
          <p>
            Voting costs N100 per vote. We allow multiple votes and voters are
            to either use our online platform or by bank transfers then send
            screenshots for verification
          </p>
        </div>
        <div>
          <img src={win} className="info_img" />
          <h2>Win</h2>
          <p>
            First Prize: All expense paid trip to Dubai for winning baby and mother
            <br /> Second Prize: 450k Naira <br /> Third Prize: 350k Naira{" "}
            <br /> Loads of Consolation prizes to be won.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
