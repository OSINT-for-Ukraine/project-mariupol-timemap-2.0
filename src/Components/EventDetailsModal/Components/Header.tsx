import { ModalHeader } from "Components/shared/ModalHeader/ModalHeader";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getFirstDayOfMonth } from "utils/date-utils";

type HeaderProps = {
  eventDate?: string;
};

export const Header = ({ eventDate }: HeaderProps) => {
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
      <button
        onClick={() =>
          navigate({
            pathname: `/date/${date}/millitary_units/${getFirstDayOfMonth(eventDate)}`,
            search: `?${searchParams.toString()}`,
          })
        }
        className="modal-button"
      >
        Display military units
      </button>
    </ModalHeader>
  );
};
