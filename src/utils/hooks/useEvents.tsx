import useSWR from "swr";
import { useCollection } from "./useCollection";

type UseEventsArgs = {
  startDate: string;
  endDate: string;
  filters: string[];
};

export const useEvents = ({ startDate, endDate, filters }: UseEventsArgs) => {
  const eventsCollection = useCollection();

  const fetcher = async (
    intervalBegin: string,
    intervalEnd: string,
    filtersArr: string[]
  ) => {
    const fetchEvents = await eventsCollection?.find(
      {
        date: {
          $gt: new Date(intervalBegin),
          $lt: new Date(intervalEnd),
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
    ([intervalBegin, intervalEnd, filtersArr]) =>
      fetcher(intervalBegin, intervalEnd, filtersArr),
    {
      fallbackData: [],
    }
  );

  return { events, isLoading, error };
};
