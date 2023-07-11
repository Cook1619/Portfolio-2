import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-100-500 p-6 bg-gray-800">
        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-3xl text-white tracking-tight">Mathew Cook</span>
        </motion.div>
        <div className="">
          <div className="text-sm lg:flex-grow">
            <a
              href="#skills"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 mr-4 text-xl"
            >
              Skills
            </a>
            <a
              href="https://github.com/Cook1619"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 mr-4 text-xl"
            >
              Github
            </a>
            <a
              href="/MC-2023.pdf"
              download
              rel="noopener noreferrer"
              target="_blank"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 text-xl"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
      <hr className="main-hr" />
    </div>
  );
};

export default Navbar;
