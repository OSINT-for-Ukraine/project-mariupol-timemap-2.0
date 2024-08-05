import { ReactNode } from "react";

type ModalHeaderProps = {
  onClick: () => void;
  children: ReactNode;
};

export const ModalHeader = ({ onClick, children }: ModalHeaderProps) => {
  return (
    <div className="modal-header">
      {children}
      <button
        className="modal-button"
        onClick={onClick}
        aria-label="Close modal"
        title="Close modal"
      >
        ✖
      </button>
    </div>
  );
};
