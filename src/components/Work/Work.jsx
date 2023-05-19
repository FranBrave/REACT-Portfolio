import "./Work.scss";

import ProjectCardData from "../WorkCardData/WorkCardData";
import ProjectCard from "../ProjectCard/ProjectCard";
import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value, index) => {
          return (
            <ProjectCard
              key={index}
              imgSrc={value.imgSrc}
              title={value.title}
              text={value.text}
              github={value.GitHub}
              url={value.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
