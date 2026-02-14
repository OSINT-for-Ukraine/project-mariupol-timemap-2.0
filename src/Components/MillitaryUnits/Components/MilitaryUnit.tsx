import { Marker, Popup } from "react-leaflet";
import { MillitaryUnit as MillitaryUnitType } from "Components/MillitaryUnits/types";
import { getMillitaryUnitIcon } from "Components/MillitaryUnits/icons/MillitaryUnitIcon";

type MilitaryUnitProps = {
  unit: MillitaryUnitType;
};

export const MillitaryUnit = ({ unit }: MilitaryUnitProps) => {
  return (
    <Marker
      position={[unit?.coordinates[1], unit?.coordinates[0]]}
      icon={getMillitaryUnitIcon(unit.icon)}
    >
      <Popup>{unit?.name}</Popup>
    </Marker>
  );
};
