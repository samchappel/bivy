import React from "react";

function Search({ searchTerm, updateSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search BLM Sites:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;