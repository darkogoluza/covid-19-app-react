import React from "react";
import { useParams } from "react-router-dom";

const SingelCountry = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default SingelCountry;
