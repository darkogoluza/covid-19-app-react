import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.secundary};
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  height: 64px;
  width: 100%;
`;

export const Form = styled.div`
  max-width: 900px;
  height: 100%;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 42px;
  border-radius: 2rem;
  padding-left: 1rem;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.primary};

  border: none;
  outline: none;
`;

export const ThemeButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  margin-right: 2rem;
  border-radius: 0.5rem;

  border: none;
  outline: none;

  cursor: pointer;

  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.primary};
    border: 2px solid ${(props) => props.theme.primary};
  }
`;
