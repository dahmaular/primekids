import React from "react";
import "./box.css";
import reg from "../../assets/reg.png";
import vote from "../../assets/vot.png";
import win from "../../assets/wi.png";

const InfoBox = () => {
  return (
    <div className="info_box">
      <div className="info_items">
        <div className="info__reg">
          <img src={reg} />
          <h1>Register</h1>
          <p>
            For registeration click here We also allow for registration via
            whatsapp, click on the icon.
          </p>
        </div>
        <div className="info__vote">
          <img src={vote} />
          <h1>Vote</h1>
          <p>
            Voting is at a cost of N50 only per vote, multiple votes are
            allowed. Voters are to either use our online platform or by bank
            transfer then send screenshots for verification.
          </p>
        </div>
        <div className="info__win">
          <img src={win} />
          <h1>Win</h1>
          <p>
            First Prize: 1 Million Naira <br /> Second Prize: 500k Cash <br />Third Prize:
            300k Cash <br/>And Loads of Consolation prizes to be won.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
