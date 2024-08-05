import "./artilleryListModal.css";
import { Modal } from "Components/shared/Modal";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

type FiltersModalProps = {
  open: boolean;
  onClick: () => void;
};

export const ArtilleryListModal = ({ open, onClick }: FiltersModalProps) => {
  return (
    <Modal open={open} position="left">
      <div className="modal-container">
        <Header onClick={onClick} />
        <Content />
      </div>
    </Modal>
  );
};
