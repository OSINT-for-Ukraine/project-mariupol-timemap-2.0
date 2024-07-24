import { NavLink } from "react-router-dom";
import "./zoomButtons.css";
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

export const ZoomButtons = () => {
  return (
    <div className="zoom-controls">
      {zoomLevels.map((item, index) => (
        <NavLink
          className={`zoom-level-button`}
          key={index}
          to={`/${calculateDateFromMonthsAgo(item.months)}__${getIsoDate(currentDate)}`}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
