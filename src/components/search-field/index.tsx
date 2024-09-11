import React, { useState } from "react";
import "./style.css";
import { useSearch } from "../../context/SearchContext";

const SearchField: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setSearchTerm } = useSearch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search product"
        className="search-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
};

export default SearchField;
