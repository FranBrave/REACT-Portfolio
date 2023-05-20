import React from "react";
import "./ProjectCard.scss";

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
            GitHub
          </a>
          <a href={props.url} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
