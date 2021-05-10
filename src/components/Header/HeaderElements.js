import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #e1e5ea;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  height: 64px;
  width: 100%;
`;

export const Form = styled.form`
  max-width: 600px;
  margin: auto;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 42px;
  border-radius: 2rem;
  padding-left: 1rem;
  color: #faf3f3;
  background-color: #a7bbc7;

  border: none;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 0.5rem;

  border: none;
  outline: none;

  cursor: pointer;
  color: #faf3f3;
  background-color: #a7bbc7;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
`;
