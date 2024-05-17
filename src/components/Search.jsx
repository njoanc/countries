import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";
import Dropdown from "./Dropdown";
const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Search = () => {
  const { theme } = useContext(ThemeContext);
  const handleSelect = (option) => {
    console.log("Filter by Region:", option);
  };

  return (
    <div className="w-[95%] md:flex justify-between">
      <form
        className={`py-2 rounded-md md:w-1/2 my-[2rem] ${
          theme === "light" ? "bg-[white]" : "bg-dark-blue-(dark-mode-elements)"
        }`}
      >
        <div className="flex items-center gap-2 ml-5 p-1">
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
            } w-[30rem] h-[2.5rem]`}
            type="search"
            placeholder="Search for a country..."
          />
        </div>
      </form>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default Search;
