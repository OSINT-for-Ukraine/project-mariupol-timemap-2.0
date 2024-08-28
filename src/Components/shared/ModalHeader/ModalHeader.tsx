import { ReactNode } from "react";

type ModalHeaderProps = {
  onClick: () => void;
  children?: ReactNode;
  className?: string;
};

export const ModalHeader = ({
  onClick,
  children,
  className,
}: ModalHeaderProps) => {
  return (
    <div className={`modal-header ${className ? className : ""}`}>
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
