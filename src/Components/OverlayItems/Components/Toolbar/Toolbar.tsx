import "./toolbar.css";
import { Filters } from "./Filters";
import { ArtilleryProvider } from "providers/ArtilleryProvider";
import { Artillery } from "./Artillery";
import { FullScreen } from "./FullScreen";

export const Toolbar = () => {
  return (
    <div className="flex-container overlay-z-index">
      <Filters />
      <ArtilleryProvider>
        <Artillery />
      </ArtilleryProvider>
      <FullScreen />
    </div>
  );
};
