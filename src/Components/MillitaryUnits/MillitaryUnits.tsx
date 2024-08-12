import { useMillitaryUnits } from "./hooks/useMillitaryUnits";
import { MillitaryUnit } from "./Components/MilitaryUnit";
import { LoadingWheel } from "Components/shared/LoadingWheel";
import { useParams } from "react-router-dom";
import { MillitaryUnitsButton } from "./Components/MillitaryUnitsButton";

export const MillitaryUnits = () => {
  const { millitary_units_date } = useParams();
  const { millitaryUnits, isLoading } = useMillitaryUnits({
    date: millitary_units_date ?? "",
  });

  return (
    <>
      <MillitaryUnitsButton />
      {isLoading ? (
        <LoadingWheel />
      ) : (
        millitaryUnits?.[0].units?.map((unit, index: number) => {
          return <MillitaryUnit key={index} unit={unit} />;
        })
      )}
    </>
  );
};
