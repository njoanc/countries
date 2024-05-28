import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountryContext = createContext();
const url = import.meta.env.VITE_COUNTRIES_API;

const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllCountries = async () => {
    try {
      const response = await axios.get(`${url}/all`);
      setCountryData(response.data);
    } catch (error) {
      setError("Failed to fetch countries");
    }
  };

  const searchCountry = async (name) => {
    try {
      const response = await axios.get(`${url}/name/${name}`);
      setCountryData(response.data);
      setError(null);
    } catch (err) {
      setError("Country not found");
    }
  };

  const filterCountriesbyRegion = async (region) => {
    try {
      const response = await axios.get(`${url}/region/${region}`);
      setCountryData(response.data);
      setError(null);
    } catch (err) {
      setError(`Failed to fetch countries in ${region}`);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countryData, error, searchCountry, filterCountriesbyRegion }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
