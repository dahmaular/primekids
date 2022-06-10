/* eslint-disable import/no-duplicates */
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../assets/primeKidSlides.jpg";
import slide2 from "../../assets/primeKidSlides2.jpg";

export default function Sliders() {
  return (
    <div className="gpt3__header">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={slide1} alt="slide1" />
        </div>
        <div>
          <img src={slide2} />
        </div>
      </Carousel>
    </div>
  );
}
