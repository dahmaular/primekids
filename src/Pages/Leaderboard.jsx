import React from "react";
import "../styles/gallery.css";
import bg from "../assets/primeKidSlides.jpg";
import { Navbar } from "../Components";
import LeadersBoard from "../containers/contestants/leadersBoard";

const Leaderboard = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <div className="gpt3__header" id="home">
          <img src={bg} className="gal-image" />
        </div>
      </div>
      <LeadersBoard />
    </>
  );
};

export default Leaderboard;
