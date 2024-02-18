import React, { useState } from "react";
import "./ProjectsSection.css";
import {
  LandingPageSectionProps,
  ProjectCarouselCard,
} from "../../../../types";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";
import Carousel from "../../../../components/Carousel/Carousel";
import { ProjectsSectionData } from "../../../../data";
import ProjectModalContent from "../../../../components/Modal/ProjectModalContent";
import Modal from "../../../../components/Modal/Modal";
type ProjectsSectionProps = {} & LandingPageSectionProps;

const ProjectsSection = (props: ProjectsSectionProps) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContentData, setModalContentData] = useState<
    ProjectCarouselCard | undefined
  >(undefined);

  return (
    <>
      <div className="projects-section noise" id={props.sectionID}>
        {/* <BlobBackground blobCurrXY={{ x: 0, y: 0 }} iblobEnabled={false} /> */}
        <h1 className="projects-section-title">featured projects</h1>
        <Carousel
          data={ProjectsSectionData}
          setModalShow={setModalShow}
          setModalContentData={setModalContentData}
        />
      </div>
      <Modal
        modalContent={<ProjectModalContent projectData={modalContentData} />}
        setShow={setModalShow}
        show={modalShow}
      />
    </>
  );
};

export default ProjectsSection;
