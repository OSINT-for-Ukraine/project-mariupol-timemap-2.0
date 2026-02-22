import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { usePolygons } from "./hooks/usePolygons";
import { getFirstDayOfMonth } from "utils/date-utils";
import { LatLngTuple } from "leaflet";
import { ErrorModal } from "Components/shared/ErrorModal";
import { LoadingWheel } from "Components/shared/LoadingWheel";

export const Polygon = () => {
  const { date } = useParams();
  const {
    polygons: polygonData,
    isLoading,
    error,
  } = usePolygons({
    date: date ? getFirstDayOfMonth(date.split("__")[0]) : "",
  });

  const polygons = polygonData?.polygons?.map((polygon) => {
    return {
      positions: polygon.coordinates.map(
        (coordinate) => [coordinate[1], coordinate[0]] as LatLngTuple,
      ),
      color: polygon.fill,
      fillOpacity: polygon.fillOpacity,
      name: polygon.name,
    };
  });

  return (
    <>
      {error ? <ErrorModal message={error.message} /> : null}
      {isLoading ? <LoadingWheel /> : null}
      {polygons?.map((polygon, index) => {
        return (
          <LeafletPolygon {...polygon} stroke={false} key={index}>
            <Popup>{polygon.name}</Popup>
          </LeafletPolygon>
        );
      })}
    </>
  );
};
