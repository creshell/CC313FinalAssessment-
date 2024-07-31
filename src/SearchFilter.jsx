// src/components/SearchFilter.js
import React, { useState } from "react";

const SearchFilter = ({ setFilteredCitizens, citizensData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = citizensData.filter((citizen) => {
      return (
        citizen.name.toLowerCase().includes(query) ||
        citizen.address.toLowerCase().includes(query)
      );
    });
    setFilteredCitizens(filtered);
    setSearchQuery(query);
  };

  return (
    <div>
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search citizens"
      />
    </div>
  );
};

export default SearchFilter;
