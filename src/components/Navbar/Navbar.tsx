import React from "react";
import "./Navbar.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { HashLink as Link } from "react-router-hash-link";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.25, delay: 1.75 }}
    >
      <div className="navbar__socials-container">
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/krushaybhavsar/"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <LinkedIn className="navbar__socials-item linkedin" />
        </a>
        <a
          aria-label="Github"
          href="https://www.github.com/krushaybhavsar"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Github className="navbar__socials-item github" />
        </a>
        <a
          aria-label="Twitter"
          href="https://twitter.com/krushaybhavsar"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Twitter className="navbar__socials-item twitter" />
        </a>
        <a
          aria-label="Instagram"
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
          aria-label="About"
        >
          about
        </Link>
        <Link
          to={"#experience"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Experience"
        >
          journey
        </Link>
        <Link
          to={"#projects"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Projects"
        >
          projects
        </Link>
        <Link
          to={"#skills"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Skills"
        >
          skills
        </Link>
        <Link
          to={"#contact"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Contact"
        >
          contact
        </Link>
        {/* <Link
          to={"blog"}
          smooth
          className="navbar__menu-item animated-underline"
        >
          blog
        </Link> */}
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
      <MobileMenu />
    </motion.div>
  );
};

export default Navbar;
