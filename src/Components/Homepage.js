import React from "react";
import { Button } from "./Button";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="hero-container">
      <h1>We make your website look great</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          Get Started
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          Watch Trailer
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
