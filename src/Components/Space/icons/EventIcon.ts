import L from "leaflet";

export const eventIcon = new L.DivIcon({
  iconSize: new L.Point(16, 16),
  html: `<div class="hover-circle"></div>`,
  className: "red-dot-icon",
});
