import { useNavigate, useParams } from "react-router-dom";

export const EventDetailsModalHeader = () => {
  const { date } = useParams();

  const navigate = useNavigate();

  return (
    <div className="event-details-header">
      <button className="event-details-modal-button">
        Display military units
      </button>
      <button
        className="event-details-modal-button"
        onClick={() => navigate(`/date/${date}`)}
      >
        ✖
      </button>
    </div>
  );
};
