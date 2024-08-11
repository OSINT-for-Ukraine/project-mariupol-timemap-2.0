import { ModalHeader } from "Components/shared/ModalHeader/ModalHeader";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const Header = () => {
  const { date } = useParams();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  return (
    <ModalHeader
      onClick={() =>
        navigate({
          pathname: `/date/${date}`,
          search: `?${searchParams.toString()}`,
        })
      }
    >
      <button className="modal-button">Display military units</button>
    </ModalHeader>
  );
};
