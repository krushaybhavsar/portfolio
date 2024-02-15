import React, { Children } from "react";
import { timelineHeight } from "./TimelineSegment";

type TimelineProps = {
  children: React.ReactNode;
};

const Timeline = (props: TimelineProps) => {
  return (
    <div
      className="timeline-container"
      style={{
        height: `calc(${
          (Children.count(props.children) + 1) * timelineHeight
        }px - 5vw)`,
      }}
    >
      <ul className="timeline">{props.children}</ul>
    </div>
  );
};

export default Timeline;
