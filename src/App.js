import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Summary from "./components/Summary";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Summary />
    </>
  );
};

export default App;
