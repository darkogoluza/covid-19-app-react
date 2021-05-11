import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 1rem 0;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};

  text-decoration: none;
  width: 200px;
  display: block;
  margin: 2rem auto;

  text-align: center;

  cursor: pointer;

  border: none;
  outline: none;

  transition: 0.2s all ease-in-out;

  &:hover {
    border: 2px solid #a7bbc7;
    background-color: transparent;
    color: ${(props) => props.theme.primary};
  }
`;
export const CountryName = styled.h1`
  text-align: center;
  font-size: 2em;
  color: ${(props) => props.theme.textPrimary};
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
export const GraphsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 6rem 2rem;
  max-width: 1400px;
  margin: 4rem auto;
  margin-bottom: 8rem;
  padding: 0 2rem;
`;

export const GraphContainer = styled.div`
  height: 500px;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textPrimary};
`;
