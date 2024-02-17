import React, { useRef } from "react";
import "./Timeline.css";
import { TimelineElementExperience } from "../../types";

type TimelineSegmentProps = {
  key?: any;
  index: number;
  data: TimelineElementExperience;
};

export const timelineHeight = 300;

const TimelineSegment = (props: TimelineSegmentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const topOffset = 50;

  return (
    <li
      className="timeline-segment"
      style={{
        height: timelineHeight,
        top: props.index * (timelineHeight - 2) + topOffset + "px",
      }}
      data-content={props.index + 1}
    >
      <div className="content glass" ref={contentRef}>
        <div className="content-inner">
          <div className="hori-flex company-info-container">
            <div className="company-logo-container">
              <img
                src={props.data.companyLogo}
                alt={props.data.companyName + " Logo"}
                className="company-logo"
              />
            </div>
            <div className="vert-flex company-text-info">
              <h3 className="company-name">{props.data.companyName}</h3>
              <h4 className="job-position">{props.data.jobPosition}</h4>
              <p className="job-dates">{props.data.date}</p>
            </div>
          </div>
          <p className="description">{props.data.description}</p>
          <div className="skills-container hori-flex">
            {props.data.skillsUsed.map((skill, index) => (
              <div key={index} className="skill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineSegment;
