import "./timelineHandle.css";

export const TimelineHandle = ({ backwards }: { backwards: boolean }) => {
  return (
    <div className={`timeline-handle ${backwards ? "" : "right"}`}>
      <span className="timeline-handle-triangle"></span>
    </div>
  );
};
