import L from "leaflet";

export const artilleryIcon = new L.DivIcon({
  iconSize: new L.Point(20, 20),
  html: `<div class="artillery-icon"></div>`,
  className: "",
});
