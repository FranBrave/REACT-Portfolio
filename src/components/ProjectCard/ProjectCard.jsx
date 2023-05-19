import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="delifood" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
          <NavLink to={props.GitHub} className="btn">
            GitHub
          </NavLink>
          <NavLink to={props.url} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
