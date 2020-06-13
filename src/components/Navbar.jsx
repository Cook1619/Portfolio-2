import React from "react";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
        <h1 className="name">Mathew Cook</h1>
    <ul class="nav-links">
      <li class="nav-item"><a href="#">About</a></li>
      <li class="nav-item"><a href="#">Skills</a></li>
      <li class="nav-item"><a href="#">Blog</a></li>
      <li class="nav-item"><a href="#">Github</a></li>
    </ul>
  </nav>
  );
};

export default Navbar;
