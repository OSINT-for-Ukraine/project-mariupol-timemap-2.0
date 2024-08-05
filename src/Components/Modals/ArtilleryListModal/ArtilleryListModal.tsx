import "./artilleryListModal.css";
import { Modal } from "Components/shared/Modal";
import { ArtilleryListModalHeader } from "./ArtilleryListModalHeader";
import { ArtilleryListModalContent } from "./ArtilleryListModalContent";

type FiltersModalProps = {
  open: boolean;
  onClick: () => void;
};

export const ArtilleryListModal = ({ open, onClick }: FiltersModalProps) => {
  return (
    <Modal open={open} position="left">
      <div className="modal-container">
        <ArtilleryListModalHeader onClick={onClick} />
        <ArtilleryListModalContent />
      </div>
    </Modal>
  );
};
