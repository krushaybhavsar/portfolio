import React from "react";
import "./ProjectsSection.css";
import { LandingPageSectionProps } from "../../../../types";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";

type ProjectsSectionProps = {} & LandingPageSectionProps;

const ProjectsSection = (props: ProjectsSectionProps) => {
  return (
    <div className="projects-section noise" id={props.sectionID}>
      {/* <BlobBackground blobCurrXY={{ x: 0, y: 0 }} iblobEnabled={false} /> */}
      <h1 style={{ color: "white" }}>Projects Section</h1>
    </div>
  );
};

export default ProjectsSection;
