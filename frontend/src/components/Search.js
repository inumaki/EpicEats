import { filterData } from "../utils/helper";
import { useState } from "react";
const Search = ({ setFilteredRestaurant, allRestaurant }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = () => {
    setFilteredRestaurant(filterData(allRestaurant, searchText));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };
  return (
    <div class="max-w-md mx-auto sticky top-[112px] m-1">
      <div class="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-gray-100 overflow-hidden">
        <div
          class="grid place-items-center h-full w-12 text-gray-500"
          onClick={handleChange}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          class="h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-100"
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Search;
