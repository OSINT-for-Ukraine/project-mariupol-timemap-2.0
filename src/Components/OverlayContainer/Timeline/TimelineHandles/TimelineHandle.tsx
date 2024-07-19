import "./timelineHandle.css";

export const TimelineHandle = ( { backwards }: { backwards: boolean } ) => {
  if (backwards) {
    return (
      <div className="timeline-handle">
        <span className="timeline-handle__triangle"></span>
      </div>
    );
  } else {
    return (
      <div className="timeline-handle right">
        <span className="timeline-handle__triangle"></span>
      </div>
    );
  }
};
