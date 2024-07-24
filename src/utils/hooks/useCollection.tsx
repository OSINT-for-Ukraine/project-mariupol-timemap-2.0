import { useMemo } from "react";
import { useApp } from "./useApp";

export const useCollection = () => {
  const app = useApp();

  return useMemo(() => {
    const mongoClient = app?.currentUser?.mongoClient("mongodb-atlas");
    const eventsCollection = mongoClient
      ?.db("OFU-temporary")
      .collection("events");
    return eventsCollection;
  }, [app?.currentUser]);
};
