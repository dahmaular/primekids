import React from "react";
import "../styles/about.css";
import { Navbar } from "../Components";
import bg from "../assets/about_bg.jpg";
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
            The most influential kid Contest is strictly an online competition
            that is open to Nigerian Children from Ages 0 – 8 years old (0-96
            months), living within and outside Nigeria. This contest will
            showcase qualities such as strength, tenacity, Courage, leadership
            and influence in the kids and will further instill in them, better
            virtues. Despite the voting and the interest in the grand prize, one
            thing stands out, the ability to recognize the influence of one’s
            Child and the desire to make it happen. The Most Influential Kid
            Contest which has now birthed the TMIK magazine is a platform to
            showcase Kids who have a thing for Fashion and at the same time have
            interest in being beauty models and kid influencers. Our magazine
            currently showcases all our kid brand ambassadors as well as the
            Season 1 Winner, King David Chukwudi.
          </p>
        </div>
      </div>
      <div className="abt_info">
        <div>
          <img src={reg} className="info_img" />
          <h2>Register</h2>
          <p>
            Our registeration only requires only few information and it is free,
            We only need some special validation to ensure that all contestants
            are Authentic.
          </p>
        </div>
        <div>
          <img src={vote} className="info_img" />
          <h2>Vote</h2>
          <p>
            Voting is at a cost of N50 only per vote, We allow multiple votes
            and voters are to either use our online platform or by bank
            transfers then send screenshots for verification
          </p>
        </div>
        <div>
          <img src={win} className="info_img" />
          <h2>Win</h2>
          <p>
            First Prize: 1 Million Naira Second Prize: 500k Cash Third Prize:
            300k Cash And Loads of Consolation prizes to be won.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
