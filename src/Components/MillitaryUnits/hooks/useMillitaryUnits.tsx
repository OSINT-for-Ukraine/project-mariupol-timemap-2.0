import useSWR from "swr";
import { MillitaryUnit } from "Components/MillitaryUnits/types";
import { useCollection } from "utils/hooks/useCollection";
import { isValidISODate } from "utils/date-utils";

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
  const millitaryUnitsCollection = useCollection("Millitary_Units");

  const fetcher = async (
    dateArg: string,
    millitaryUnitsCollectionArg: MillitaryUnitsCollection
  ) => {
    if (!isValidISODate(dateArg)) {
      throw new Error(`${dateArg} is not a valid ISO date.`);
    }

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
