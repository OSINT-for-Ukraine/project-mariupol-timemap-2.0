import { useMillitaryUnits } from "./hooks/useMillitaryUnits";
import { MillitaryUnit } from "./Components/MilitaryUnit";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { useParams } from "react-router-dom";
import { MillitaryUnitsButton } from "./Components/MillitaryUnitsButton";
import { ErrorModal } from "Components/shared/ErrorModal";
import { MillitaryUnit as MillitaryUnitType } from "./types";

export const MillitaryUnits = () => {
  const { millitary_units_date } = useParams();
  const { millitaryUnits, isLoading, error } = useMillitaryUnits({
    date: millitary_units_date ?? "",
  });

  return (
    <>
      <MillitaryUnitsButton />
      {error ? <ErrorModal message={error.message} /> : null}
      {isLoading ? <LoadingWheel /> : null}
      {millitaryUnits
        ? millitaryUnits.units?.map(
            (unit: MillitaryUnitType, index: number) => {
              return <MillitaryUnit key={index} unit={unit} />;
            }
          )
        : null}
    </>
  );
};
