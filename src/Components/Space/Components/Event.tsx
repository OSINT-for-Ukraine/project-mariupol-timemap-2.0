import { Marker, useMap } from "react-leaflet";
import { getEventIcon } from "../icons/EventIcon";
import { TupleOfTwoNumbers } from "../types";
import { useNavigate, useParams } from "react-router-dom";

type EventPropsType = {
  position: TupleOfTwoNumbers;
  id: string;
};

export const Event = ({ position, id }: EventPropsType) => {
  const navigate = useNavigate();
  const { date, eventId } = useParams();
  const map = useMap();

  const selectedEvent = eventId === id;

  return (
    <Marker
      eventHandlers={{
        click: () => {
          navigate(`/date/${date}/event/${id}`);
          map.flyTo(position);
        },
      }}
      position={position}
      icon={getEventIcon(selectedEvent)}
    />
  );
};
