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
