import React from "react";
// import possibilityImage from '../../assets/possibility.png';
import "./possibility.css";
import Winner from "../../assets/PrimeKidsGlobal_adz5.png";
import Stages from "../../assets/PrimeKidsGlobal_adz2.png";
import { isMobile } from "react-device-detect";

const Possibility = () => (
  <>
  {isMobile ? (
    <div className="gpt3__possibility" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={Stages} alt="possibility" />
    </div>
    <div className="gpt3__possibility-image">
      <img src={Winner} alt="possibility" />
    </div>
  </div>
  ) : (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={Stages} alt="possibility" />
    </div>
    <div className="gpt3__possibility-image">
      <img src={Winner} alt="possibility" />
    </div>
  </div>
  )}
  </>
);

export default Possibility;
