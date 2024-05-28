import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultsComponent from "./components/ResultsComponent";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showResults, setShowResults] = useState(true);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setShowResults(false);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
    setShowResults(true);
  };

  return (
    <div
      className={` ${
        theme === "light"
          ? "bg-[#f1f0f0]"
          : "bg-very-dark-blue-(dark-mode-background)"
      } w-full md:w-[100%] flex flex-col justify-center items-center`}
    >
      <Header />
      {showResults && <SearchBar setShowResults={setShowResults} />}
      {selectedCountry ? (
        <CountryDetail
          country={selectedCountry}
          onBackClick={handleBackClick}
        />
      ) : (
        <ResultsComponent onCountryClick={handleCountryClick} />
      )}
    </div>
  );
};

export default App;
