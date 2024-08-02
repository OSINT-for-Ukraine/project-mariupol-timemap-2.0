import "./overlayItems.css";
import { Title } from "./Components/Title";
import { SatelliteLayerToggle } from "./Components/SatelliteLayerToggler";
import { MadeWith } from "./Components/MadeWith";
import { OfuLogo } from "./Components/OfuLogo";
import { Toolbar } from "./Components/Toolbar";

export const OverlayItems = () => {
  return (
    <>
      <Title />
      <div className="position-fixed overlay-z-index toolbar-position">
        <Toolbar />
      </div>
      <div className="position-fixed overlay-z-index satellite-toggle-position">
        <SatelliteLayerToggle />
      </div>
      <div className="position-fixed overlay-z-index made-with-position">
        <MadeWith />
      </div>
      <div className="position-fixed overlay-z-index ofu-logo-position">
        <OfuLogo />
      </div>
    </>
  );
};
