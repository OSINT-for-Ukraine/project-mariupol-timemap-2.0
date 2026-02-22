import "./ofuLogo.css";
import ofulogo from "assets/ofu-logo.jpg";

export const OfuLogo = () => {
  return (
    <a
      href="https://osintforukraine.com/"
      target="_blank"
      aria-label="osintforukraine.com"
    >
      <img
        className="logo square-fixed-size"
        src={ofulogo}
        alt="OFU logo"
        width="64px"
        height="64px"
      />
    </a>
  );
};
