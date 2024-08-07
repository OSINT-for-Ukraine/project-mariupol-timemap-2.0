import { FullScreenIcon } from "./Components/FullScreenIcon";
import "./fullScreen.css";

export const FullScreen = () => {
  const handleFullScreenClick = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <button
      onClick={handleFullScreenClick}
      className="toolbar-button fullscreen-button"
      aria-label="fullscreen icon"
      title="open fullscreen"
    >
      <FullScreenIcon />
    </button>
  );
};
