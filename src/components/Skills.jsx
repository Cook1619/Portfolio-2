import React from "react";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";

const Skills = () => {
  return (
    <div>
      <div className="flex justify-center text-4xl pt-8 pb-8">
        <h1>Skills</h1>
      </div>
      <div className="grid grid-cols-5 gap-16 p-20">
        <div className="pl-2 bg-gray-400">
          <GrNode style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <GrNode style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <GrNode style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
        <div className="p-2 bg-gray-400">
          <FaReact style={{ color: "#01d8ff", fontSize: "8rem" }} />
        </div>
      </div>
      <hr className="main-hr" />
    </div>
  );
};

export default Skills;
