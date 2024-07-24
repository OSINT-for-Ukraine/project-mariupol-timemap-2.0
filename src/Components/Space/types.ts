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

export type MapBoundsAndZoomType = {
  bbox: [number, number, number, number];
  zoom: number;
};

export type ReverseTupleType = (tuple: [number, number]) => [number, number];

export type Event = {
  id: string;
  description: string;
  date: Date;
  location: string;
  latitude: string;
  longitude: string;
  graphic: false;
  associations: string[];
  sources: string[];
  time: string;
};
