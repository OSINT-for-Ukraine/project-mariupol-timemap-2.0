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

function App() {
  const { isSatelliteMode } = useMapLayerProvider();

  return (
    <MapContainer
      center={INITIAL_MAP_CENTER}
      bounds={INITIAL_MAP_BOUNDARIES_INSTANCE}
      zoom={INITIAL_MAP_ZOOM}
      scrollWheelZoom
      style={{ height: "100dvh", width: "100dvw" }}>
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a><strong> <br/> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        url={isSatelliteMode ? tileLayers["satellite"] : tileLayers["streets"]}
      ></TileLayer>
      <OverlayItems />
      <Space />
    </MapContainer>
  );
}

export default App;
