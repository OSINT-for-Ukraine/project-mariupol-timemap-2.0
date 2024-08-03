import { getIsoDate } from "utils/date-utils";
import { TimelineHandle } from "./TimelineHandles";
import { ZoomButtons } from "./ZoomButtons";
import { Event } from "utils/types";

export const Timeline = ({ events }: { events: Event[] }) => {
  // const handleScroll = (event: React.UIEvent<HTMLElement>) => {
  // };

  const groupEventsByDate = (events: Event[]): Event[][] => {
    const groupedEvents = new Map<string, Event[]>();

    events.forEach((event) => {
      if (event.date instanceof Date) {
        const date = getIsoDate(event.date);
        if (!groupedEvents.has(date)) {
          groupedEvents.set(date, []);
        }
        groupedEvents.get(date)!.push(event);
      }
    });

    return Array.from(groupedEvents.values());
  };

  const groupedEvents = groupEventsByDate(events);

  const timelineItems = groupedEvents.map((eventGroup, index) => {
    // const items = eventGroup.map((event, index) => (
    //   <div key={`${event.id}_${index}`}>{event.id}</div>
    // ));

    return (
      <div className="timeline-item" key={index}>
        {getIsoDate(eventGroup[0].date)}
        {/* <div className="timeline-events">{items}</div> */}
      </div>
    );
  });

  return (
    <div className="position-fixed overlay-z-index timeline-position">
      <div
        className="timeline"
        // onScroll={handleScroll}
      >
        {timelineItems}
      </div>
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
