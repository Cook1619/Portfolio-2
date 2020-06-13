import React from "react";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <h1>Mathew Cook</h1>
        <ul class="nav-links">
          <li class="nav-item">
            <a href="#">About</a>
          </li>
          <li class="nav-item">
            <a href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#">Github</a>
          </li>
        </ul>
      </nav>
      <hr className="nav-bottom" />
    </div>
  );
};

export default Navbar;
