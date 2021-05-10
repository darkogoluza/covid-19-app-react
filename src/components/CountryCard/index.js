import React from "react";
import { Country, Flag, Title, Info, Stat } from "./CountryCard";

const CountryCard = ({
  Country: countryName,
  CountryCode,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
}) => {
  return (
    <Country>
      <Flag
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${CountryCode}.svg`}
      />
      <Info>
        <Title>{countryName}</Title>
        <Stat>
          Total Confirmed Cases: <span>{TotalConfirmed}</span>
        </Stat>
        <Stat>
          Total Deaths: <span>{TotalDeaths}</span>
        </Stat>
        <Stat>
          Total Recovered: <span>{TotalRecovered}</span>
        </Stat>
      </Info>
    </Country>
  );
};

export default CountryCard;
