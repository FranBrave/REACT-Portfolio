import { Link } from "react-router-dom";
import "./AboutContent.scss";
import profile from "../../assets/perfil.JPG";

import React from "react";

export const AboutContent = () => {
  return (
    <div className="about">
      <div className="right">
        <div className="img-container">
          <div className="img-profile">
            <img src={profile} alt="profile" className="img" />
          </div>
        </div>
      </div>

      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm Fran Valiente. I did a Full Stack development bootcamp where I
          learned MERN and MEAN stacks. After finishing the training, I took
          additional courses to acquire new skills and enhance the ones I
          already had. In this portfolio you can see the personal projects I've
          worked on, and you can contact me if you are interested.{" "}
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};