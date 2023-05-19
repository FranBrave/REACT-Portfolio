import React from "react";
import "./ProjectCard.scss";
import { NavLink } from "react-router-dom";
import angular from "../../assets/angular.png";
import node from "../../assets/node.png";
import sass from "../../assets/sass.png";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="delifood" />
      <div className="logos">
        <img src={angular} alt="angular" />
        <img src={node} alt="node" />
        <img src={sass} alt="sass" />
      </div>
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
