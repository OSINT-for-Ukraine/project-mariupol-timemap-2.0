import { ModalHeader } from "Components/shared/ModalHeader/ModalHeader";

type HeaderProps = {
  onClick: () => void;
};

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <ModalHeader onClick={onClick}>
      <p className="modal-title">Artillery</p>
    </ModalHeader>
  );
};
