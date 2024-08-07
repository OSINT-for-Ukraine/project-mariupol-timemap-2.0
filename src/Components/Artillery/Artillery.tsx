import { useState } from "react";
import artilleryIconGrey from "assets/icons/artillery-grey.png";
import artilleryIconWhite from "assets/icons/artillery-white.png";
import { ArtilleryItem } from "./Components/ArtilleryItem";
import { useArtilleryProvider } from "utils/hooks/useArtilleryProvider";
import { CloseIcon } from "Components/shared/CloseIcon/CloseIcon";
import { ArtilleryListModal } from "./Components/ArtilleryListModal";

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
        aria-label="Open artillery list"
        title="Open artillery list"
      >
        <img
          src={selectedArtillery ? artilleryIconWhite : artilleryIconGrey}
          alt="artillery-icon"
          className="toolbar-icon"
          width="24px"
          height="24px"
        />
      </button>
      {selectedArtillery ? (
        <button
          className="toolbar-button"
          onClick={() => handleArtillerySelect(null)}
          aria-label="Close artillery list"
          title="Exit artillery range view"
        >
          <CloseIcon />
        </button>
      ) : null}
      <ArtilleryListModal open={openModal} onClick={handleModalClick} />
      {selectedArtillery?.range ? (
        <ArtilleryItem artilleryRange={selectedArtillery?.range} />
      ) : null}
    </>
  );
};
