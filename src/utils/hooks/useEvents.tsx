import useSWR from "swr";
import { useCollection } from "./useCollection";
import { Event } from "utils/types";

type UseEventsArgs = {
  startDate: string;
  endDate: string;
  filters: string[];
};

type EventsCollection = Realm.Services.MongoDB.MongoDBCollection<Event>;

export const useEvents = ({ startDate, endDate, filters }: UseEventsArgs) => {
  const eventsCollection = useCollection("events");

  const fetcher = async (
    intervalBegin: string,
    intervalEnd: string,
    filtersArr: string[],
    eventsCollectionArg: EventsCollection
  ) => {
    const fetchEvents = await eventsCollectionArg?.find(
      {
        date: {
          $gte: new Date(intervalBegin),
          $lte: new Date(intervalEnd),
        },
        ...(filtersArr.length > 0 && {
          filters: {
            $elemMatch: {
              id: { $in: filters },
            },
          },
        }),
      },
      {
        projection: {
          id: 1,
          latitude: 1,
          longitude: 1,
          date: 1,
        },
      }
    );
    return fetchEvents;
  };

  const {
    data: events,
    error,
    isLoading,
  } = useSWR(
    [startDate, endDate, filters, eventsCollection],
    ([intervalBegin, intervalEnd, filtersArr, eventsCollection]) =>
      fetcher(
        intervalBegin,
        intervalEnd,
        filtersArr,
        eventsCollection as EventsCollection
      ),
    {
      fallbackData: [],
    }
  );

  return { events, isLoading, error };
};
