import { Marker } from "react-leaflet";
import { eventIcon } from "../icons/EventIcon";
import { TupleOfTwoNumbers } from "../types";

export const Event = ({ position }: { position: TupleOfTwoNumbers }) => {
  return <Marker position={position} icon={eventIcon} />;
};
