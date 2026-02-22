import useSWR from "swr";
import { isValidISODate } from "utils/date-utils";

type UsePolygonsArgs = {
  date?: string;
};

type Polygon = {
  fill: string;
  fillOpacity: number;
  name: string;
  coordinates: number[][];
};

type PolygonData = {
  date: string;
  polygons: Polygon[];
};

const url = import.meta.env.PROD ? "" : "http://localhost:3000";

export const usePolygons = ({ date }: UsePolygonsArgs) => {
  const fetcher = async (dateArg: string) => {
    console.log(dateArg);
    if (!isValidISODate(dateArg)) {
      throw new Error(`${dateArg} is not a valid ISO date.`);
    }

    const response = await fetch(`${url}/api/territories/${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: PolygonData[] = await response.json();
    return data;
  };

  const {
    data: polygons,
    error,
    isLoading,
  } = useSWR(date ? `polygons-${date}` : null, fetcher);

  return { polygons: polygons?.[0], isLoading, error };
};
