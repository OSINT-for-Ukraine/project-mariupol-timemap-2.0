import "./overlayItems.css";
import { Title } from "./Components/Title";
import { SatelliteLayerToggle } from "./Components/SatelliteLayerToggler";
import { MadeWith } from "./Components/MadeWith";
import { OfuLogo } from "./Components/OfuLogo";
import { Timeline } from "./Components/Timeline";

export const OverlayItems = () => {
  return (
    <>
      <Title />
      <div className="position-fixed satellite-toggle-position">
        <SatelliteLayerToggle />
      </div>
      <div className="position-fixed made-with-position">
        <MadeWith />
      </div>
      <div className="position-fixed ofu-logo-position">
        <OfuLogo />
      </div>
      <div className="position-fixed timeline-position">
        <Timeline />
      </div>
    </>
  );
};
