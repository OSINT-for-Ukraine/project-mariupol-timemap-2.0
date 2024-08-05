import { useContext } from "react";
import { ArtilleriesContext } from "providers/ArtilleryProvider";

export const useArtilleriesProvider = () => {
  const { selectedArtilleryId, handleArtillerySelect } =
    useContext(ArtilleriesContext);

  return { selectedArtilleryId, handleArtillerySelect };
};
