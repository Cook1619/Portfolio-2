import React from "react";
import "./styles/main.css";
import { motion } from "framer-motion";
import img from './img/github_pic.jpeg'

const Main = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="main-container"
      >
        <p>Hello, I'm Mathew Cook</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="second-container"
      >
        <h2>I'm a FullStack Web Developer</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeIn" }}
        className="third-container"
      >
        <p>
          I love creating web applications to solve problems and just for fun
        </p>
      </motion.div>
      <img src={img} alt="Matt Cook"/>
      <hr className="main-bottom" />
    </div>
  );
};

export default Main;
