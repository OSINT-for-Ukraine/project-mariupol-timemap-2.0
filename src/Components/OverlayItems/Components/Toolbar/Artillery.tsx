import { useState } from "react";
import artilleryIconGrey from "assets/icons/artillery-grey.png";
import artilleryIconWhite from "assets/icons/artillery-white.png";
import { ArtilleryListModal } from "Components/Modals/ArtilleryListModal";
import { ArtilleryItem } from "./ArtilleryItem";
import { useArtilleryProvider } from "utils/hooks/useArtilleryProvider";
import { Close } from "Components/Icons/Close";

export const Artillery = () => {
  const { selectedArtillery, handleArtillerySelect } = useArtilleryProvider();

  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={handleModalClick}
        className={`toolbar-button ${selectedArtillery ? "active" : ""}`}
        aria-label="Open artillery"
        title="Open artillery list"
      >
        <img
          src={selectedArtillery ? artilleryIconWhite : artilleryIconGrey}
          className="toolbar-icon"
        />
      </button>
      {selectedArtillery ? (
        <button
          className="toolbar-button"
          onClick={() => handleArtillerySelect(null)}
          aria-label="Clear all filters"
          title="Exit artillery range view"
        >
          <Close />
        </button>
      ) : null}
      <ArtilleryListModal open={openModal} onClick={handleModalClick} />
      {selectedArtillery?.range ? (
        <ArtilleryItem artilleryRange={selectedArtillery?.range} />
      ) : null}
    </>
  );
};
