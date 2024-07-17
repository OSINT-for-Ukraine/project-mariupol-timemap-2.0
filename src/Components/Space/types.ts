export type GeoJSONObj = {
  type: "Feature";
  properties: {
    id: string;
    cluster: boolean;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
};
