import React from "react";
import "./styles/skills.css";
import reactimg from "./img/react.png";
import jsimg from "./img/jsnode.png";
import cssimg from "./img/css.png";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <h1>Skills</h1>
      </div>
      <div className="skills-icons">
        <div className="skills-card">
          <GrNode style={{ color: "#01d8ff", fontSize: "8rem" }} />
          <p style={{ textAlign: "center" }}>React</p>
        </div>
        <div className="skills-card">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
          <p style={{ textAlign: "center" }}>React</p>
        </div>
        <div className="skills-card">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
          <p style={{ textAlign: "center" }}>React</p>
        </div>
        <div className="skills-card">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
          <p style={{ textAlign: "center" }}>React</p>
        </div>
      </div>
      <hr className="skills-hr" />
    </div>
  );
};

export default Skills;
