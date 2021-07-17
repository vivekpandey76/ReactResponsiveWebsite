import React from "react";
import { Button } from "./Button";
import "./Homepage.css";

function Homepage() {
  const play = (e) => {
    console.log("pkdsh");
    window.location.href = "/trailer";
  };

  return (
    <div className="hero-container">
      <video src="/video/home.mp4" autoPlay loop muted />
      <h1>We make your website look great</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          Get Started
        </Button>
        <button onClick={play} class="huge ui right labeled icon button">
          <i class="play circle outline icon"></i>
          Watch Trailer
        </button>
      </div>
      <div className="ui modal">
        <div class="header">Profile Picture</div>
      </div>
    </div>
  );
}

export default Homepage;
