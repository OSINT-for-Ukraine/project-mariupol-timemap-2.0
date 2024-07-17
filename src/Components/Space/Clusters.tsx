import { CircleMarker } from "react-leaflet";
import { Cluster } from "./Components/Cluster.tsx";
import Supercluster from "supercluster";
import { LatLngTuple } from "leaflet";
import { reverseTuple } from "./utils.ts";

type ClustersPropsType = {
  clusters: Supercluster.ClusterFeature<Supercluster.AnyProps>[];
  onClusterClick: (clusterId: number, center: LatLngTuple) => void;
  zoom: number;
};

export const Clusters = ({
  clusters,
  onClusterClick,
  zoom,
}: ClustersPropsType) => {
  return (
    <>
      {clusters.map((cluster, index) => {
        if (cluster.id) {
          return (
            <Cluster
              cluster={
                cluster as Supercluster.ClusterFeature<Supercluster.AnyProps>
              }
              allClustersLength={clusters.length}
              key={cluster.id}
              onClusterClick={onClusterClick}
              zoom={zoom}
            />
          );
        } else {
          return (
            <CircleMarker
              center={reverseTuple(
                cluster.geometry.coordinates as [number, number]
              )}
              pathOptions={{
                fillColor: "rgb(139, 0, 0)",
                color: "none",
                fillOpacity: 0.9,
              }}
              radius={8}
              key={index}
            />
          );
        }
      })}
    </>
  );
};
