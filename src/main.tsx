import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalizer.css";
import "leaflet/dist/leaflet.css";
import "./css/variables.css";
import "./css/global.css";
import App from "./App.tsx";
import { MapLayerProvider } from "providers/MapLayerProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:date", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapLayerProvider>
      <RouterProvider router={router} />
    </MapLayerProvider>
  </React.StrictMode>
);
