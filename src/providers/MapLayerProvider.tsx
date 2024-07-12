import { useState, createContext, ReactNode } from "react";

export const MapLayerContext = createContext({
  toggleSatelliteMode: () => {},
  isSatelliteMode: false,
});

export const MapLayerProvider = ({ children }: { children: ReactNode }) => {
  const [isSatelliteMode, setSatelliteMode] = useState(false);

  const toggleSatelliteMode = () => {
    setSatelliteMode((currentState) => !currentState);
  };

  return (
    <MapLayerContext.Provider value={{ isSatelliteMode, toggleSatelliteMode }}>
      {children}
    </MapLayerContext.Provider>
  );
};
