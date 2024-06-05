import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalizer.css";
import "leaflet/dist/leaflet.css";
import "./css/variables.css";
import "./css/global.css";
import App from "./App.jsx";
import { MapLayerProvider } from "providers/MapLayerProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MapLayerProvider>
      <App />
    </MapLayerProvider>
  </React.StrictMode>
);
