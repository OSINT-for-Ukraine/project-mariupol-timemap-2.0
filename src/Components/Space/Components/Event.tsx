import { Marker, useMap } from "react-leaflet";
import { getEventIcon } from "Components/Space/icons/EventIcon";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { TupleOfTwoNumbers } from "utils/types";

type EventPropsType = {
  position: TupleOfTwoNumbers;
  id: string;
};

export const Event = ({ position, id }: EventPropsType) => {
  const navigate = useNavigate();

  const { date, eventId } = useParams();

  const [searchParams] = useSearchParams();

  const map = useMap();

  const selectedEvent = eventId === id;

  return (
    <Marker
      eventHandlers={{
        click: () => {
          navigate({
            pathname: `/date/${date}/event/${id}`,
            search: `?${searchParams.toString()}`,
          });
          map.flyTo(position);
        },
      }}
      position={position}
      icon={getEventIcon(selectedEvent)}
    />
  );
};
