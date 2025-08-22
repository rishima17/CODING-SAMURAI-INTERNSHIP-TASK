import React from "react";

const HeroSection = () => {
  return (
    <div>
      <main>
        <div className="hero-section-text">
          <h1>Unleash Your Potential with Nike.</h1>
          <h3>
            “Engineered for performance, designed for style — built to move with
            you.”
          </h3>

          <div className="hero-btns">
            <button>Shop Now</button>
            <button className="sec-btn">Category</button>
          </div>
          <div className="shop">
            <p>Also available at</p>
            <div className="brand-icons">
              <img src="flipkart.png" alt="" />
              <img src="amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hero-section-img">
          <img src="hero-image.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
