import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero-main">
        <p className="hero-p1">Multipurpose Ghost Theme</p>
        <h2 className="hero-heading">Meet the Reiro</h2>
        <div className="hero-action">
          <button className="hero-showcase">Showcase</button>
          <button className="hero-showcase">Documentation</button>
          <button className="hero-details">Details & Buy</button>
        </div>
        <p className="hero-p2">
          A classic look with a modern twist—meet the Reiro, a carefully
          designed Ghost theme for any kind of ideas.
        </p>
      </div>
    </div>
  );
};

export default Hero;
