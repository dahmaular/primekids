import React from "react";
import { Brand, CTA, Navbar } from "../Components";
import { Footer, Header, Possibility, WhatGPT3 } from "../containers";
import "../App.css";
import InfoBox from "../Components/info-box/box";
import { CountdownTimer } from "../Components/countdown/countdown";

function Home() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
        <InfoBox />
      {/* <Brand /> */}
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <CountdownTimer />
      <Footer />
    </div>
  );
}

export default Home;
