import "./errorModal.css";
import { Modal } from "Components/shared/Modal";
import { ModalHeader } from "Components/shared/ModalHeader/ModalHeader";
import { useState } from "react";

type ErrorModalProps = {
  message: string;
};

export const ErrorModal = ({ message }: ErrorModalProps) => {
  const [open, setOpen] = useState(true);
  const onModalClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Modal open={open} position="center">
      <div className="modal-container modal-error-container">
        <ModalHeader onClick={onModalClick} className="modal-error-header">
          Error
        </ModalHeader>
        <div className="modal-error-message">{message}</div>
      </div>
    </Modal>
  );
};
