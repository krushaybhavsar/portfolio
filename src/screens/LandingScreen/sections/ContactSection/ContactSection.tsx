import React from "react";
import "./ContactSection.css";
import { LandingPageSectionProps } from "../../../../types";
import { ReactComponent as Mail } from "../../../../assets/mail.svg";
import { ReactComponent as LinkedIn } from "../../../../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../../../assets/twitter.svg";
import { ReactComponent as CodeIcon } from "../../../../assets/code-icon.svg";

type ContactSectionProps = {} & LandingPageSectionProps;

const ContactSection = (props: ContactSectionProps) => {
  return (
    <div className="contact-section noise" id={props.sectionID}>
      <h1 className="contact-section-title" style={{ margin: 0 }}>
        want to make <i>something great</i> together?
      </h1>
      <h1 className="contact-section-title">i'm always up for a chat.</h1>
      <div className="contact-section-content glass">
        <div className="csc-content-container vert-flex">
          <p className="csc-description">{"Reach out to me at"}</p>
          <p className="csc-email">
            <Mail />
            <a
              className="animated-underline"
              href="mailto:krushaybhavsar@gmail.com"
            >
              {"krushaybhavsar@gmail.com"}
            </a>
          </p>
        </div>
        <div className="csc-content-container vert-flex">
          <p className="csc-description">{"Connect with me on"}</p>
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
              href="https://twitter.com/krushaybhavsar"
              target="_blank"
              rel="noreferrer"
              className="animated-underline"
            >
              <Twitter className="navbar__socials-item twitter" />
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
        </div>
      </div>
      <p className="website-credits">
        {"Designed and developed by Krushay Bhavsar"}
      </p>
      <p className="view-source hori-flex">
        <CodeIcon />
        <a
          href="https://www.github.com/krushaybhavsar/portfolio"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          {"View source code"}
        </a>
      </p>
    </div>
  );
};

export default ContactSection;
