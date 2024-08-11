import useSWR from "swr";
import { useCollection } from "./useCollection";

type UseEventArgs = {
  id?: string;
};

export const useEvent = ({ id }: UseEventArgs) => {
  const eventsCollection = useCollection();

  const fetcher = async (eventId: string) => {
    const fetchEvents = await eventsCollection?.find(
      {
        id: eventId,
      },
      {
        projection: {
          id: 1,
          description: 1,
          date: 1,
          sources: 1,
          location: 1,
          graphic: 1,
        },
        limit: 10,
      }
    );
    return fetchEvents;
  };

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(id ? [id, eventsCollection] : null, ([eventId]) =>
    fetcher(eventId)
  );

  return { event: event?.[0], isLoading, error };
};
