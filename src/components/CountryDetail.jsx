import { IoIosArrowRoundBack } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CountryDetail = ({ country, onBackClick }) => {
  const { theme } = useContext(ThemeContext);
  if (!country) return <div>Select a country to see details</div>;

  return (
    <div className="mt-20 mx-10 md:flex  md:h-[55rem]">
      <div className="md:pl-[3.5rem] md:w-2/3">
        <button
          className="text-sm w-20 mt-10 rounded-full"
          onClick={onBackClick}
        >
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
          className="w-full h-40 object-cover mb-1 mt-20 md:h-1/2 md:mt-10 md:mr-[2rem]"
        />
      </div>
      <div
        className={` ${
          theme === "light"
            ? "text-very-dark-blue-(light-mode-text)"
            : "text-white-(dark-mode-text)"
        }  `}
      >
        <div className="md:flex md:flex-row md:gap-15 md:mr-5 text-lg font-bold  md:pt-[9rem] md:pl-[5rem]">
          <div className="py-5 md:pt-[0.05rem] md:px-6">
            <h1
              className={`text-lg font-extrabold my-7 md:pb-[0.05rem] ${
                theme === "light"
                  ? "text-very-dark-blue-(light-mode-text)"
                  : "text-white-(dark-mode-text)"
              }`}
            >
              {country.name.common}
            </h1>
            <p className="mb-2 text-sm">
              <span className="font-semibold">Native name:</span>
              {country.name.official}
            </p>
            <p className="my-2 text-sm">
              <span className="font-semibold">Population:</span>
              {country.population.toLocaleString()}
            </p>
            <p className="my-2 text-sm">
              <span className="font-semibold">Sub Region:</span>
              {country.subregion}
            </p>

            <p className="mt-2 text-sm">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>
          <div className="mt-[1rem] md:pt-[4rem] text-sm">
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
        </div>
        <div className=" mt-5 md:flex-col md:ml-[7rem] md:mt-[2rem] text-sm">
          <h2>
            <span className="font-bold">Border countries:</span>
          </h2>
          <div>
            {country.borders.map((border) => (
              <button
                key={border}
                className={`text-sm mt-3 px-1 py-1 mx-2 w-20 mb-1 rounded-md py-[0.20rem]${
                  theme === "light"
                    ? "text-very-dark-blue-(light-mode-text) bg-very-light-gray-(light-mode-background)"
                    : "text-white-(dark-mode-text) bg-dark-blue-(dark-mode-elements)"
                }`}
                onClick={() => handleBorderClick(border)}
              >
                {border.charAt(0).toUpperCase() + border.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
