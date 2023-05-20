import { Link } from "react-router-dom";
import "./AboutContent.scss";
import profile from "../../assets/perfil.JPG";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

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
          I'm Fran Valiente, an enthusiastic Junior Full Stack Developer. My
          knowledge comes from an intensive bootcamp, where I delved into
          technologies like Angular, React and NodeJS, among others.
        </p>
        <p>
          {" "}
          I continued my learning journey with additional courses, refining and
          expanding my technical skills and acquiring new ones. In my recent
          venture into the software development sector, I bring an innovative
          perspective and solid technical knowledge.
        </p>{" "}
        <p>
          My goal is constant professional growth, focused on acquiring new
          techniques and staying updated in a constantly evolving tech industry.
        </p>
        <div className="contactbtns">
          <Link to="/contact">
            <button className="btn contact-btn">Contact</button>
          </Link>
          <a
            href="mailto:valiente.fco@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <TfiEmail size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-valiente-fulllstack-developer"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};
