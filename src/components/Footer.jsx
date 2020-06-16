import React from "react";
import "./styles/footer.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  let newdate = new Date();
  let date = newdate.getFullYear();
  return (
    <div className="footer-container">
      <div>
        <p>Mathew Cook</p>
        <br />
        <p>Twin Cities, MN</p>
      </div>
      <div>
        <p>© Mathew Cook {date}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faHome} />
      </div>
    </div>
  );
};

export default Footer;
