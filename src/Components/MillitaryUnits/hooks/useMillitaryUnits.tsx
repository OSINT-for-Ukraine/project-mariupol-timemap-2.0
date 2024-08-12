import useSWR from "swr";
import { MillitaryUnit } from "../types";
import { useCollection } from "utils/hooks/useCollection";

type UseMillitaryUnitsArgs = {
  date?: string;
};

type MillitaryUnitsCollection =
  Realm.Services.MongoDB.MongoDBCollection<MillitaryUnitsResponse>;

type MillitaryUnitsResponse = {
  _id: string;
  date: Date;
  units: MillitaryUnit[];
};

export const useMillitaryUnits = ({ date }: UseMillitaryUnitsArgs) => {
  const millitaryUnitsCollection = useCollection("millitary_units");

  const fetcher = async (
    dateArg: string,
    millitaryUnitsCollectionArg: MillitaryUnitsCollection
  ) => {
    const fetchMillitaryUnits = await millitaryUnitsCollectionArg?.find(
      {
        date: new Date(dateArg),
      },
      {
        projection: { _id: 0 },
      }
    );
    return fetchMillitaryUnits;
  };

  const {
    data: millitaryUnits,
    error,
    isLoading,
  } = useSWR(
    date ? [date, millitaryUnitsCollection] : null,
    ([date, millitaryUnitsCollection]) =>
      fetcher(date, millitaryUnitsCollection as MillitaryUnitsCollection)
  );

  return { millitaryUnits, isLoading, error };
};
