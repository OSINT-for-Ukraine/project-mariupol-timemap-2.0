import "./timeline.css";
import { TimelineHandle } from "./TimelineHandles";
import { ZoomButton } from "./ZoomButton";

export const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      <TimelineHandle backwards={true}/>
      <div className="timeline-bottom">
        <ZoomButton />
      </div>
      <TimelineHandle backwards={false}/>
    </div>
  );
};
