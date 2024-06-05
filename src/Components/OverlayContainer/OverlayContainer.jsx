import "./overlayContainer.css";
import { Title } from "./Components/Title";
import { Toolbar } from "./Components/Toolbar";
import { SatelliteLayerToggle } from "./Components/SatelliteLayerToggler";
import { MadeWith } from "./Components/MadeWith";
import { OfuLogo } from "./Components/OfuLogo";

export const OverlayContainer = () => {
  return (
    <div className="overlay-container">
      <div className="container-row">
        <div className="flex-container">
          <Title />
          <Toolbar />
        </div>
        <SatelliteLayerToggle />
      </div>
      <div className="container-row">
        <MadeWith />
        <OfuLogo />
      </div>
    </div>
  );
};
