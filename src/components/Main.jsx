import React from "react";
import "./styles/main.css";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="main-container"
      >
        <p>Hello, I'm Mathew Cook</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn"  }}
        className="second-container"
      >
        <h2>I'm a FullStack Web Developer</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeIn"  }}
        className="third-container"
      >
        <p>
          I love creating web applications to solve problems and just for fun
        </p>
      </motion.div>
    </div>
  );
};

export default Main;
