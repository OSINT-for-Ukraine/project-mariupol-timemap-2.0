import { useContext } from "react";
import { ArtilleryContext } from "providers/ArtilleryProvider";

export const useArtilleryProvider = () => {
  const { selectedArtillery, handleArtillerySelect } =
    useContext(ArtilleryContext);

  return { selectedArtillery, handleArtillerySelect };
};
