import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './components/PageHome';
import PageLocations from './components/PageLocations';
import PagePartners from './components/PagePartners';
import PageTeam from './components/PageTeam';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route path="/partners">
          <PagePartners />
        </Route>
        <Route path="/team">
          <PageTeam />
        </Route>
        <Route path="/locations">
          <PageLocations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
