import React from "react";
import Icon from "./icons/Icon.js";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div id="skills">
      <section className="py-16 md:py-20">
        <div className="flex justify-center text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl pt-8 pb-8 text-white">
          <h1>Skills</h1>
        </div>
        <ul className="flex flex-wrap items-center justify-center mb-8">
          {skills.map(({ icon, name }) => (
            <li
              key={icon}
              className="flex flex-col items-center justify-center w-24 h-24 m-2 bg-gray-800 rounded-lg shadow"
            >
              <span className="inline-block mb-2 text-2xl">
                <Icon name={icon} />
              </span>
              <span className="inline-block text-xs font-bold">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="main-hr" />
    </div>
  );
};

export default Skills;
