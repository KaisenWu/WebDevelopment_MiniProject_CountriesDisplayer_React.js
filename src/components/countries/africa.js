// write your component code here
import React from "react";

import { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Country from "../country";

export default function Africa(props) {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setcountries] = useState([]);
  const [countryNumber, setCountryNumber] = useState(0);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        var countryCnt = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].region === "Africa") {
            const preparedCountry = {};
            preparedCountry.id = data[i].name.common;
            preparedCountry.name = data[i].name.common;
            preparedCountry.region = data[i].region;
            preparedCountry.population = data[i].population;
            preparedCountry.flagUrl = data[i].flags.png;
            preparedCountry.capital = data[i].capital;
            setcountries((preCountries) => [...preCountries, preparedCountry]);
            countryCnt = countryCnt + 1;
          }
        }
        setCountryNumber(countryCnt);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header countries={countryNumber} />
      {countries.map((country) => {
        return (
          <div className="wrapper">
            <ul className="card-grid">
              <li>
                <Country
                  name={country.name}
                  flag={country.flagUrl}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </li>
            </ul>
          </div>
        );
      })}
      <Footer />;
    </>
  );
}
