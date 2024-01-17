import React from "react";
import "./index.scss";

function Hero() {
  return (
    <section id="Hero">
      <div className="overlay"></div>
      <div className="heroTitle">
        <h1>Shop With Us</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum
          dicta tenetur! Nesciunt dolor sed soluta eius!
        </h4>
        <div className="heroButtons">
          <button className="ShopNow">SHOP NOW</button>
          <button className="clubMembership">CLUB MEMBERSHIP</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
