import { useState, createContext, ReactNode } from "react";
import { Artillery } from "utils/types";

type SelectedArtilleryState = Omit<Artillery, "title"> | null;

export const ArtilleriesContext = createContext<{
  selectedArtillery: SelectedArtilleryState;
  handleArtillerySelect: (artillery: SelectedArtilleryState) => void;
}>({
  selectedArtillery: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleArtillerySelect: (_artillery: SelectedArtilleryState) => {},
});

export const ArtilleriesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArtillery, setSelectedArtillery] =
    useState<SelectedArtilleryState>(null);

  const handleArtillerySelect = (artillery: SelectedArtilleryState) => {
    setSelectedArtillery(artillery);
  };

  return (
    <ArtilleriesContext.Provider
      value={{ selectedArtillery, handleArtillerySelect }}
    >
      {children}
    </ArtilleriesContext.Provider>
  );
};
