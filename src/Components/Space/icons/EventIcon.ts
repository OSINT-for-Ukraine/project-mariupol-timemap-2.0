import L from "leaflet";

export const getEventIcon = (selected: boolean) => {
  return new L.DivIcon({
    iconSize: new L.Point(16, 16),
    html: `<div ${selected ? "selected" : ""} class="hover-circle"></div>`,
    className: "red-dot-icon",
  });
};
