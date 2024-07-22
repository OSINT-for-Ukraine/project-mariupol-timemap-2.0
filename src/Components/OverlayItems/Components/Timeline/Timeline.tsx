import "./timeline.css";
import { TimelineHandle } from "./TimelineHandles";
import { ZoomButton } from "./ZoomButtons";

export const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <TimelineHandle backwards/>
      <div className="timeline-bottom">
        <ZoomButton />
      </div>
      <TimelineHandle backwards={false}/>
    </div>
  );
};
