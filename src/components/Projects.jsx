import React from "react";
import "./styles/projects.css";
import { FaReact } from "react-icons/fa";
import Icon from "./icons/Icon.js";


const Projects = () => {
  return (
    <div>
          <main className="px-4">
        <section className="max-w-4xl py-12 mx-auto text-center md:py-16">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Projects
          </h1>
        </section>
        <section className="grid max-w-3xl grid-flow-row grid-cols-1 gap-4 py-8 mx-auto md:gap-8 md:grid-cols-2">
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Test1</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/write-more"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Test 2</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Test 3</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Recipe Site Skeleton</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://recipe-skeleton.vercel.app/"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/recipe"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Test 4</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Test 5</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href=""
                target="_blank"
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