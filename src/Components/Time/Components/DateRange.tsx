import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DateRange.css";
import { currentDate, getIsoDate } from "utils/date-utils";

export const DateRange = () => {
  const navigate = useNavigate();
  const { date } = useParams();

  const dateArr = date?.split("__");

  const [startDate, setStartDate] = useState<string>(dateArr?.[0] ?? "");
  const [endDate, setEndDate] = useState<string>(dateArr?.[1] ?? "");

  useEffect(() => {
    setStartDate(dateArr?.[0] ?? "");
    setEndDate(dateArr?.[1] ?? "");
  }, [date]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/date/${startDate}__${endDate}`);
  };

  return (
    <div className="position-fixed overlay-z-index date-range">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="start">Start date:</label>
          <input
            type="date"
            id="start"
            name="start-date"
            value={startDate}
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
            min="2019-01-01"
            max={endDate}
          />
        </div>
        <div>
          <label htmlFor="end">End date:</label>
          <input
            type="date"
            id="end"
            name="end-date"
            value={endDate}
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
            min={startDate}
            max={getIsoDate(currentDate)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
