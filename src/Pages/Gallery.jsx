import React from "react";
import "../styles/gallery.css";
import bg from "../assets/primeKidSlides.jpg";
import { Navbar } from "../Components";
import Contestants from "../containers/contestants/contestants";

const Gallery = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <div className="gpt3__header" id="home">
          <img src={bg} className="gal-image" />
        </div>
      </div>
      <Contestants />
    </>
  );
};

export default Gallery;
