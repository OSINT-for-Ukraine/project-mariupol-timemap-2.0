import { useArtilleryProvider } from "utils/hooks/useArtilleryProvider";
import { Artillery } from "utils/types";

const displayRangeInKm = (range: number) => {
  const rangeInKm = (range / 1000).toFixed(2);
  return rangeInKm + "km";
};

const artilleryList: Artillery[] = [
  { id: 1, title: "2A18 D-30", range: 153000 },
  { id: 2, title: "2S1 Gvozdika", range: 152000 },
  { id: 3, title: "2S3 Akatsiya", range: 19000 },
  { id: 4, title: "2S4 Tyulpan", range: 20000 },
  { id: 5, title: "BM-21", range: 20000 },
  { id: 6, title: "BM-27 Uragan", range: 35000 },
  { id: 7, title: "2S19 Msta-S", range: 29000 },
  { id: 8, title: "2A65 Msta-B", range: 247000 },
  { id: 9, title: "2A36 Giatsint-B", range: 30000 },
  { id: 10, title: "2S5 Giatsint-S", range: 37000 },
  { id: 11, title: "2S7 Pion", range: 375000 },
  { id: 12, title: "9K51M Tornado-G", range: 40000 },
  { id: 13, title: "BM-30", range: 70000 },
  { id: 14, title: "9K515 Tornado-S", range: 120000 },
  { id: 15, title: "9K79-1 Tochka-U", range: 120000 },
  { id: 16, title: "9K720 Iskander", range: 500000 },
  { id: 17, title: "S-300", range: 150000 },
];

export const Content = () => {
  const { selectedArtillery, handleArtillerySelect } = useArtilleryProvider();

  return (
    <div>
      <p className="margin-top">
        Select an item from the list and click on the map to see the range.
      </p>
      <ul className="artillery-list">
        {artilleryList.map((artillery) => (
          <li
            onClick={() =>
              handleArtillerySelect({
                id: artillery.id,
                range: artillery.range,
              })
            }
            key={artillery.id}
          >
            <div className="artillery-item">
              <p className="title"> {artillery.title} </p>
              <p className="range"> {displayRangeInKm(artillery.range)}</p>
              {selectedArtillery?.id === artillery.id ? (
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
