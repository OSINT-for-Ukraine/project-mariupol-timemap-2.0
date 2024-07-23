import "./timeline.css";
import { TimelineHandle } from "./TimelineHandles";
import { ZoomButtons } from "./ZoomButtons";

export const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <TimelineHandle backwards/>
      <div className="timeline-bottom">
        <ZoomButtons />
      </div>
      <TimelineHandle backwards={false}/>
    </div>
  );
};
