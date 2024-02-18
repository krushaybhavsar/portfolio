import React from "react";
import "./Navbar.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { HashLink as Link } from "react-router-hash-link";

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
          href="https://www.instagram.com/krushaybhavsar?igsh=MTlsYXYxN3Z4azF6bQ=="
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Instagram className="navbar__socials-item instagram" />
        </a>
      </div>
      <div className="navbar__menu">
        <Link
          to={"#intro"}
          smooth
          className="navbar__menu-item animated-underline"
        >
          about
        </Link>
        <Link
          to={"#experience"}
          smooth
          className="navbar__menu-item animated-underline"
        >
          journey
        </Link>
        <Link
          to={"#projects"}
          smooth
          className="navbar__menu-item animated-underline"
        >
          projects
        </Link>
        <Link
          to={"#contact"}
          smooth
          className="navbar__menu-item animated-underline"
        >
          contact
        </Link>
        <Link
          to={"blog"}
          smooth
          className="navbar__menu-item animated-underline"
        >
          blog
        </Link>
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
