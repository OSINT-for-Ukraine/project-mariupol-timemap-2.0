import { TupleOfFourNumbers, TupleOfTwoNumbers } from "utils/types";
import { LatLngBounds } from "leaflet";

const mapBoxStreets = import.meta.env.VITE_BELLINGCAT_MAPBOX_STREETS;
const mapBoxSatellite = import.meta.env.VITE_BELLINGCAT_MAPBOX_SATELLITE;
const mapBoxToken = import.meta.env.VITE_BELLINGCAT_MAPBOX_TOKEN;

export const tileLayers = {
  streets: `https://api.mapbox.com/styles/v1/bellingcat-mapbox/${
    mapBoxStreets
  }/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxToken}`,
  satellite: `https://api.mapbox.com/styles/v1/bellingcat-mapbox/${
    mapBoxSatellite
  }/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxToken}`,
};

export const INITIAL_MAP_BOUNDARIES_INSTANCE = new LatLngBounds(
  [23.444824218750004, 42.94033923363183],
  [42.93457031250001, 53.2126121899416]
);

export const INITIAL_MAP_BOUNDARIES: TupleOfFourNumbers = [
  23.444824218750004, 42.94033923363183, 42.93457031250001, 53.2126121899416,
];

export const INITIAL_MAP_CENTER: TupleOfTwoNumbers = [48.3326259, 33.19951447];

export const INITIAL_MAP_ZOOM = 6;

export const APP_ID = import.meta.env.VITE_APP_ID;
