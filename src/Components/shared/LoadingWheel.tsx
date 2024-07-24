import "./loadingWheel.css";

export const LoadingWheel = () => {
  return (
    <div className="position-fixed loading-wheel-position">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
