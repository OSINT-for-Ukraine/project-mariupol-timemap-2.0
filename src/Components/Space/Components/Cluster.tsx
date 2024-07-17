import { CircleMarker } from "react-leaflet";
import Supercluster from "supercluster";
import { getClusterDisplayValue, reverseTuple } from "../utils";
import { LatLngTuple } from "leaflet";

type ClusterProps = {
  cluster: Supercluster.ClusterFeature<Supercluster.AnyProps>;
  allClustersLength: number;
  onClusterClick: (clusterId: number, center: LatLngTuple) => void;
  zoom: number;
};

export const Cluster = ({ cluster, onClusterClick }: ClusterProps) => {
  const { point_count } = cluster.properties;
  return (
    <CircleMarker
      center={reverseTuple(cluster.geometry.coordinates as [number, number])}
      pathOptions={{
        fillColor: "rgb(139, 0, 0)",
        color: "none",
        fillOpacity: getClusterDisplayValue(point_count, 0.2, 0.9),
        className: `test-${point_count}`,
      }}
      radius={getClusterDisplayValue(point_count, 10, 25)}
      eventHandlers={{
        click: () => {
          onClusterClick(
            cluster.id as number,
            cluster.geometry.coordinates as LatLngTuple
          );
        },
      }}
    />
  );
};
