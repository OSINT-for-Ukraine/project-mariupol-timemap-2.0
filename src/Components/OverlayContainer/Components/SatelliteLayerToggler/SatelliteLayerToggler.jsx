import "./satelliteLayerToggler.css";
import mapImg from "assets/satelliteoverlaytoggle/map.png";
import satImg from "assets/satelliteoverlaytoggle/sat.png";
import { useMapLayerProvider } from "providers/useMapLayerProvider";

export const SatelliteLayerToggle = () => {
  const { isSatelliteMode, toggleSatelliteMode } = useMapLayerProvider();

  const toggleImg = isSatelliteMode ? mapImg : satImg;

  const toggleLabel = isSatelliteMode ? "map" : "sat";

  return (
    <button
      className={`satellite-overlay-toggle-button square-fixed-size ${
        isSatelliteMode ? "satellite-overlay-toggle-button-map" : ""
      }`}
      style={{ backgroundImage: `url(${toggleImg}` }}
      name="satellite-toggle"
      onClick={() => toggleSatelliteMode()}
    >
      {toggleLabel}
    </button>
  );
};
