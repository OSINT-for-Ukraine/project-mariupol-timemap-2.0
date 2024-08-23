import "./dateRange.css";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { currentDate, getIsoDate } from "utils/date-utils";

export const CustomDateRangeSection = ({ open }: { open: boolean }) => {
  const navigate = useNavigate();
  const { date } = useParams();

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const dateArr = date?.split("__");
    setStartDate(dateArr?.[0] ?? "");
    setEndDate(dateArr?.[1] ?? "");
  }, [date]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/date/${startDate}__${endDate}`);
  };

  if (!open) {
    return null;
  }

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
            min="2021-01-01"
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
