import useSWR from "swr";
import { isValidISODate } from "utils/date-utils";

type UseEventsArgs = {
  startDate: string;
  endDate: string;
  filters: string[];
};

const url = import.meta.env.PROD
  ? "/api/events"
  : "http://localhost:3000/api/events";

export const useEvents = ({ startDate, endDate, filters }: UseEventsArgs) => {
  const fetcher = async (
    intervalBegin: string,
    intervalEnd: string,
    filtersArr: string[]
  ) => {
    if (!isValidISODate(intervalBegin)) {
      throw new Error(`${intervalBegin} is not a valid ISO date.`);
    }

    if (!isValidISODate(intervalEnd)) {
      throw new Error(`${intervalEnd} is not a valid ISO date.`);
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ intervalBegin, intervalEnd, filtersArr }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  };

  const {
    data: events,
    error,
    isLoading,
  } = useSWR(
    [startDate, endDate, filters],
    ([intervalBegin, intervalEnd, filtersArr]) =>
      fetcher(intervalBegin, intervalEnd, filtersArr),
    {
      fallbackData: [],
    }
  );

  return { events, isLoading, error };
};
