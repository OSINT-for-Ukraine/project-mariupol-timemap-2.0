import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const EventDetailsModalHeader = () => {
  const { date } = useParams();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  return (
    <div className="modal-header">
      <button className="modal-button">Display military units</button>
      <button
        className="modal-button"
        onClick={() =>
          navigate({
            pathname: `/date/${date}`,
            search: `?${searchParams.toString()}`,
          })
        }
      >
        ✖
      </button>
    </div>
  );
};
