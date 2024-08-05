import "./eventDetailsModal.css";
import { Modal } from "Components/shared/Modal";
import { useParams } from "react-router-dom";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { useEvent } from "utils/hooks/useEvent";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";
import { Sources } from "./Components/Sources";

export const EventDetailsModal = () => {
  const { eventId } = useParams();

  const { event, isLoading } = useEvent({ id: eventId });

  return (
    <Modal open position="right">
      <div className="modal-container event-details-modal">
        <Header />
        {isLoading ? (
          <LoadingWheel />
        ) : (
          <>
            <Content
              date={event?.date?.toDateString()}
              description={event?.description}
              location={event?.location || "--"}
            />
            <Sources sources={event?.sources} />{" "}
          </>
        )}
      </div>
    </Modal>
  );
};
