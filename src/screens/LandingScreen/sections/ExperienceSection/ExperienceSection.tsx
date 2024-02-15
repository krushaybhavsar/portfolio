import React from "react";
import "./ExperienceSection.css";
import { ExperienceSectionData } from "../../../../data";
import { LandingPageSectionProps } from "../../../../types";
import Timeline from "../../../../components/Timeline/Timeline";
import TimelineSegment from "../../../../components/Timeline/TimelineSegment";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import "react-vertical-timeline-component/style.min.css";

type ExperienceSectionProps = {} & LandingPageSectionProps;

const ExperienceSection = (props: ExperienceSectionProps) => {
  const timelineIconStyle: React.CSSProperties = {};

  return (
    <div className="experience-section noise" id={props.sectionID}>
      <h1 className="experience-section-title">discover my career journey</h1>
      <Timeline>
        {ExperienceSectionData.map((experience, index) => (
          <TimelineSegment key={index} index={index} data={experience} />
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceSection;
