import React from "react";
import "./ProjectCard.scss";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img className="project-img" src={props.imgSrc} alt="delifood" />
      <div className="logos">
        {props.logos.map((logo, index) => (
          <img src={logo} alt={`logo-${index}`} key={index} />
        ))}
      </div>
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
          <a href={props.github} className="btn">
            <AiFillGithub size={40}></AiFillGithub>
          </a>
          <a href={props.url} className="btn">
            <TbWorldWww size={40}></TbWorldWww>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
