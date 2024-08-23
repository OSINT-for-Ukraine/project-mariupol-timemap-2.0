import { ForwardedRef, forwardRef, MutableRefObject, useCallback } from "react";
import { ArrowLeftIcon } from "Components/Time/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "Components/Time/icons/ArrowRightIcon";
import { Timeline, TimelineWindow } from "vis-timeline/esnext";

type TimelineButtonProps = {
  right?: boolean;
};

export const TimelineButton = forwardRef(function TimelineButton(
  { right }: TimelineButtonProps,
  ref: ForwardedRef<Timeline>
) {
  const timelineRef = ref as MutableRefObject<Timeline | null>;

  const moveTimeline = useCallback(
    (percentage: number) => {
      if (timelineRef.current) {
        const range: TimelineWindow = timelineRef.current.getWindow();
        const interval = range.end.valueOf() - range.start.valueOf();
        timelineRef.current.setWindow(
          new Date(range.start.valueOf() - interval * percentage),
          new Date(range.end.valueOf() - interval * percentage)
        );
      }
    },
    [timelineRef]
  );

  return (
    <button onClick={() => moveTimeline(right ? -0.2 : 0.2)}>
      {right ? <ArrowRightIcon /> : <ArrowLeftIcon />}
    </button>
  );
});
