import { MapContainer, TileLayer } from "react-leaflet";
import { OverlayContainer } from "Components/OverlayContainer";
import { useMapLayerProvider } from "providers/useMapLayerProvider.jsx";

const tileLayers = {
  streets: `https://api.mapbox.com/styles/v1/bellingcat-mapbox/${
    import.meta.env.VITE_BELLINGCAT_MAPBOX_STREETS
  }/tiles/256/{z}/{x}/{y}@2x?access_token=${
    import.meta.env.VITE_BELLINGCAT_MAPBOX_TOKEN
  }`,
  satellite: `https://api.mapbox.com/styles/v1/bellingcat-mapbox/${
    import.meta.env.VITE_BELLINGCAT_MAPBOX_SATELLITE
  }/tiles/256/{z}/{x}/{y}@2x?access_token=${
    import.meta.env.VITE_BELLINGCAT_MAPBOX_TOKEN
  }`,
};

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
