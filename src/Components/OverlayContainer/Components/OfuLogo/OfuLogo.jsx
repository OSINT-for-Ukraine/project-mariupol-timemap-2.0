import "./ofuLogo.css";
import ofulogo from "assets/ofu-logo.jpg";

export const OfuLogo = () => {
  return (
    <a
      href="https://www.osintforukraine.com/"
      target="_blank"
      aria-label="osintforukraine.com"
    >
      <img className="logo square-fixed-size" src={ofulogo} alt="OFU logo" />
    </a>
  );
};
