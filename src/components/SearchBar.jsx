import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Dropdown from "./Dropdown";
import { CountryContext } from "../context/CountryContext";

const options = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

const SearchBar = ({ setShowResults }) => {
  const { theme } = useContext(ThemeContext);
  const { searchCountry, filterCountriesbyRegion } = useContext(CountryContext);
  const [searchData, setSearchData] = useState("");

  const handleInput = (e) => {
    setSearchData(e.target.value);
    setShowResults(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchData) {
      searchCountry(searchData);
    } else {
      alert("Enter a country name");
    }
  };
  const handleSelect = (option) => {
    if (option === "All") {
      setShowResults(true);
    } else {
      filterCountriesbyRegion(option);
    }
  };

  return (
    <div className="w-[95%] pr-1 md:flex md:justify-between mt-20">
      <form
        onSubmit={handleSubmit}
        className={`my-[2rem] rounded-md md:my-[2.5rem] ${
          theme === "light" ? "bg-[white]" : "bg-dark-blue-(dark-mode-elements)"
        }`}
      >
        <div className="flex items-center gap-2 ml-5 p-1 text-sm">
          <CiSearch
            className={`${
              theme === "light"
                ? "text-very-dark-blue-(light-mode-text)"
                : "text-white-(dark-mode-text)"
            }`}
          />
          <input
            className={`${
              theme === "light"
                ? "bg-white text-very-dark-blue-(light-mode-text)"
                : "bg-dark-blue-(dark-mode-elements) text-white-(dark-mode-text)"
            } w-[30rem] h-[2.5rem] focus:outline-none`}
            type="search"
            value={searchData}
            onChange={handleInput}
            placeholder="Search for a country..."
          />
        </div>
      </form>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default SearchBar;
