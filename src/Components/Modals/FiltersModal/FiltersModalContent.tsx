import { FiltersModalCategoryList } from "./FiltersModalCategoryList.tsx";

export const FiltersModalContent = () => {
  return (
    <>
      <p className="margin-top">
        Filter events. If no filter is selected, all datapoints are displayed.
      </p>
      <div className="filters-modal-content">
        <div className="filter-category">
          <p className="margin-top filter-category-name">
            Type of area affected
          </p>
          <FiltersModalCategoryList category="type_of_area_affected" />
        </div>
        <div className="filter-category">
          <p className="margin-top filter-category-name">Weapon system</p>
          <FiltersModalCategoryList category="weapon_system" />
        </div>
      </div>
    </>
  );
};
