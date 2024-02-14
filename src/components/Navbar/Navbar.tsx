import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo-container"></div>
      <div className="navbar__menu">
        <div className="navbar__menu-item animated-underline">journey</div>
        <div className="navbar__menu-item animated-underline">projects</div>
        <div className="navbar__menu-item animated-underline">blog</div>
        <div className="navbar__menu-item animated-underline">contact</div>
      </div>
    </div>
  );
};

export default Navbar;
