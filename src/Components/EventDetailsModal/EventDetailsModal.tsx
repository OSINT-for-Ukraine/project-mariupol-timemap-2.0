import "./eventDetailsModal.css";
import { Modal } from "Components/shared/Modal";
import { useParams } from "react-router-dom";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { useEvent } from "./hooks/useEvent";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";
import { Sources } from "./Components/Sources";

export const EventDetailsModal = () => {
  const { eventId } = useParams();

  const { event, isLoading, error } = useEvent({ id: eventId });

  return (
    <Modal open={!!eventId} position="right">
      <div className="modal-container event-details-modal">
        <Header eventDate={event?.date?.toISOString()} />
        {error ? (
          <div className="error-message-container">
            <p>{error.message}</p>
          </div>
        ) : null}
        {isLoading ? <LoadingWheel /> : null}
        {event ? (
          <>
            <Content
              date={event?.date?.toDateString() || ""}
              description={event?.description || ""}
              location={event?.location || "--"}
            />
            <Sources sources={event?.sources} />
          </>
        ) : null}
      </div>
    </Modal>
  );
};
