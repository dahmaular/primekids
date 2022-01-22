import React from 'react';
// import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import Winner from '../../assets/winner.jpg';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={Winner} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>WINNER THE MOST INFLUENTIAL KID CONTEST SEASON 3</h4> */}
      <h1 className="gradient__text">WINNER THE MOST  <br /> INFLUENTIAL KID CONTEST SEASON 3</h1>
      <p>KING AMENEDEN LIGHT PETERS
        He is 6 Months Old and a Nigerian Boy from Benue state. Beautiful, Smart and intelligent Baby LIGHT emerged first from over 500 contestants.
        He is a Kid Model, Kid Actor and Kid Fashion Model.
        All Hail the King AMENEDEN LIGHT PETERS..
      </p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;
