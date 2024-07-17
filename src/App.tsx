import { MapContainer, Pane, TileLayer } from "react-leaflet";
import { useMapLayerProvider } from "utils/hooks/useMapLayerProvider";
import { INITIAL_MAP_BOUNDARIES_INSTANCE, tileLayers } from "utils/const";
import { OverlayContainer } from "Components/OverlayContainer";
import { Space } from "Components/Space";

function App() {
  const { isSatelliteMode } = useMapLayerProvider();

  return (
    <>
      <MapContainer
        center={[48.3326259, 33.19951447]}
        bounds={INITIAL_MAP_BOUNDARIES_INSTANCE}
        zoom={6}
        scrollWheelZoom
        style={{ height: "100dvh", width: "100dvw" }}
      >
        <TileLayer
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a><strong> <br/> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
          url={
            isSatelliteMode ? tileLayers["satellite"] : tileLayers["streets"]
          }
        ></TileLayer>
        <OverlayContainer />
        <Pane name="space">
          <Space />
        </Pane>
      </MapContainer>
    </>
  );
}

export default App;
