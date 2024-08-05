import { useState, createContext, ReactNode } from "react";

export const ArtilleriesContext = createContext<{
  selectedArtilleryId: number | null;
  handleArtillerySelect: (id: number | null) => void;
}>({
  selectedArtilleryId: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleArtillerySelect: (_id: number | null) => {},
});

export const ArtilleriesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArtilleryId, setSelectedArtilleryId] = useState<number | null>(
    null
  );

  const handleArtillerySelect = (id: number | null) => {
    setSelectedArtilleryId(id);
  };

  return (
    <ArtilleriesContext.Provider
      value={{ selectedArtilleryId, handleArtillerySelect }}
    >
      {children}
    </ArtilleriesContext.Provider>
  );
};
