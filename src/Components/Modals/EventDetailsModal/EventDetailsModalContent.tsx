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
      <div className="event-details-labels margin-top">
        <div>
          <p className="event-details-label">Reported incident date</p>
          <p className="margin-top">{date}</p>
        </div>
        <div>
          <p className="event-details-label">Location</p>
          <p className="margin-top"> {location} </p>
        </div>
      </div>
      <div className="event-summary margin-top">
        <p className="event-details-label">Summary</p>
        <p className="margin-top">{description}</p>
      </div>
    </>
  );
};
