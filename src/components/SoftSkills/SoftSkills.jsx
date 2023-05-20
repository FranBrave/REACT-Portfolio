import React from "react";
import softskills from "../../assets/abilities.png";
import hobbies from "../../assets/joystick.png";

const SoftSkills = () => {
  return (
    <>
      <h1>More about me</h1>
      <div className="skills">
        <div className="skill-block">
          <h2>Soft Skills</h2>
          <img src={softskills} alt="softskills" />
          <div className="skills-container">
            <div className="skill-item">Ability to work under pressure</div>
            <div className="skill-item">Teamwork skills</div>
            <div className="skill-item">Problem-solving orientation</div>
            <div className="skill-item">Adaptability</div>
            <div className="skill-item">Analytical</div>
          </div>
        </div>
        <div className="skill-block">
          <h2>Hobbies</h2>
          <img src={hobbies} alt="hobbies" />
          <div className="skills-container">
            <div className="skill-item">CrossFit</div>
            <div className="skill-item">Videogames</div>
            <div className="skill-item">Photography</div>
            <div className="skill-item">Running</div>
            <div className="skill-item">Smart gadgets</div>
            <div className="skill-item">Cinema</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SoftSkills;
