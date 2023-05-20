import React from "react";
import SkillBlock from "./SkillBlock/SkillBlock";
import frontend from "../../assets/front-end.png";
import backend from "../../assets/back-end.png";
import tools from "../../assets/tools.png";
import "./Skills.scss";

export const Skills = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
  ];
  const backendSkills = ["NodeJS", "Express", "Symfony", "MongoDB", "MySQL"];
  const toolSkills = [
    "Redux",
    "Postman",
    "GitHub",
    "GitLab",
    "SCRUM",
    "Docker",
  ];

  return (
    <div className="skills">
      <SkillBlock icon={frontend} title="Frontend" skills={frontendSkills} />
      <SkillBlock icon={backend} title="Backend" skills={backendSkills} />
      <SkillBlock icon={tools} title="Tools" skills={toolSkills} />
    </div>
  );
};
