import { useState, createContext, ReactNode } from "react";
import { Artillery } from "utils/types";

type SelectedArtilleryState = Omit<Artillery, "title"> | null;

export const ArtilleryContext = createContext<{
  selectedArtillery: SelectedArtilleryState;
  handleArtillerySelect: (artillery: SelectedArtilleryState) => void;
}>({
  selectedArtillery: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleArtillerySelect: (_artillery: SelectedArtilleryState) => {},
});

export const ArtilleryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArtillery, setSelectedArtillery] =
    useState<SelectedArtilleryState>(null);

  const handleArtillerySelect = (artillery: SelectedArtilleryState) => {
    setSelectedArtillery(artillery);
  };

  return (
    <ArtilleryContext.Provider
      value={{ selectedArtillery, handleArtillerySelect }}
    >
      {children}
    </ArtilleryContext.Provider>
  );
};
