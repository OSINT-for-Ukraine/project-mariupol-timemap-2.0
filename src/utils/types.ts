type EventSource = {
  id: string;
  path: string;
  description: string;
};

type EventFilter = {
  key: string;
  value: string;
};

export type Event = {
  _id: string;
  id: string;
  description: string;
  date: string;
  location: string;
  latitude: string;
  longitude: string;
  filters: EventFilter[];
  sources: EventSource[];
};

export type TupleOfTwoNumbers = [number, number];

export type TupleOfFourNumbers = [number, number, number, number];
