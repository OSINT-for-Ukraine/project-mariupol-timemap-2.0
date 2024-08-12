import useSWR from "swr";
import { useCollection } from "utils/hooks/useCollection";
import { Event } from "utils/types";

type UseEventArgs = {
  id?: string;
};

type EventsCollection = Realm.Services.MongoDB.MongoDBCollection<Event>;

export const useEvent = ({ id }: UseEventArgs) => {
  const eventsCollection = useCollection("events");

  const fetcher = async (
    eventId: string,
    eventsCollectionArg: EventsCollection
  ) => {
    const fetchEvents = await eventsCollectionArg?.find(
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
    fetcher(eventId, eventsCollection as EventsCollection)
  );

  return { event: event?.[0], isLoading, error };
};
