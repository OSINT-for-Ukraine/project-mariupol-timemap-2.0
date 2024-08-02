import { useSearchParams } from "react-router-dom";
import { MouseEvent } from "react";
import { filters as filtersJson } from "utils/filters.ts";

type FiltersModalCategoryListProps = {
  category: "type_of_area_affected" | "weapon_system";
};

export const FiltersModalCategoryList = ({
  category,
}: FiltersModalCategoryListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterSearchParams = searchParams.getAll("filter");

  const handleFilterClick = (event: MouseEvent<HTMLInputElement>) => {
    const checkBox = event.target as HTMLInputElement;
    if (checkBox.checked) {
      searchParams.append("filter", checkBox.value);
    } else {
      searchParams.delete("filter", checkBox.value);
    }
    setSearchParams(searchParams);
  };

  return (
    <ul className="fiter-category-list">
      {filtersJson[category].map((filter) => {
        return (
          <li key={filter.id} className="margin-top">
            <input
              onClick={(e) => handleFilterClick(e)}
              value={filter.id}
              defaultChecked={filterSearchParams.includes(filter.id)}
              type="checkbox"
            ></input>
            <label> {filter.title} </label>
          </li>
        );
      })}
    </ul>
  );
};
