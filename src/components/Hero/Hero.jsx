import "./Hero.scss";

import React from "react";
import { Link } from "react-router-dom";

import IntroImg from "../../assets/IntroImg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M FRAN VALIENTE_</p>
        <h1>Full Stack Web Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
