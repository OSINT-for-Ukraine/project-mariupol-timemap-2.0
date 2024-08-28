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
import { useParams, useSearchParams } from "react-router-dom";
import {
  calculateDateFromMonthsAgo,
  currentDate,
  getIsoDate,
} from "utils/date-utils";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { Time } from "Components/Time";
import { EventDetailsModal } from "Components/EventDetailsModal";

function App() {
  const { isSatelliteMode } = useMapLayerProvider();

  const { date } = useParams();

  const [searchParams] = useSearchParams();

  const dateArr = date?.split("__");

  const { events, isLoading } = useEvents({
    startDate: dateArr?.[0] || calculateDateFromMonthsAgo(1),
    endDate: dateArr?.[1] || getIsoDate(currentDate),
    filters: searchParams.getAll("filter"),
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
      <EventDetailsModal />
      {isLoading ? (
        <LoadingWheel />
      ) : (
        <>
          <Space events={events} />
          <Time events={events} />
        </>
      )}
    </MapContainer>
  );
}

export default App;
