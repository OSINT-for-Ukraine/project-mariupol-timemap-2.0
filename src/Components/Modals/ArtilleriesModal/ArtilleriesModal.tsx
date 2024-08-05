import "./artilleriesModal.css";
import { Modal } from "Components/shared/Modal";
import { ArtilleriesModalHeader } from "./ArtilleriesModalHeader";
import { ArtilleriesModalContent } from "./ArtilleriesModalContent";

type FiltersModalProps = {
  open: boolean;
  onClick: () => void;
};

export const ArtilleriesModal = ({ open, onClick }: FiltersModalProps) => {
  return (
    <Modal open={open} position="left">
      <div className="modal-container">
        <ArtilleriesModalHeader onClick={onClick} />
        <ArtilleriesModalContent />
      </div>
    </Modal>
  );
};
