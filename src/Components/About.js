import React from "react";
import darkImage from "./Images/image-about-dark.jpg";
import lightImage from "./Images/image-about-light.jpg";

const About = () => {
  return (
    <div className="about-us">
      <img src={darkImage} alt="darkImage" />
      <div className="about-text">
        <h3>About our furniture</h3>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <img src={lightImage} alt="lightImage" />
    </div>
  );
};

export default About;
