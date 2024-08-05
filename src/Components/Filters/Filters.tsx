import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CloseIcon } from "Components/shared/CloseIcon/CloseIcon";
import { FilterListIcon } from "./Components/FilterListIcon";
import { FiltersModal } from "./Components/FiltersModal";

export const Filters = () => {
  const [openModal, setOpenModal] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const isActive = searchParams.has("filter");

  const handleModalClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleToolbarIconClick = () => {
    setSearchParams("");
  };
  return (
    <>
      <button
        onClick={handleModalClick}
        className={`toolbar-button ${isActive ? "active" : ""}`}
        aria-label="Open filters modal"
        title="Open filters modal"
      >
        <FilterListIcon color={isActive ? "white" : "#a0a0a0"} />
      </button>
      {isActive ? (
        <button
          className="toolbar-button"
          onClick={handleToolbarIconClick}
          aria-label="Clear all filters"
          title="Clear all filters"
        >
          <CloseIcon />
        </button>
      ) : null}
      <FiltersModal open={openModal} onClick={handleModalClick} />
    </>
  );
};
