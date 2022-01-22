/* eslint-disable import/no-duplicates */
import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../assets/122.jpg';
import slide2 from '../../assets/122.jpg';
import slide3 from '../../assets/122.jpg';

export default function Sliders() {
  return (
    <div className='gpt3__header'>
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={slide1} alt="slide1" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={slide2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={slide3} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
    </div>
  );
}
