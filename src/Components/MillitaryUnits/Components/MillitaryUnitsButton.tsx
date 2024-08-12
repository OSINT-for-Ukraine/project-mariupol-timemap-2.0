import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import millitaryIconGrey from "assets/icons/soldier-grey.png";
import millitaryIconWhite from "assets/icons/soldier-white.png";
import { getFirstDayOfMonth } from "utils/date-utils";

export const MillitaryUnitsButton = () => {
  const { date, millitary_units_date } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleMillitaryButtonClick = () => {
    if (millitary_units_date) {
      navigate({
        pathname: `/date/${date}`,
        search: `?${searchParams.toString()}`,
      });
    } else {
      navigate({
        pathname: `/date/${date}/millitary_units/${getFirstDayOfMonth(date?.split("__")[0])}`,
        search: `?${searchParams.toString()}`,
      });
    }
  };

  return (
    <button
      className={`toolbar-button ${millitary_units_date ? "active" : ""}`}
      onClick={handleMillitaryButtonClick}
      aria-label={
        millitary_units_date ? "close millitary units" : "open millitary units"
      }
      title={
        millitary_units_date
          ? "exit millitary units view"
          : "open millitary units"
      }
    >
      <img
        src={millitary_units_date ? millitaryIconWhite : millitaryIconGrey}
        alt="soldier-icon"
        className="toolbar-icon"
        width="24px"
        height="24px"
      />
    </button>
  );
};
