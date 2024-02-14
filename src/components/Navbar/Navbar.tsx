import React from "react";
import "./Navbar.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__socials-container">
        <a
          href="
          https://www.linkedin.com/in/krushaybhavsar/"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <LinkedIn className="navbar__socials-item linkedin" />
        </a>
        <a
          href="https://www.github.com/krushaybhavsar"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Github className="navbar__socials-item github" />
        </a>
        <a
          href="https://www.instagram.com/krushaybhavsar"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Instagram className="navbar__socials-item instagram" />
        </a>
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu-item animated-underline">journey</div>
        <div className="navbar__menu-item animated-underline">projects</div>
        <div className="navbar__menu-item animated-underline">blog</div>
        <div className="navbar__menu-item animated-underline">contact</div>
        <div
          className="navbar__menu-item animated-underline"
          onClick={() => {
            window.open(
              window.origin + "/assets/Krushay_Bhavsar_Resume.pdf",
              "_blank"
            );
          }}
        >
          resume
        </div>
      </div>
    </div>
  );
};

export default Navbar;
