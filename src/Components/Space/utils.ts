import { events } from "../../events.ts";
import { GeoJSONObj } from "./types.ts";

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

export const convertedLocations = events.reduce(
  (acc: GeoJSONObj[], location) => {
    const { longitude, latitude } = location;
    const feature: GeoJSONObj = {
      type: "Feature",
      properties: {
        cluster: false,
        id: location.id,
      },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
    };
    acc.push(feature);
    return acc;
  },
  []
);

type ReverseTupleType = (tuple: [number, number]) => [number, number];

export const reverseTuple: ReverseTupleType = (tuple) => {
  return [tuple[1], tuple[0]];
};
