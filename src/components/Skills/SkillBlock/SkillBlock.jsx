import React from "react";
import { SkillItem } from "../SkillItem/SkillItem";
import "./SkillBlock.scss";

const SkillBlock = (props) => {
  return (
    <div className="skill-block">
      <h2>{props.title}</h2>
      <img src={props.icon} alt={`${props.title} icon`} />
      <div className="skills-container">
        {props.skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillBlock;
