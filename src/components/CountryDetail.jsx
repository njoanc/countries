import { IoIosArrowRoundBack } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CountryDetail = ({ country, onBackClick }) => {
  const { theme } = useContext(ThemeContext);
  if (!country) return <div>Select a country to see details</div>;

  return (
    <div className="mt-20">
      <button className="text-sm w-20 mt-10" onClick={onBackClick}>
        <span
          className={`flex items-center gap-2 rounded-md py-[0.20rem] ${
            theme === "light"
              ? "text-very-dark-blue-(light-mode-text) bg-very-light-gray-(light-mode-background)"
              : "text-white-(dark-mode-text) bg-dark-blue-(dark-mode-elements)"
          }`}
        >
          <IoIosArrowRoundBack className="font-extrabold" /> <span>Back</span>
        </span>
      </button>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-full h-40 object-cover mb-1 mt-20"
      />
      <h1
        className={`text-lg font-extrabold mt-7 ${
          theme === "light"
            ? "text-very-dark-blue-(light-mode-text)"
            : "text-white-(dark-mode-text)"
        }`}
      >
        {country.name.common}
      </h1>
      <div
        className={`text-lg font-bold ${
          theme === "light"
            ? "text-very-dark-blue-(light-mode-text)"
            : "text-white-(dark-mode-text)"
        }`}
      >
        <div className="py-5">
          <p className="mb-2">
            <span className="font-semibold">Native name:</span>
            {country.name.official}
          </p>
          <p className="my-2 ">
            <span className="font-semibold">Population:</span>
            {country.population.toLocaleString()}
          </p>
          <p className="my-2">
            <span className="font-semibold">Sub Region:</span>
            {country.subregion}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
        <div className="mt-[1rem]">
          <p>
            <span className="font-semibold">Top Level Domains:</span>
            {country.tld.map((tld) => tld).join(", ")}
          </p>

          <p className="my-2">
            <span className="font-semibold">Currencies:</span>{" "}
            {Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(", ")}
          </p>
          <p className="my-2">
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(country.languages).join(", ")}
          </p>
        </div>
        <div className="mt-[2rem]">
          <h2 className="mb-[0.5rem]">
            <span className="font-bold">Border countries:</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {country.borders.map((border) => (
              <button
                key={border}
                className={`text-sm font-extrabold mt-7 px-5  w-20 mb-2 rounded-md py-[0.20rem] ${
                  theme === "light"
                    ? "text-very-dark-blue-(light-mode-text) bg-very-light-gray-(light-mode-background)"
                    : "text-white-(dark-mode-text) bg-dark-blue-(dark-mode-elements)"
                }`}
                onClick={() => handleBorderClick(border)}
              >
                {border}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
