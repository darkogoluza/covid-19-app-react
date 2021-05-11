import React, { useState, useEffect } from "react";
import {
  GraphContainer,
  GraphsList,
  Title,
  CountryName,
  Button,
} from "./SingleCountryElements";
import Loading from "../../components/Loading";
import Graph from "../../components/Graph";
import { useParams } from "react-router-dom";
import { animated, Spring } from "react-spring";

const SingelCountry = () => {
  const [statusData, setStatusData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  const getAllDaysStatus = async (countrySlug) => {
    if (!slug) return;

    setIsLoading(true);

    const res = await fetch(
      `https://api.covid19api.com/dayone/country/${countrySlug}`
    );

    const data = await res.json();

    setStatusData(data);
    setIsLoading(false);
  };

  const getConfirmedData = () => {
    const graphData = [
      { id: "Confirmed Cases", color: "hsl(100, 70%, 50%)", data: [] },
    ];
    const confirmedGraph = statusData.map((day) => {
      const graph = {
        y: day.Confirmed,
        x: day.Date,
      };

      return graph;
    });

    graphData[0].data = confirmedGraph;

    return graphData;
  };
  const getDeathsData = () => {
    const graphData = [{ id: "Deaths", color: "#da7f8f", data: [] }];
    const confirmedGraph = statusData.map((day) => {
      const graph = {
        y: day.Deaths,
        x: day.Date,
      };

      return graph;
    });

    graphData[0].data = confirmedGraph;

    return graphData;
  };
  const getRecoveredData = () => {
    const graphData = [{ id: "Recovered Cases", data: [] }];
    const confirmedGraph = statusData.map((day) => {
      const graph = {
        y: day.Recovered,
        x: day.Date,
      };

      return graph;
    });

    graphData[0].data = confirmedGraph;

    return graphData;
  };
  const getActiveData = () => {
    const graphData = [{ id: "Active Cases", data: [] }];
    const confirmedGraph = statusData.map((day) => {
      const graph = {
        y: day.Active,
        x: day.Date,
      };

      return graph;
    });

    graphData[0].data = confirmedGraph;

    return graphData;
  };

  useEffect(() => {
    getAllDaysStatus(slug);
  }, []);

  if (isLoading) return <Loading>Loading...</Loading>;
  else
    return (
      <>
        <Button to="/">Go Back</Button>
        <CountryName>
          {statusData.length > 0 && statusData[0].Country}
        </CountryName>
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
              <GraphsList>
                <GraphContainer>
                  <Title>Confirmed Cases</Title>
                  <Graph data={getConfirmedData()} />
                </GraphContainer>
                <GraphContainer>
                  <Title>Recovered</Title>
                  <Graph data={getDeathsData()} />
                </GraphContainer>
                <GraphContainer>
                  <Title>Deaths</Title>
                  <Graph data={getConfirmedData()} />
                </GraphContainer>
                <GraphContainer>
                  <Title>ActiveCases</Title>
                  <Graph data={getActiveData()} />
                </GraphContainer>
              </GraphsList>
            </animated.div>
          )}
        </Spring>
      </>
    );
};

export default SingelCountry;
