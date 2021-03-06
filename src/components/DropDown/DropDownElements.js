import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  position: relative;
  margin-left: 2rem;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.75em;

  color: ${(props) => props.theme.textPrimary};

  outline: none;

  cursor: pointer;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 1);
  }
`;

export const List = styled.ul`
  margin-top: 0.25rem;
  border-radius: 5px;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

export const Item = styled.button`
  padding: 0.25rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};

  color: ${(props) => props.theme.textPrimary};

  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;

  &:hover {
    filter: saturate(1.5);
  }

  &:nth-child(even) {
    background-color: ${(props) => props.theme.secundary};
    &:hover {
      filter: saturate(2);
    }
  }
`;
