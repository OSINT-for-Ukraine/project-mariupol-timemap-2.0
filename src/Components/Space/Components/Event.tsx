import { Marker } from "react-leaflet";
import { eventIcon } from "../icons/EventIcon";

export const Event = ({ position }: { position: [number, number] }) => {
  return <Marker position={position} icon={eventIcon} />;
};
