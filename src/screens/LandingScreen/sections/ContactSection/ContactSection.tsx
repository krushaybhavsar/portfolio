import React from "react";
import "./ContactSection.css";
import { LandingPageSectionProps } from "../../../../types";

type ContactSectionProps = {} & LandingPageSectionProps;

const ContactSection = (props: ContactSectionProps) => {
  return (
    <div className="contact-section noise" id={props.sectionID}>
      <h1 style={{ color: "white" }}>Contact Section</h1>
    </div>
  );
};

export default ContactSection;
