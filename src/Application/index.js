import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './home';
import CountryDetails from './countrydetails'

const ReactRouterSetup = () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/countrydetails/:name' children={<CountryDetails/>}>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
