import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #e1e5ea;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  height: 64px;
  width: 100%;
`;

export const Form = styled.div`
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
