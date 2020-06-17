import React from "react";
import "./styles/skills.css";
import reactimg from "./img/react.png";
import jsimg from "./img/jsnode.png";
import cssimg from "./img/css.png";
import { FaBeer } from 'react-icons/fa';

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <h1>Skills</h1>
      </div>
      <div className="skills-icons">
        <div className="skills-card">
          <img src={reactimg} alt="react" />
        </div>
        <div className="skills-card">
          <img src={jsimg} alt="js" />
        </div>
        <div className="skills-card">
          <img src={cssimg} alt="css" />
        </div>
        <div className="skills-card">
          <FaBeer />
        </div>
      </div>
      <hr className="skills-hr" />
    </div>
  );
};

export default Skills;
