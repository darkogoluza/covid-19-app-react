import React, { useState, useEffect } from "react";
import { Main, SummaryList, Loading } from "./SummaryElements";
import CountryCard from "../CountryCard";

const Summary = () => {
  const url = "https://api.covid19api.com/summary";
  const [summaryData, setSummaryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getSummeryData = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setSummaryData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getSummeryData();
  }, []);

  return (
    <Main>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <SummaryList>
          {summaryData.Countries &&
            summaryData.Countries.map((country) => {
              return <CountryCard key={country.ID} {...country} />;
            })}
        </SummaryList>
      )}
    </Main>
  );
};

export default Summary;
