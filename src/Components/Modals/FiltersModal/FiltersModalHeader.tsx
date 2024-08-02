type FiltersModalHeaderProps = {
  onClick: () => void;
};

export const FiltersModalHeader = ({ onClick }: FiltersModalHeaderProps) => {
  return (
    <div className="modal-header">
      <p className="filters-modal-title">Filters</p>
      <button
        className="modal-button"
        onClick={onClick}
        aria-label="Close filters modal"
      >
        ✖
      </button>
    </div>
  );
};
