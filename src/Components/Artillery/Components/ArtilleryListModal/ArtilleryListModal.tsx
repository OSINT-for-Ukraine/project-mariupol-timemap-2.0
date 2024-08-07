import "./artilleryListModal.css";
import { Modal } from "Components/shared/Modal";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

type ArtilleryListModalProps = {
  open: boolean;
  onClick: () => void;
};

export const ArtilleryListModal = ({
  open,
  onClick,
}: ArtilleryListModalProps) => {
  return (
    <Modal open={open} position="left">
      <div className="modal-container">
        <Header onClick={onClick} />
        <Content />
      </div>
    </Modal>
  );
};
