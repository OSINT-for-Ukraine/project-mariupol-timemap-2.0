import "./toolbar.css";
import { Filters } from "./Filters";

export const Toolbar = () => {
  return (
    <div className="flex-container overlay-z-index">
      <Filters />
    </div>
  );
};
