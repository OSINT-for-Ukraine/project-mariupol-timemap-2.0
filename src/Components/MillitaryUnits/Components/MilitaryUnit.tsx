import { Marker, Popup } from "react-leaflet";
import { MillitaryUnit as MillitaryUnitType } from "../types";
import { getMillitaryUnitIcon } from "../icons/MillitaryUnitIcon";

type MilitaryUnitProps = {
  unit: MillitaryUnitType;
};

export const MillitaryUnit = ({ unit }: MilitaryUnitProps) => {
  return (
    <Marker
      position={[unit?.coordinates[1], unit?.coordinates[0]]}
      icon={getMillitaryUnitIcon()}
    >
      <Popup>{unit?.name}</Popup>
    </Marker>
  );
};
