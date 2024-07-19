import { useNavigate } from "react-router-dom";
import "./zoomButton.css";

const zoomLevels = [
  { label: "Zoom to 1 month", months: 1 },
  { label: "Zoom to 6 months", months: 6 },
  { label: "Zoom to 1 year", months: 12 },
  { label: "Zoom to 2 years", months: 24 },
];

const currentDate: Date = new Date();

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  let month: string = (date.getMonth() + 1).toString();
  let day: string = date.getDate().toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  if (day.length === 1) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

const getZoomDate = (currentDate: Date, months: number) => {
  const targetDate = new Date(currentDate);
  targetDate.setMonth(targetDate.getMonth() - months);

  if (targetDate.getDate() !== currentDate.getDate()) {
    targetDate.setDate(0);
  }

  return targetDate;
};

export const ZoomButton = () => {
  const navigate = useNavigate();

  const handleZoom = (months: number) => {
    const zoomDate = getZoomDate(currentDate, months);
    const url = `/${formatDate(zoomDate)}__${formatDate(currentDate)}`;
    navigate(url);
  };

  return (
    <div className="zoom-controls">
      {zoomLevels.map((item, index) => (
        <div key={index} className="zoom-level-button">
          <div onClick={() => handleZoom(item.months)}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};
