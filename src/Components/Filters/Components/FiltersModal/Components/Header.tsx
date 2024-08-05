import { ModalHeader } from "Components/shared/ModalHeader/ModalHeader";

type FiltersModalHeaderProps = {
  onClick: () => void;
};

export const Header = ({ onClick }: FiltersModalHeaderProps) => {
  return (
    <ModalHeader onClick={onClick}>
      <p className="modal-title">Filters</p>
    </ModalHeader>
  );
};
