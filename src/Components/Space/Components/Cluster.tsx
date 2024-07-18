import { Marker } from "react-leaflet";
import Supercluster from "supercluster";
import { getClusterDisplayValue, reverseTuple } from "../utils";
import { LatLngTuple } from "leaflet";
import { getClusterIcon } from "../icons/ClusterIcon";

type ClusterProps = {
  cluster: Supercluster.ClusterFeature<Supercluster.AnyProps>;
  onClusterClick: (clusterId: number, center: LatLngTuple) => void;
};

export const Cluster = ({ cluster, onClusterClick }: ClusterProps) => {
  const { point_count } = cluster.properties;

  const clusterIcon = getClusterIcon(
    point_count,
    getClusterDisplayValue(point_count, 10, 25),
    getClusterDisplayValue(point_count, 0.2, 0.9)
  );

  return (
    <Marker
      position={reverseTuple(cluster.geometry.coordinates as [number, number])}
      icon={clusterIcon}
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
