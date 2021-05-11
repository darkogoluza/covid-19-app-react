import React from "react";
import { Country, Flag, Title, Info, Stat } from "./CountryCardElements";
import { animated, Spring } from "react-spring";

const CountryCard = ({
  Country: countryName,
  CountryCode,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
  Slug,
}) => {
  return (
    <Spring
      from={{ opacity: 0, y: 80 }}
      to={{ opacity: 1, y: 0 }}
      config={{
        duration: 200,
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
        easing: (t) => t,
      }}
    >
      {(props) => (
        <animated.div style={props}>
          <Country to={`country/${Slug}`}>
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
        </animated.div>
      )}
    </Spring>
  );
};

export default CountryCard;
