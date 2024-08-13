import { getIsoDate } from "utils/date-utils";
import { TimelineHandle } from "./Components/TimelineHandles";
import { ZoomButtons } from "./Components/ZoomButtons";
import { Event } from "utils/types";
import { TimelineWrapper } from "./Components/TimelineWrapper/TimelineWrapper";
import { Slide } from "utils/timeline-types";
import "./timeline.css";

// const timelineEvents: Slide[] = [
//   {
//     start_date: {
//       year: 2021,
//       month: 6,
//       day: 5,
//     },
//     media: {
//       url: "https://picsum.photos/200/300",
//       thumbnail: "https://picsum.photos/200/300",
//       caption: "",
//       link: "",
//     },
//     end_date: {
//       year: 2021,
//       month: 7,
//       day: 4,
//     },
//     unique_id: "1",
//     text: {
//       headline: "Event1",
//       text: "",
//     },
//     group: "Catégorie1",
//     background: {},
//   },
//   {
//     start_date: {
//       year: 2021,
//       month: 8,
//       day: 4,
//     },
//     media: {
//       url: "https://picsum.photos/200/300",
//       thumbnail: "https://picsum.photos/200/300",
//       caption: "",
//       link: "",
//     },
//     end_date: {
//       year: 2021,
//       month: 9,
//       day: 5,
//     },
//     unique_id: "2",
//     text: {
//       headline: "Event2",
//       text: "",
//     },
//     group: "Catégorie1",
//     background: {},
//   },
//   {
//     start_date: {
//       year: 2021,
//       month: 8,
//       day: 4,
//     },
//     media: {
//       url: "https://picsum.photos/200/300",
//       thumbnail: "https://picsum.photos/200/300",
//       caption: "",
//       link: "",
//     },
//     end_date: {
//       year: 2021,
//       month: 8,
//       day: 5,
//     },
//     unique_id: "3",
//     text: {
//       headline: "Event3",
//       text: "",
//     },
//     group: "Catégorie2",
//     background: {},
//   },
// ];

const eventsToTimelineEvents = (events: Event[]): Slide[] => {
  return events.map<Slide>((event) => {
    if (event.date instanceof Date) {
      const tileSlide: Slide = {
        unique_id: event.id,
        start_date: {
          year: event.date.getFullYear(),
          month: event.date.getMonth() + 1,
          day: event.date.getDate(),
        },
        end_date: {
          year: event.date.getFullYear(),
          month: event.date.getMonth() + 1,
          day: event.date.getDate(),
        },
        text: { headline: getIsoDate(event.date) },
      };
      return tileSlide;
    }
    return { start_date: { year: 2020 } };
  });
};

export const Timeline = ({ events }: { events: Event[] }) => {
  const timelineEvents = eventsToTimelineEvents(events.slice(0, 100));
  // const handleScroll = (event: React.UIEvent<HTMLElement>) => {
  // };

  // const groupEventsByDate = (events: Event[]): Event[][] => {
  //   const groupedEvents = new Map<string, Event[]>();

  //   events.forEach((event) => {
  //     if (event.date instanceof Date) {
  //       const date = getIsoDate(event.date);
  //       if (!groupedEvents.has(date)) {
  //         groupedEvents.set(date, []);
  //       }
  //       groupedEvents.get(date)!.push(event);
  //     }
  //   });

  //   return Array.from(groupedEvents.values());
  // };

  // const groupedEvents = groupEventsByDate(events);

  // const timelineItems = groupedEvents.map((eventGroup, index) => {
  //   // const items = eventGroup.map((event, index) => (
  //   //   <div key={`${event.id}_${index}`}>{event.id}</div>
  //   // ));

  //   return (
  //     <div className="timeline-item" key={index}>
  //       {getIsoDate(eventGroup[0].date)}
  //       {/* <div className="timeline-events">{items}</div> */}
  //     </div>
  //   );
  // });

  return (
    <div className="position-fixed overlay-z-index timeline-position">
      <div className="timeline">
        <TimelineWrapper
          events={timelineEvents}
          options={{
            timenav_position: "top",
            hash_bookmark: true,
            initial_zoom: 1,
            scale_factor: 1,
            // debug: true,
            default_bg_color: "green",
          }}
        />
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
