import "./zoomToButtons.css";
import { NavLink } from "react-router-dom";
import {
  calculateDateFromMonthsAgo,
  currentDate,
  getIsoDate,
} from "utils/date-utils";

const zoomLevels = [
  { label: "Zoom to 1 month", months: 1, id: 1 },
  { label: "Zoom to 6 months", months: 6, id: 2 },
  { label: "Zoom to 1 year", months: 12, id: 3 },
  { label: "Zoom to 2 years", months: 24, id: 4 },
];

type ZoomToButtonsProps = {
  isCustomDateRangeOpen: boolean;
  onCustomRangeClick: () => void;
};

export const ZoomToButtons = ({
  isCustomDateRangeOpen,
  onCustomRangeClick,
}: ZoomToButtonsProps) => {
  return (
    <div className="zoom-controls">
      {zoomLevels.map((item, index) => (
        <NavLink
          className="zoom-level-button"
          key={index}
          to={`/date/${calculateDateFromMonthsAgo(item.months)}__${getIsoDate(currentDate)}`}
        >
          {item.label}
        </NavLink>
      ))}
      <button
        onClick={onCustomRangeClick}
        className={`zoom-level-button ${isCustomDateRangeOpen ? "custom-range-active" : ""}`}
      >
        Custom range
      </button>
    </div>
  );
};
