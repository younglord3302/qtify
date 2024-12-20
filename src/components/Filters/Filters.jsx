import React, { useState } from "react";
import styles from "./Filters.module.css";

function Filter({ filters = [], onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters); // Notify parent about filter changes
  };

  return (
    <div className={styles.filterContainer}>
      <h3>Filter by Genre</h3>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div
            key={filter}
            className={`${styles.filter} ${
              selectedFilters.includes(filter) ? styles.active : ""
            }`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
