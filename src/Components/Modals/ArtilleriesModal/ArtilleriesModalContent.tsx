import { artilleries } from "utils/artilleries";
import { useArtilleriesProvider } from "utils/hooks/useArtilleriesProvider";

const displayRangeInKm = (range: number) => {
  const rangeInKm = (range / 1000).toFixed(2);
  return rangeInKm + "km";
};

export const ArtilleriesModalContent = () => {
  const { selectedArtilleryId, handleArtillerySelect } =
    useArtilleriesProvider();

  return (
    <div>
      <p className="margin-top">
        Select an item from the list and click on the map to see the range.
      </p>
      <ul className="artileries-list">
        {artilleries.map((artillery) => (
          <li
            onClick={() => handleArtillerySelect(artillery.id)}
            key={artillery.id}
          >
            <div className="artillery-item">
              <p className="title"> {artillery.title} </p>
              <p className="range"> {displayRangeInKm(artillery.range)}</p>
              {selectedArtilleryId === artillery.id ? (
                <div>
                  <span className="selected">selected</span>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
