import { useContext } from "react";
import { MapLayerContext } from "providers/MapLayerProvider";

export const useMapLayerProvider = () => {
  const { isSatelliteMode, toggleSatelliteMode } = useContext(MapLayerContext);

  return { isSatelliteMode, toggleSatelliteMode };
};
