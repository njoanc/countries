import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import { ThemeContext } from "../context/ThemeContext";

const ResultsComponent = ({ onCountryClick }) => {
  const { countryData, error } = useContext(CountryContext);
  const { theme } = useContext(ThemeContext);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-4 md:mt-[0.1rem] md:px-10">
      {countryData.map((country) => (
        <div
          key={country.cca3}
          className={`rounded cursor-pointer mx-10 pb-5 md:mx-[0.25rem]  ${
            theme === "light"
              ? "bg-white-(dark-mode-text)"
              : "bg-dark-blue-(dark-mode-elements)"
          }`}
          onClick={() => onCountryClick(country)}
        >
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-40 object-cover mb-1"
          />
          <div
            className={`mx-7 text-sm ${
              theme === "light"
                ? "text-very-dark-blue-(light-mode-text)"
                : "text-white-(dark-mode-text)"
            }`}
          >
            <h1 className="text-lg font-extrabold mt-4">
              {country.name.common}
            </h1>
            <div className="mt-2">
              <p>
                <span className="font-semibold">Population:</span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>

              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsComponent;
