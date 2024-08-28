import "./space.css";
import Supercluster from "supercluster";
import { useState } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { Clusters } from "./Components/Clusters.tsx";
import { convertEventsToGeoJsonObj, reverseTuple } from "./utils.ts";
import { INITIAL_MAP_BOUNDARIES, INITIAL_MAP_ZOOM } from "utils/const.ts";
import { MapBoundsAndZoomType } from "./types.ts";
import { Event, TupleOfFourNumbers, TupleOfTwoNumbers } from "utils/types.ts";

type SpacePropsType = {
  events: Event[];
};

export const Space = ({ events }: SpacePropsType) => {
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
    const bbox: TupleOfFourNumbers = [
      bounds.getWest(),
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
    ];
    const zoom = map.getZoom();
    setMapBoundsAndZoom({ bbox, zoom });
  };

  const geoJsonObj = convertEventsToGeoJsonObj(events);

  const clustersRef = new Supercluster({
    radius: 30,
    minZoom: 2,
    maxZoom: 16,
    minPoints: 4,
  }).load(geoJsonObj);

  const clusters = clustersRef.getClusters(
    mapBoundsAndZoom.bbox,
    mapBoundsAndZoom.zoom
  );

  const handleClusterClick = (clusterId: number, center: TupleOfTwoNumbers) => {
    const zoomLevel = clustersRef.getClusterExpansionZoom(clusterId);
    const coordinates = reverseTuple(center);
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
