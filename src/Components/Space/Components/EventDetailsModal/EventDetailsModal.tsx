import "./eventDetailsModal.css";
import { Modal } from "Components/shared/Modal";
import { useParams } from "react-router-dom";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { useEvent } from "utils/hooks/useEvent";
import { EventDetailsModalHeader } from "./EventDetailsModalHeader";
import { EventDetailsModalContent } from "./EventDetailsModalContent";
import { EventDetailsModalSources } from "./EventDetailsModalSources";

export const EventDetailsModal = () => {
  const { eventId } = useParams();

  const { event, isLoading } = useEvent({ id: eventId });

  return (
    <Modal position="right">
      <div className="event-details-modal">
        <EventDetailsModalHeader />
        {isLoading ? (
          <LoadingWheel />
        ) : (
          <>
            <EventDetailsModalContent
              date={event?.date?.toDateString()}
              description={event?.description}
              location={event?.location || "--"}
            />
            <EventDetailsModalSources sources={event?.sources} />{" "}
          </>
        )}
      </div>
    </Modal>
  );
};
