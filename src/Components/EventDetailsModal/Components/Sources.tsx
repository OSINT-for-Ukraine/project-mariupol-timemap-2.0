import { useState } from "react";
import { Event } from "utils/types";
import { Source } from "./Source";

type EventDetailsModalSources = {
  sources: Event["sources"];
};

export const Sources = ({ sources }: EventDetailsModalSources) => {
  const [showSources, setShowSources] = useState(true);

  return (
    <>
      <div className="event-display-sources flex-container gap-lg">
        <span className="line"></span>
        <button
          onClick={() => {
            setShowSources((prevState) => !prevState);
          }}
        >
          {`${showSources ? "Hide" : "Show"} sources (${sources?.length})`}
        </button>
        <span className="line"></span>
      </div>
      {showSources
        ? sources?.map((source) => (
            <div key={source?.id} className="event-source">
              <Source path={source?.path} />
            </div>
          ))
        : null}
    </>
  );
};
