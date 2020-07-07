import React from "react";
import "./styles/footer.css";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  let newdate = new Date();
  let date = newdate.getFullYear();
  return (
    <div className="flex justify-between bg-gray-800">
      <div>
        <p>Mathew Cook</p>
        <br />
        <p>Twin Cities, MN</p>
        <br />
        <p>612-875-2835</p>
      </div>
      <div className="mt-12">
        <p>© Mathew Cook {date}</p>
      </div>
      <div className="p-8">
        <a
          href="https://www.linkedin.com/in/mathew-cook-a8b19779/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin className="h-8 w-8 mt-4 mr-4 rounded inline" />{" "}
        </a>
        <a
          href="https://github.com/Cook1619"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-8 w-8 mt-4 inline" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
