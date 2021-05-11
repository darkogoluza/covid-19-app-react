import React, { useState, useEffect } from "react";
import { Main, SummaryList } from "./SummaryElements";
import CountryCard from "../CountryCard";
import Loading from "../Loading";
import { useGlobalContext } from "../../context";

const Summary = () => {
  const url = "https://api.covid19api.com/summary";
  const [summaryData, setSummaryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { searchValue, sortBy } = useGlobalContext();

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
          return newCountry;
        }),
      });
  }, [searchValue]);

  useEffect(() => {
    if (summaryData == null || summaryData.Countries == null) return;

    switch (sortBy) {
      case "Confirmed":
        setSummaryData({
          ...summaryData,
          Countries: summaryData.Countries.sort(
            (a, b) => b.TotalConfirmed - a.TotalConfirmed
          ),
        });
        break;
      case "Deaths":
        setSummaryData({
          ...summaryData,
          Countries: summaryData.Countries.sort(
            (a, b) => b.TotalDeaths - a.TotalDeaths
          ),
        });
        break;
      case "Recovered":
        setSummaryData({
          ...summaryData,
          Countries: summaryData.Countries.sort(
            (a, b) => b.TotalRecovered - a.TotalRecovered
          ),
        });
        break;
      case "Name":
        setSummaryData({
          ...summaryData,
          Countries: summaryData.Countries.sort(
            (a, b) => b.Country < a.Country
          ),
        });
        break;
    }
  }, [sortBy]);

  return (
    <Main>
      {isLoading ? (
        <Loading />
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
