import { Cluster } from "./Cluster.tsx";
import { Event } from "./Event.tsx";
import Supercluster from "supercluster";
import { reverseTuple } from "Components/Space/utils.ts";
import { TupleOfTwoNumbers } from "utils/types.ts";

type ClustersPropsType = {
  clusters: Supercluster.ClusterFeature<Supercluster.AnyProps>[];
  onClusterClick: (clusterId: number, center: TupleOfTwoNumbers) => void;
};

export const Clusters = ({ clusters, onClusterClick }: ClustersPropsType) => {
  return (
    <>
      {clusters.map((cluster, index) => {
        if (cluster.id) {
          return (
            <Cluster
              cluster={
                cluster as Supercluster.ClusterFeature<Supercluster.AnyProps>
              }
              onClusterClick={onClusterClick}
              key={cluster.id}
            />
          );
        } else {
          return (
            <Event
              position={reverseTuple(
                cluster.geometry.coordinates as TupleOfTwoNumbers
              )}
              key={index}
              id={cluster.properties.id}
            />
          );
        }
      })}
    </>
  );
};
