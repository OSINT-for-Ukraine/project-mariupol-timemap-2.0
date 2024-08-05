import { useMemo, useState } from "react";
import artilleryIconGrey from "assets/icons/artillery-grey.png";
import artilleryIconWhite from "assets/icons/artillery-white.png";
import { ArtilleriesModal } from "Components/Modals/ArtilleriesModal";
import { ArtilleryItem } from "./ArtilleryItem";
import { useArtilleriesProvider } from "utils/hooks/useArtilleriesProvider";
import { artilleries } from "utils/artilleries";
import { Close } from "Components/Icons/Close";

export const Artillery = () => {
  const { selectedArtilleryId, handleArtillerySelect } =
    useArtilleriesProvider();

  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  const artilleryRange = useMemo(() => {
    return artilleries.find((artillery) => artillery.id === selectedArtilleryId)
      ?.range;
  }, [selectedArtilleryId]);

  return (
    <>
      <button
        onClick={handleModalClick}
        className={`toolbar-button ${selectedArtilleryId ? "active" : ""}`}
        aria-label="Open artillery"
        title="Open artillery list"
      >
        <img
          src={selectedArtilleryId ? artilleryIconWhite : artilleryIconGrey}
          style={{ verticalAlign: "middle" }}
        />
      </button>
      {selectedArtilleryId ? (
        <button
          className="toolbar-button"
          onClick={() => handleArtillerySelect(null)}
          aria-label="Clear all filters"
          title="Exit artillery range view"
        >
          <Close />
        </button>
      ) : null}
      <ArtilleriesModal open={openModal} onClick={handleModalClick} />
      {artilleryRange ? (
        <ArtilleryItem artilleryRange={artilleryRange} />
      ) : null}
    </>
  );
};
