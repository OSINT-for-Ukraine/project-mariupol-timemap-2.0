import { useMemo } from "react";
import { useApp } from "./useApp";

type CollectionName = "events" | "millitary_units";

export const useCollection = (collectionName: CollectionName) => {
  const app = useApp();

  return useMemo(() => {
    const mongoClient = app?.currentUser?.mongoClient("mongodb-atlas");
    const collection = mongoClient
      ?.db("OFU-temporary")
      .collection(collectionName);
    return collection;
  }, [app?.currentUser, collectionName]);
};
