import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalizer.css";
import "leaflet/dist/leaflet.css";
import "./css/variables.css";
import "./css/global.css";
import App from "./App.tsx";
import { MapLayerProvider } from "providers/MapLayerProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader } from "utils/loader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loader,
  },
  { path: "date/:date", element: <App /> },
  {
    path: "date/:date/millitary_units/:millitary_units_date",
    element: <App />,
  },
  { path: "date/:date/event/:eventId", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapLayerProvider>
      <RouterProvider router={router} />
    </MapLayerProvider>
  </React.StrictMode>
);
