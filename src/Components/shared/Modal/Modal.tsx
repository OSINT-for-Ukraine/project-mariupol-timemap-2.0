import "./modal.css";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalPosition = "right" | "center" | "left";

type ModalProps = {
  children: ReactNode;
  position: ModalPosition;
};

export const Modal = ({ children, position }: ModalProps) => {
  return (
    <>
      {createPortal(
        <div
          className={`position-fixed modal-z-index modal-position-${position}`}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
};
