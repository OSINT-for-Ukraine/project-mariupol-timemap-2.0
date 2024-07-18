import L from "leaflet";

export const getClusterIcon = (point_count: number, radius: number) => {
  return new L.DivIcon({
    iconSize: new L.Point(radius * 2, radius * 2),
    html: `<div class="display-flex cluster-icon"><span>${point_count}</span></div>`,
    className: "red-dot-icon",
  });
};
