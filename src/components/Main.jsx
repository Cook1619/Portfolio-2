import React from "react";
import { motion } from "framer-motion";
import img from "./img/github_pic.jpeg";

const Main = () => {
  return (
    <div>
      <div className="grid grid-rows-4 grid-flow-col gap-1 max-w-2xl m-auto pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="row-span-1 col-span-2 ..."
        >
          Hello, I'm Mathew Cook
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="row-span-1 col-span-2 ..."
        >
          I'm a FullStack Web Developer
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn" }}
          className="row-span-1 col-span-2 ..."
        >
          I like presenting users to relavant data to their position
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, ease: "easeIn" }}
          className="row-span-4 ..."
        >
          <img className="w-48 h-48" src={img} alt="Matt Cook" />
        </motion.div>
      </div>
      <hr className="main-hr" />
    </div>
  );
};

export default Main;
