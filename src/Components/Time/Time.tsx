import "./timeline.css";
import "./vis-timeline-override.css";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Timeline as VisTimeline,
  TimelineEventPropertiesResult,
} from "vis-timeline/esnext";
import { Event } from "utils/types";
import { ZoomToButtons } from "./Components/ZoomToButtons";
import { TimelineButton } from "./Components/TimelineButton";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMap } from "react-leaflet";
import { createPortal } from "react-dom";
import { CustomDateRangeSection } from "./Components/CustomDateRangeSection";
import { eventsToTimelineEvents, options } from "./utils";
import { TimelineHandle } from "./Components/TimelineHandle";

export const Time = ({ events }: { events: Event[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<VisTimeline | null>(null);
  const timelineEvents = useMemo(() => {
    return eventsToTimelineEvents(events);
  }, [events]);
  const map = useMap();
  const navigate = useNavigate();
  const { date, eventId } = useParams();
  const [searchParams] = useSearchParams();

  const [openCustomDateRangeSection, setOpenCustomDateRangeSection] =
    useState(false);

  const handleCustomRangeClick = () => {
    setOpenCustomDateRangeSection((prevState) => !prevState);
  };

  const onTimelineEventSelect = useCallback(
    (e: TimelineEventPropertiesResult) => {
      const selectedEventTarget = e.event.target as HTMLDivElement;

      const selectedItem: HTMLElement | null = selectedEventTarget.closest(
        ".vis-item.vis-box.vis-selected"
      );
      if (!selectedItem) {
        return;
      }
      navigate({
        //@ts-expect-error the items array is where the selected item(s) are kept
        pathname: `/date/${date}/event/${e.items[0]}`,
        search: `?${searchParams.toString()}`,
      });
      const latitude = parseFloat(selectedItem.dataset.latitude || "");
      const longitude = parseFloat(selectedItem.dataset.longitude || "");
      map.flyTo([latitude, longitude], 12);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (containerRef.current) {
      timelineRef.current = new VisTimeline(
        containerRef.current,
        timelineEvents,
        options
      );
    }
    timelineRef.current?.on("select", (e) => onTimelineEventSelect(e));

    return () => {
      if (timelineRef.current) {
        timelineRef.current.destroy();
      }
    };
  }, [timelineEvents, onTimelineEventSelect]);

  useEffect(() => {
    eventId
      ? timelineRef.current?.setSelection([eventId])
      : timelineRef.current?.setSelection([]);
  }, [eventId]);

  return createPortal(
    <div className="position-fixed overlay-z-index timeline-position">
      <CustomDateRangeSection open={openCustomDateRangeSection} />
      <TimelineHandle ref={timelineRef} />
      <div ref={containerRef} />
      <div className="timeline-buttons">
        <TimelineButton ref={timelineRef} />
        <div className="timeline-bottom">
          <ZoomToButtons
            isCustomDateRangeOpen={openCustomDateRangeSection}
            onCustomRangeClick={handleCustomRangeClick}
          />
        </div>
        <TimelineButton ref={timelineRef} right />
      </div>
    </div>,
    document.body
  );
};
