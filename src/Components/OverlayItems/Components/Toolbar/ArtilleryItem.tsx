import { artilleryIcon } from "Components/Modals/ArtilleryListModal/artilleryIcon";
import { TupleOfTwoNumbers } from "Components/Space/types";
import { LatLngTuple } from "leaflet";
import { useState } from "react";
import { Circle, Marker, useMapEvent } from "react-leaflet";

type ArtilleryItemProps = {
  artilleryRange: number;
};

export const ArtilleryItem = ({ artilleryRange }: ArtilleryItemProps) => {
  const [circleCenter, setCircleCenter] = useState<TupleOfTwoNumbers | null>(
    null
  );

  useMapEvent("click", (e) => {
    const coordinates = e.latlng;
    setCircleCenter([coordinates.lat, coordinates.lng]);
  });

  return (
    <>
      {circleCenter ? (
        <>
          <Marker position={circleCenter as LatLngTuple} icon={artilleryIcon} />
          <Circle
            center={circleCenter as LatLngTuple}
            radius={artilleryRange}
            fill={false}
            color="rgb(139, 0, 0)"
          />
        </>
      ) : null}
    </>
  );
};
