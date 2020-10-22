import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select, Menu } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const _countries = data.map((country) => (
            {
            name: country.country,
            value: country.countryInfo.iso2,
          }
          
          ));
          setCountries(_countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            {/* loop through all the countries and show
             drop down list of options*/}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title and Select input dropdown field*/}

      {/* InfoBoxs*/}
      {/* InfoBoxs*/}
      {/* InfoBoxs*/}

      {/*Table */}
      {/* Graph*/}

      {/* Map*/}
    </div>
  );
}

export default App;
