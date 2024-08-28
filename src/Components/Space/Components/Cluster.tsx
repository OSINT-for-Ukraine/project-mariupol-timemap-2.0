import { Marker } from "react-leaflet";
import Supercluster from "supercluster";
import { reverseTuple } from "Components/Space/utils";
import { getClusterIcon } from "Components/Space/icons/ClusterIcon";
import { TupleOfTwoNumbers } from "utils/types";
import { getClusterDisplayValue } from "utils/utils";

type ClusterProps = {
  cluster: Supercluster.ClusterFeature<Supercluster.AnyProps>;
  onClusterClick: (clusterId: number, center: TupleOfTwoNumbers) => void;
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
      position={reverseTuple(cluster.geometry.coordinates as TupleOfTwoNumbers)}
      icon={clusterIcon}
      eventHandlers={{
        click: () => {
          onClusterClick(
            cluster.id as number,
            cluster.geometry.coordinates as TupleOfTwoNumbers
          );
        },
      }}
    />
  );
};
