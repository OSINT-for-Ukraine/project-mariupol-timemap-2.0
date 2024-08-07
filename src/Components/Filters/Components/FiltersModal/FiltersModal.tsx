import "./filtersModal.css";
import { Modal } from "Components/shared/Modal";
import { Header } from "./Components/Header.tsx";
import { Content } from "./Components/Content.tsx";

type FiltersModalProps = {
  open: boolean;
  onClick: () => void;
};

export const FiltersModal = ({ open, onClick }: FiltersModalProps) => {
  return (
    <Modal open={open} position="left">
      <div className="modal-container">
        <Header onClick={onClick} />
        <Content />
      </div>
    </Modal>
  );
};
