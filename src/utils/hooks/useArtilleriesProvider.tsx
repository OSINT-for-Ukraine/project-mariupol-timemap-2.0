import { useContext } from "react";
import { ArtilleriesContext } from "providers/ArtilleryProvider";

export const useArtilleriesProvider = () => {
  const { selectedArtillery, handleArtillerySelect } =
    useContext(ArtilleriesContext);

  return { selectedArtillery, handleArtillerySelect };
};
