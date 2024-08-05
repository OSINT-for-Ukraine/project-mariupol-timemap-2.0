import "./toolbar.css";
import { Filters } from "./Filters";
import { ArtilleriesProvider } from "providers/ArtilleryProvider";
import { Artillery } from "./Artillery";
import { FullScreen } from "./FullScreen";

export const Toolbar = () => {
  return (
    <div className="flex-container overlay-z-index">
      <Filters />
      <ArtilleriesProvider>
        <Artillery />
      </ArtilleriesProvider>
      <FullScreen />
    </div>
  );
};
