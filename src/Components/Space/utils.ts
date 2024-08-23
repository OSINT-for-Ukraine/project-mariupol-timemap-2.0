import { GeoJSONObj, ReverseTupleType } from "./types.ts";
import { Event } from "utils/types.ts";

export const convertEventsToGeoJsonObj = (events: Event[]) => {
  return events?.reduce((acc: GeoJSONObj[], event) => {
    const { longitude, latitude, id } = event;
    const feature: GeoJSONObj = {
      type: "Feature",
      properties: {
        cluster: false,
        id: id,
      },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
    };
    acc.push(feature);
    return acc;
  }, []);
};

export const reverseTuple: ReverseTupleType = (tuple) => {
  return [tuple[1], tuple[0]];
};
