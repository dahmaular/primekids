import React, { useContext, useEffect, useState } from "react";
import { Brand, CTA, Navbar } from "../Components";
import { Footer, Header, Possibility, WhatGPT3 } from "../containers";
import "../App.css";
import InfoBox from "../Components/info-box/box";
import { CountdownTimer } from "../Components/countdown/countdown";
import LeadersBoard from "../containers/contestants/leadersBoard";
import TermsBox from "../Components/terms-box/termsBox";
import { Link } from "react-router-dom";
import { ContestantContext } from "../services/contestants-service";

function Home() {
  const { getSettings, settings } = useContext(ContestantContext);

  // useEffect(() => {
  //   getSettings();
  // }, []);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Possibility />
      <TermsBox />
      <CTA />
      <div className="vote-btn">
        <Link to="/gallery">
          <button type="button">Vote Now </button>
        </Link>
        <CountdownTimer />
      </div>

      <LeadersBoard />
      <Footer />
    </div>
  );
}

export default Home;
