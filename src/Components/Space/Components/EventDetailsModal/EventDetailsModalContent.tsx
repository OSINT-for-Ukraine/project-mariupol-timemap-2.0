type EventDetailsModalContentProps = {
  date: string;
  location: string;
  description: string;
};

export const EventDetailsModalContent = ({
  date,
  location,
  description,
}: EventDetailsModalContentProps) => {
  return (
    <>
      <div className="event-details-labels">
        <div>
          <p className="event-details-label">Reported incident date</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="event-details-label">Location</p>
          <p> {location} </p>
        </div>
      </div>
      <div className="event-summary">
        <p className="event-details-label">Summary</p>
        <p>{description}</p>
      </div>
    </>
  );
};
