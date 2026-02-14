import L from "leaflet";
import { MillitaryUnit as MillitaryUnitType } from "Components/MillitaryUnits/types";

export const getMillitaryUnitIcon = (iconType?: MillitaryUnitType["icon"]) => {
  if (!iconType) {
    return new L.DivIcon({
      iconSize: new L.Point(16, 16),
      html: `<div></div>`,
      className: "black-dot-icon",
    });
  }
  return new L.Icon({
    iconSize: new L.Point(20, 20),
    iconUrl:
      iconType === "enemy"
        ? "https://deepstatemap.live/images/custom_nato/enemy.png"
        : "https://deepstatemap.live/images/custom_nato/headquarter.png",
  });
};
