import { useMemo } from "react";
import { useApp } from "./useApp";

type CollectionName = "Events" | "Millitary_Units";

export const useCollection = (collectionName: CollectionName) => {
  const app = useApp();

  return useMemo(() => {
    const mongoClient = app?.currentUser?.mongoClient("mongodb-atlas");
    const collection = mongoClient
      ?.db("Project-Mariupol-Dataset")
      .collection(collectionName);
    return collection;
  }, [app?.currentUser, collectionName]);
};
