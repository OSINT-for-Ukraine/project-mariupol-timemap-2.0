import { ModalHeader } from "Components/shared/ModalHeader/ModalHeader";

type ArtilleryModalHeaderProps = {
  onClick: () => void;
};

export const Header = ({ onClick }: ArtilleryModalHeaderProps) => {
  return (
    <ModalHeader onClick={onClick}>
      <p className="modal-title">Artillery</p>
    </ModalHeader>
  );
};
