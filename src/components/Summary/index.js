import React, { useState, useEffect } from "react";
import { Main, SummaryList, Loading } from "./SummaryElements";
import CountryCard from "../CountryCard";
import { useGlobalContext } from "../../context";

const Summary = () => {
  const url = "https://api.covid19api.com/summary";
  const [summaryData, setSummaryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { searchValue } = useGlobalContext();

  const getSummeryData = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setSummaryData({
      ...data,
      Countries: data.Countries.map((country) => {
        const newCountry = { ...country };
        newCountry.hide = false;
        return newCountry;
      }),
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getSummeryData();
  }, []);

  useEffect(() => {
    summaryData.Countries !== undefined &&
      setSummaryData({
        ...summaryData,
        Countries: summaryData.Countries.map((country) => {
          const newCountry = { ...country };
          const regex = new RegExp(`^${searchValue}`, "gi");
          newCountry.hide =
            searchValue === "" ? false : !newCountry.Country.match(regex);
          console.log(newCountry.Country.includes(searchValue));
          return newCountry;
        }),
      });
  }, [searchValue]);

  return (
    <Main>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <SummaryList>
          {summaryData.Countries &&
            summaryData.Countries.map((country) => {
              return (
                !country.hide && <CountryCard key={country.ID} {...country} />
              );
            })}
        </SummaryList>
      )}
    </Main>
  );
};

export default Summary;
