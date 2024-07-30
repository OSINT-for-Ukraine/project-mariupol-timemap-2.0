import { MapContainer, TileLayer } from "react-leaflet";
import { useMapLayerProvider } from "utils/hooks/useMapLayerProvider";
import {
  INITIAL_MAP_BOUNDARIES_INSTANCE,
  INITIAL_MAP_CENTER,
  INITIAL_MAP_ZOOM,
  tileLayers,
} from "utils/const";
import { OverlayItems } from "Components/OverlayItems";
import { Space } from "Components/Space";
import { useEvents } from "utils/hooks/useEvents";
import { useParams } from "react-router-dom";
import {
  calculateDateFromMonthsAgo,
  currentDate,
  getIsoDate,
} from "utils/date-utils";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { Event } from "utils/types";
import { Time } from "Components/Time";
import { EventDetailsModal } from "Components/Space/Components/EventDetailsModal";

function App() {
  const { isSatelliteMode } = useMapLayerProvider();

  const { date, eventId } = useParams();

  const dateArr = date?.split("__");

  const { events, isLoading } = useEvents({
    startDate: dateArr?.[0] || calculateDateFromMonthsAgo(1),
    endDate: dateArr?.[1] || getIsoDate(currentDate),
  });

  return (
    <MapContainer
      center={INITIAL_MAP_CENTER}
      bounds={INITIAL_MAP_BOUNDARIES_INSTANCE}
      zoom={INITIAL_MAP_ZOOM}
      scrollWheelZoom
      style={{ height: "100dvh", width: "100dvw" }}
    >
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a><strong> <br/> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        url={isSatelliteMode ? tileLayers["satellite"] : tileLayers["streets"]}
      ></TileLayer>
      <OverlayItems />
      {isLoading ? <LoadingWheel /> : <Space events={events as Event[]} />}
      {eventId ? <EventDetailsModal /> : null}
      <Time />
    </MapContainer>
  );
}

export default App;
