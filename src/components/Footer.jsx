import React from "react";
import "./styles/footer.css";


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

      </div>
    </div>
  );
};

export default Footer;
