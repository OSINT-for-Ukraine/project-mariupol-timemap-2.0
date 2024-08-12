import "./toolbar.css";
import { Filters } from "Components/Filters";
import { Artillery } from "Components/Artillery";
import { FullScreen } from "Components/FullScreen";
import { ArtilleryProvider } from "providers/ArtilleryProvider";
import { MillitaryUnits } from "Components/MillitaryUnits";

export const Toolbar = () => {
  return (
    <div className="flex-container gap-sm overlay-z-index">
      <Filters />
      <ArtilleryProvider>
        <Artillery />
      </ArtilleryProvider>
      <MillitaryUnits />
      <FullScreen />
    </div>
  );
};
