import styled from "styled-components";

export const Country = styled.li`
  list-style: none;
  width: 100%;
  height: fit-content;
  background: linear-gradient(to right, #a8ff78, #78ffd6);
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
`;

export const Title = styled.h1`
  color: #1c1f3b;
  text-align: center;
  font-size: 1em;
`;
