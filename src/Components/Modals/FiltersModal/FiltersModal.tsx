import "./filtersModal.css";
import "../modals.css";
import { Modal } from "Components/shared/Modal";
import { FiltersModalHeader } from "./FiltersModalHeader.tsx";
import { FiltersModalContent } from "./FiltersModalContent.tsx";

type FiltersModalProps = {
  open: boolean;
  onClick: () => void;
};

export const FiltersModal = ({ open, onClick }: FiltersModalProps) => {
  return (
    <Modal open={open} position="left">
      <div className="modal-container">
        <FiltersModalHeader onClick={onClick} />
        <FiltersModalContent />
      </div>
    </Modal>
  );
};
