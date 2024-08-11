import { Timeline } from "@knight-lab/timelinejs";
import "@knight-lab/timelinejs/dist/css/timeline.css";
import { useEffect, useRef } from "react";
import { Slide, TimelineOptions, TitleSlide } from "utils/timeline-types";

type TimelineWrapperProps = {
  className?: string;
  events: Slide[];
  title?: TitleSlide;
  options?: TimelineOptions;
};

export const TimelineWrapper = ({
  className,
  events,
  title,
  options,
}: TimelineWrapperProps) => {
  const timelineEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineEl.current) {
      new Timeline(timelineEl.current, { events, title }, options);
    }
  }, [events, title, options]);

  return <div ref={timelineEl} className={`${className}`} />;
};
