import { Timeline } from "./Components/Timeline";
import { DateRange } from "./Components/DateRange";
import { Event } from "utils/types";

export const Time = ({ events }: { events: Event[] }) => {
  return (
    <>
      <DateRange />
      <Timeline events={events} />
    </>
  );
};
