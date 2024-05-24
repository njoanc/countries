const CountryDetail = ({ country }) => {
  if (!country) return <div>Select a country to see details</div>;

  return (
    <div className="flex flex-col w-full px-5">
      <div className="h-10">
        <button className="pt-1">Back</button>
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-40 object-cover mb-1"
        />
        <h1 className="text-lg font-extrabold mt-4">{country.name.common}</h1>
        <div className="mt-2">
          <p>
            <span className="font-semibold">Native name:</span>
            {country.name.official}
          </p>
          <p>
            <span className="font-semibold">Population:</span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Sub Region:</span>{" "}
            {country.subregion}
          </p>

          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <div>
            <p>
              <span className="font-semibold">Top Level Domains:</span>
              {Object.values(country.tld)}
            </p>
            <p>
              <span>Currencies:</span>{" "}
              {Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            </p>
            <p>Languages: {Object.values(country.languages).join(", ")}</p>
          </div>
          <div>
            <h2>Border countries:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
