import React from "react";
import Navigation from './Navigation';
import Experiments from './Experiments';
// import ExperimentsList from './ExperimentsList';
import ExperimentDetail from './ExperimentDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={ Experiments } />
      <Route path="/up-only" component={ ExperimentDetail } />
    </Router>
  );
};

export default App;
