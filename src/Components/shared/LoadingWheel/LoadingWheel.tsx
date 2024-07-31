import "./loadingWheel.css";

export const LoadingWheel = () => {
  return (
    <div className="overlay-z-index loading-wheel-position">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
