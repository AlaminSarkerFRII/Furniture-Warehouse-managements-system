import React, { useState } from "react";
import "./Banner.css";
import banner1 from "../../../../gadget-pic/src/Assets/images/banner-1.jpg";
import banner2 from "../../../../gadget-pic/src/Assets/images/banner-2.jpg";
import banner3 from "../../../../gadget-pic/src/Assets/images/banner-3.jpg";

import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="banner-img">
          <img src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Best Moments you Can Enjoy</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-img">
          <img src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Life is beautiful with nature</h3>
            <p>sunset give you a best feelings everywhere </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-img">
          <img src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>world is best for you </h3>
            <p>world is best for you when you are staying in with nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
