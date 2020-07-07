import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-100-500 p-6">
        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl text-teal-900 tracking-tight">Mathew Cook</span>
        </motion.div>
        <div className="">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800 mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800 mr-4"
            >
              Skills
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800 mr-4"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-800"
            >
              Github
            </a>
          </div>
        </div>
      </nav>
      <hr className="main-hr" />
    </div>
  );
};

export default Navbar;
