import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:slug">
            <SingleCountry />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
