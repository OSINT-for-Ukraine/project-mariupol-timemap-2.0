import useSWR from "swr";
import { useCollection } from "./useCollection";
import { events as eventsJson } from "../../events.ts";

type UseEventsArgsType = {
  startDate: string;
  endDate: string;
};

export const useEvents = ({ startDate, endDate }: UseEventsArgsType) => {
  const eventsCollection = useCollection();

  const fetcher = async (intervalBegin: string, intervalEnd: string) => {
    const fetchEvents = await eventsCollection?.find(
      {
        date: {
          $gt: new Date(intervalBegin),
          $lt: new Date(intervalEnd),
        },
      },
      { projection: { id: 1, latitude: 1, longitude: 1 }, limit: 500 }
    );
    return fetchEvents;
  };

  const {
    data: events,
    error,
    isLoading,
  } = useSWR(
    [startDate, endDate, eventsCollection],
    ([intervalBegin, intervalEnd]) => fetcher(intervalBegin, intervalEnd),
    {
      fallbackData: eventsJson,
    }
  );

  return { events, isLoading, error };
};
