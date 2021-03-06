import styled from "styled-components";
import { Link } from "react-router-dom";

export const Country = styled(Link)`
  list-style: none;
  width: 100%;
  height: 150px;
  background-color: ${(props) => props.theme.secundary};
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;

  text-decoration: none;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const Flag = styled.img`
  width: auto;
  height: 100%;
  background-size: cover;
  border-radius: 2rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.textPrimary};
  text-align: center;
  font-size: 1.5em;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

export const Stat = styled.h3`
  text-align: left;
  padding: 0.25rem 0;
  font-size: 0.75em;
  color: ${(props) => props.theme.textSecundary};

  span {
    color: ${(props) => props.theme.textPrimary};
    font-size: 0.85em;
  }
`;

export const Info = styled.div`
  flex-grow: 1;
`;
