import { GeoJSONObj, ReverseTupleType, Event } from "./types.ts";

export const getClusterDisplayValue = (
  pointCount: number,
  minValue: number,
  maxValue: number
) => {
  const upperBound = 50;
  const pointCountBounded = pointCount > upperBound ? upperBound : pointCount;
  const normalizedValue = pointCountBounded / upperBound;
  const value = minValue + normalizedValue * (maxValue - minValue);

  return value;
};

export const convertEventsToGeoJsonObj = (events: Event[]) => {
  return events.reduce((acc: GeoJSONObj[], event) => {
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
