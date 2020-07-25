import React from "react";
import "./styles/projects.css";
import Icon from "./icons/Icon.js";

const Projects = () => {
  return (
    <div>
      <main className="px-4">
        <section className="max-w-4xl py-12 mx-auto text-center md:py-16">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl text-white">
            Projects
          </h1>
        </section>
        <section className="grid max-w-3xl grid-flow-row grid-cols-1 gap-4 py-8 mx-auto md:gap-8 md:grid-cols-2">
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Airbnb Mock-up</h3>
            <div className="flex mt-4">
              {/* <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a> */}
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/house-renting-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Node Weather Application</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://cook-node-weather-app.herokuapp.com/"
                target="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/Node-weather-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Quiz App</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://vibrant-engelbart-86c039.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/react-quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Bored At Home</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://mystifying-kowalevski-eab105.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/indecison-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Robots API</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://cook1619.github.io/Robot-API/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/Robot-API"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Studio Ghibli API</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://cook1619.github.io/Studio-Ghibli-API/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/Studio-Ghibli-API"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Angular Password Generator</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://password-gen-red.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/Cook1619/NG-Password-Generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* <div className="py-10 max-w-3xl mx-40">
        <h1 className="text-center">Projects</h1>
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
      </div> */}
      <hr className="main-hr" />
    </div>
  );
};

export default Projects;
