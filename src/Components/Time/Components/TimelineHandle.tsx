import { ForwardedRef, forwardRef, MutableRefObject } from "react";
import { Timeline } from "vis-timeline/esnext";
import { options } from "Components/Time/utils";

export const TimelineHandle = forwardRef(function TimelineHandle(
  _,
  ref: ForwardedRef<Timeline>
) {
  const timelineRef = ref as MutableRefObject<Timeline | null>;

  const handleMouseMove = (event: Event) => {
    event.preventDefault();
    const mouseEvent = event as MouseEvent;

    const timeline = timelineRef.current;
    if (timeline) {
      const viewHeight = document.body.clientHeight;
      const newHeight = viewHeight - mouseEvent.clientY - 45;
      timeline.setOptions({
        ...options,
        height: newHeight < 20 ? 0 : newHeight,
      });
    }
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className="timeline-handle"
      title="Drag the pin to resize the timeline"
      aria-label="resize timeline"
    ></div>
  );
});
