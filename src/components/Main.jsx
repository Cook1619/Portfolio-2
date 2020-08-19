import React from "react";
import { motion } from "framer-motion";
import img from "./img/github_pic-1.png";

const Main = () => {
  return (
    <div>
      <div className="grid grid-rows-4 grid-flow-col gap-1 max-w-2xl m-auto pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="row-span-1 col-span-2 text-2xl text-gray-500"
        >
          Hello, I'm Mathew Cook
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="row-span-1 col-span-2 text-3xl text-white"
        >
          I'm a FullStack Javascript Developer
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn" }}
          className="row-span-1 col-span-2 text-2xl text-gray-500"
        >
          I like bringing relevant data to the users to help make informed
          business decisions
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, ease: "easeIn" }}
          className="row-span-4 rounded-b-lg"
        >
          <img className="w-48 h-48" src={img} alt="Matt Cook" />
        </motion.div>
      </div>
      <hr className="main-hr" />
    </div>
  );
};

export default Main;
