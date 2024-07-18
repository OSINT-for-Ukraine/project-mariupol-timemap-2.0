import L from "leaflet";

export const eventIcon = new L.DivIcon({
  iconSize: new L.Point(16, 16),
  html: `<div></div>`,
  className: "red-dot-icon",
});
