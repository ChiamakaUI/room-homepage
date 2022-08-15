import React, { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import arrow from "./Images/icon-arrow.svg";

const Slider = () => {
  const slides = [
    {
      slideImage: "Images/desktop-image-hero-1.jpg",
      slideHeader: "Discover innovative ways to decorate",
      slideText: `We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing
      your vision to life. Create a room in your own style with our
      collection and make your property a reflection of you and what you
      love.`,
    },

    {
      slideImage: "Images/desktop-image-hero-2.jpg",
      slideHeader: "We are available all across the globe",
      slideText: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. 
      Any questions? Don't hesitate to contact us today.`,
    },
    {
      slideImage: "Images/desktop-image-hero-3.jpg",
      slideHeader: "Manufactured with the best materials",
      slideText: `Our modern furniture store provide a high level of quality. 
        Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. 
        With three decades of experience in this industry, we understand what customers want for their home and office.`,
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderValue, setSliderValue] = useState(slides[activeSlide]);

  const prevSlide = () => {
    if (activeSlide !== 0) {
      const active = activeSlide - 1;
      setActiveSlide(active);
      setSliderValue(slides[active]);
    } else if (activeSlide === 0) {
      const active = slides.length - 1;
      setActiveSlide(active);
      setSliderValue(slides[active]);
    }
  };

  const nextSlide = () => {
    if (activeSlide !== 2) {
      const active = activeSlide + 1;
      setActiveSlide(active);
      setSliderValue(slides[active]);
    } else if (activeSlide === 2) {
      const active = 0;
      setActiveSlide(active);
      setSliderValue(slides[active]);
    }
  };
  const { slideImage, slideHeader, slideText } = sliderValue;

  return (
    <div className="slider">
      <img src={slideImage} alt="sliderImage" />
      <div className="slider-text">
        <h3>{slideHeader}</h3>
        <p>{slideText}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "20%",
            margin: "1% auto 12.4%",
            justifyContent: "space-between",
          }}
        >
          <p>Shop now</p>
          <img src={arrow} alt="Shop" />
        </div>
        <button onClick={prevSlide}>
          <MdArrowBackIos
            style={{ color: "hsl(0, 0%, 100%)", fontSize: "24px" }}
          />
        </button>
        <button onClick={nextSlide}>
          <MdArrowForwardIos
            style={{ color: "hsl(0, 0%, 100%)", fontSize: "24px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
