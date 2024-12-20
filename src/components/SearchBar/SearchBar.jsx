import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Notify parent component of search query changes
  };

  const handleClearSearch = () => {
    setQuery("");
    onSearch(""); // Reset search results
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {query && (
        <button onClick={handleClearSearch} className={styles.clearButton}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
