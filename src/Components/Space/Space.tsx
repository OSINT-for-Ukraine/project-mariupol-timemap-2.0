import "./space.css";
import Supercluster from "supercluster";
import { useState } from "react";
import { LatLngTuple } from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { Clusters } from "./Clusters";
import { convertedLocations, reverseTuple } from "./utils.ts";
import { INITIAL_MAP_BOUNDARIES, INITIAL_MAP_ZOOM } from "utils/const.ts";
import { MapBoundsAndZoomType } from "./types.ts";

export const Space = () => {
  const [mapBoundsAndZoom, setMapBoundsAndZoom] =
    useState<MapBoundsAndZoomType>({
      bbox: INITIAL_MAP_BOUNDARIES,
      zoom: INITIAL_MAP_ZOOM,
    });

  const map = useMapEvents({
    moveend: () => {
      map.setMinZoom(5).setMaxZoom(16);
      updateMapBoundsAndZoom();
    },
  });

  const updateMapBoundsAndZoom = () => {
    const bounds = map.getBounds();
    const bbox: [number, number, number, number] = [
      bounds.getWest(),
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
    ];
    const zoom = map.getZoom();
    setMapBoundsAndZoom({ bbox, zoom });
  };

  const clustersRef = new Supercluster({
    radius: 30,
    minZoom: 2,
    maxZoom: 16,
  }).load(convertedLocations);

  const clusters = clustersRef.getClusters(
    mapBoundsAndZoom.bbox,
    mapBoundsAndZoom.zoom
  );

  const handleClusterClick = (clusterId: number, center: LatLngTuple) => {
    const zoomLevel = clustersRef.getClusterExpansionZoom(clusterId);

    const coordinates = reverseTuple(center as [number, number]);
    map.flyTo(coordinates, zoomLevel);
  };

  return (
    <Clusters
      clusters={
        clusters as Supercluster.ClusterFeature<Supercluster.AnyProps>[]
      }
      onClusterClick={handleClusterClick}
    />
  );
};
