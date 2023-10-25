import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="data">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="btn-shop">Shop Now</button>
          <button className="btn-cat">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="data-img">
          <img src="/images/flipkart.png" alt="" />
          <img className="amz-pic" src="/images/amazon.png" alt="" />
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
