import { CategoryList } from "./CategoryList.tsx";

export const Content = () => {
  return (
    <>
      <p className="margin-top">
        Filter events. If no filter is selected, all datapoints are displayed.
      </p>
      <div className="flex-container gap-lg">
        <div className="filter-category">
          <p className="margin-top filter-category-name">
            Type of area affected
          </p>
          <CategoryList category="type_of_area_affected" />
        </div>
        <div className="filter-category">
          <p className="margin-top filter-category-name">Weapon system</p>
          <CategoryList category="weapon_system" />
        </div>
      </div>
    </>
  );
};
