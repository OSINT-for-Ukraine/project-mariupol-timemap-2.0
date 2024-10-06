import useSWR from "swr";
import { isValidISODate } from "utils/date-utils";

type UseMillitaryUnitsArgs = {
  date?: string;
};

const url = import.meta.env.PROD ? "" : "http://localhost:3000";

export const useMillitaryUnits = ({ date }: UseMillitaryUnitsArgs) => {
  const fetcher = async (dateArg: string) => {
    if (!isValidISODate(dateArg)) {
      throw new Error(`${dateArg} is not a valid ISO date.`);
    }

    const response = await fetch(`${url}/api/millitary/${date}`, {
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
    data: millitaryUnits,
    error,
    isLoading,
  } = useSWR(date ? date : null, (date) => fetcher(date));

  return { millitaryUnits: millitaryUnits?.[0], isLoading, error };
};
