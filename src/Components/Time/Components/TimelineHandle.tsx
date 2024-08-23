import { ForwardedRef, forwardRef, MutableRefObject, DragEvent } from "react";
import { Timeline } from "vis-timeline/esnext";
import { options } from "Components/Time/utils";
import { UnfoldMoreIcon } from "Components/Time/icons/UnfoldMoreIcon";

export const TimelineHandle = forwardRef(function TimelineHandle(
  _,
  ref: ForwardedRef<Timeline>
) {
  const timelineRef = ref as MutableRefObject<Timeline | null>;

  const handleDragEnd = (e: DragEvent<HTMLButtonElement>) => {
    const newHeight = 200 - (e.clientY - 449);
    const timeline = timelineRef.current;

    if (timeline) {
      //@ts-expect-error options does exist on timelineRef.current

      const isTimelineHidden = timeline.options.height === 0;

      if (newHeight < 200) {
        // if timeline is hidden and the user drags the pin up below 200px, display the timeline at the normal 200px height.
        // if timeline is displayed and the user drags it below 200px, hide the timeline.
        const newHeightValue = isTimelineHidden ? 200 : 0;
        timeline.setOptions({ ...options, height: newHeightValue });
      } else {
        timeline.setOptions({ ...options, height: newHeight });
      }
    }
  };

  return (
    <button
      draggable="true"
      onDragEnd={(e) => handleDragEnd(e)}
      className="timeline-handle"
      title="Drag the pin to resize the timeline"
      aria-label="resize timeline"
    >
      <UnfoldMoreIcon />
    </button>
  );
});
