export type TupleOfTwoNumbers = [number, number];

export type TupleOfFourNumbers = [number, number, number, number];

export type GeoJSONObj = {
  type: "Feature";
  properties: {
    id: string;
    cluster: boolean;
  };
  geometry: {
    type: "Point";
    coordinates: TupleOfTwoNumbers;
  };
};

export type MapBoundsAndZoomType = {
  bbox: TupleOfFourNumbers;
  zoom: number;
};

export type ReverseTupleType = (tuple: TupleOfTwoNumbers) => TupleOfTwoNumbers;

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
