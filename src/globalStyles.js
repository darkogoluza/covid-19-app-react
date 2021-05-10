import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border box;
        font-family: 'Nanum Gothic', sans-serif;
    }

    body{
        background-color: #faf3f3;
    }
`;

export default GlobalStyle;
