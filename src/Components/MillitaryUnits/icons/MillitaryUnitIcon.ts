import L from "leaflet";

export const getMillitaryUnitIcon = () => {
  return new L.DivIcon({
    iconSize: new L.Point(16, 16),
    html: `<div></div>`,
    className: "black-dot-icon",
  });
};
