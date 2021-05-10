import React from "react";
import { Country, Flag, Title } from "./CountryCard";

const CountryCard = ({ Country: countryName, CountryCode }) => {
  return (
    <Country>
      <Flag
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${CountryCode}.svg`}
      />
      <Title>{countryName}</Title>
    </Country>
  );
};

export default CountryCard;
