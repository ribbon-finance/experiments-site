import React from "react";
import Navigation from "./Navigation";
import Experiments from "./Experiments";
import UpOnlyWBTC from "./containers/UpOnlyWBTC";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Experiments} />
      <Route path="/up-only" component={UpOnlyWBTC} />
    </Router>
  );
};

export default App;
