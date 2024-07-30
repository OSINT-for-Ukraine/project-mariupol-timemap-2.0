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
  id: string;
  description: string;
  date: Date;
  location: string;
  latitude: string;
  longitude: string;
  filters: EventFilter[];
  sources: EventSource[];
};
