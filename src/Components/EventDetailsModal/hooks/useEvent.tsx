import useSWR from "swr";

type UseEventArgs = {
  id?: string;
};

const url = import.meta.env.PROD ? "" : "http://localhost:3000";

export const useEvent = ({ id }: UseEventArgs) => {
  const fetcher = async (eventId: string) => {
    const response = await fetch(`${url}/api/event/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  };

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(id ? id : null, (eventId) => fetcher(eventId));

  return { event: event?.[0], isLoading, error };
};
