import L from "leaflet";

export const getClusterIcon = (
  point_count: number,
  radius: number,
  opacity: number
) => {
  return new L.DivIcon({
    iconSize: new L.Point(radius * 2, radius * 2),
    html: `<div class="cluster-icon hover-circle" style="--background: rgba(139, 0, 0, ${opacity});"><span>${point_count}</span></div>`,
    className: "",
  });
};
