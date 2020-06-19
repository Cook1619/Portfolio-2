import React from "react";
import "./styles/projects.css";
import { FaReact } from "react-icons/fa";


const Projects = () => {
  return (
    <div>
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-card-container">
          <div className="projects-cards">
            <h2>Title</h2>
            <ul className="css-sucks">
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <a href="#">github.com</a>
            <img src={<FaReact />} alt="project-demo" />
          </div>
          <div className="projects-cards">
            <h2>Title</h2>
            <ul>
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <a href="#">github.com</a>
            <img src={<FaReact />} alt="project-demo" />
          </div>
          <div className="projects-cards">
            <h2>Title</h2>
            <ul>
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <a href="#">github.com</a>
            <img src={<FaReact />} alt="project-demo" />
          </div>
          <div className="projects-cards">
            <h2>Title</h2>
            <ul>
              <li>CSS</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <a href="#">github.com</a>
            <img src={<FaReact />} alt="project-demo" />
          </div>
        </div>
      </div>
      <hr className="projects-hr" />
    </div>
  );
};

export default Projects;