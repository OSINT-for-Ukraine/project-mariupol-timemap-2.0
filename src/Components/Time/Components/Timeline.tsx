import { TimelineHandle } from "./TimelineHandles";
import { ZoomButtons } from "./ZoomButtons";

export const Timeline = () => {
  return (
    <div className="position-fixed overlay-z-index timeline-position">
      <div className="timeline-wrapper">
        <TimelineHandle backwards />
        <div className="timeline-bottom">
          <ZoomButtons />
        </div>
        <TimelineHandle backwards={false} />
      </div>
    </div>
  );
};
