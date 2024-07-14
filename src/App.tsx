import { MapContainer, TileLayer } from "react-leaflet";
import { useMapLayerProvider } from "utils/hooks/useMapLayerProvider";
import { tileLayers } from "utils/const";
import { OverlayContainer } from "Components/OverlayContainer";

function App() {
  const { isSatelliteMode } = useMapLayerProvider();

  return (
    <MapContainer
      center={[48.3326259, 33.19951447]}
      zoom={6}
      scrollWheelZoom
      style={{ height: "100dvh", width: "100dvw" }}
    >
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a><strong> <br/> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        url={isSatelliteMode ? tileLayers["satellite"] : tileLayers["streets"]}
      ></TileLayer>
      <OverlayContainer />
    </MapContainer>
  );
}

export default App;
