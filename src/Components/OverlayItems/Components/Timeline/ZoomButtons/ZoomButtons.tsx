import { useNavigate } from "react-router-dom";
import "./zoomButtons.css";
import { useState } from "react";

const zoomLevels = [
  { label: "Zoom to 1 month", months: 1, id: 1 },
  { label: "Zoom to 6 months", months: 6, id: 2 },
  { label: "Zoom to 1 year", months: 12, id: 3 },
  { label: "Zoom to 2 years", months: 24, id: 4 },
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

export const ZoomButtons = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleZoom = (months: number, id: number) => {
    const zoomDate = getZoomDate(currentDate, months);
    const url = `/${formatDate(zoomDate)}__${formatDate(currentDate)}`;
    navigate(url);
    setSelectedId(id);
  };

  return (
    <div className="zoom-controls">
      {zoomLevels.map((item, index) => (
        <button
          className={`zoom-level-button ${selectedId === item.id ? "active" : ""} `}
          key={index}
          role="link"
          onClick={() => handleZoom(item.months, item.id)}>
          {item.label}
        </button>
      ))}
    </div>
  );
};
