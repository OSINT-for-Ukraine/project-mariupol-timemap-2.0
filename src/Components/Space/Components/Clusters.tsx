import { Cluster } from "./Cluster.tsx";
import { Event } from "./Event.tsx";
import Supercluster from "supercluster";
import { LatLngTuple } from "leaflet";
import { reverseTuple } from "../utils.ts";

type ClustersPropsType = {
  clusters: Supercluster.ClusterFeature<Supercluster.AnyProps>[];
  onClusterClick: (clusterId: number, center: LatLngTuple) => void;
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
                cluster.geometry.coordinates as [number, number]
              )}
              key={index}
            />
          );
        }
      })}
    </>
  );
};
