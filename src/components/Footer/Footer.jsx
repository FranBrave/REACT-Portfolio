import "./Footer.scss";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaHome, FaMailBulk, FaPhone, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <p>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              Menorca, Spain
            </p>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              +34 667 943 153
            </p>
          </div>

          <div className="mail">
            <p>
              <a
                href="mailto:valiente.fco@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
                valiente.fco@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            After more than 10 years of experience in hospitality and transport
            industries, with a strong vocation in the IT sector, I have studied
            as a Full Stack Web Developer in a Bootcamp to professionalize
            myself.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/francisco-valiente-fulllstack-developer"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />

              <AiFillGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
