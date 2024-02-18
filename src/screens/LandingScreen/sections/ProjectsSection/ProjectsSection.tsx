import React from "react";
import "./ProjectsSection.css";
import { LandingPageSectionProps } from "../../../../types";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";
import Carousel from "../../../../components/Carousel/Carousel";
import { ProjectsSectionData } from "../../../../data";
type ProjectsSectionProps = {} & LandingPageSectionProps;

const ProjectsSection = (props: ProjectsSectionProps) => {
  return (
    <div className="projects-section noise" id={props.sectionID}>
      {/* <BlobBackground blobCurrXY={{ x: 0, y: 0 }} iblobEnabled={false} /> */}
      <h1 className="projects-section-title">featured projects</h1>
      <Carousel data={ProjectsSectionData} />
    </div>
  );
};

export default ProjectsSection;
