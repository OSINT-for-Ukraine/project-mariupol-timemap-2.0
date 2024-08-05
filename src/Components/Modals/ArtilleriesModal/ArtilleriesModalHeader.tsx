type ArtilleryModalHeaderProps = {
  onClick: () => void;
};

export const ArtilleriesModalHeader = ({
  onClick,
}: ArtilleryModalHeaderProps) => {
  return (
    <div className="modal-header">
      <p className="filters-modal-title">Artillery</p>
      <button
        className="modal-button"
        onClick={onClick}
        aria-label="Close artillery modal"
      >
        ✖
      </button>
    </div>
  );
};
