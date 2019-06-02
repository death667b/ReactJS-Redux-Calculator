import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Loading from './Loading';
import Calculator from './Calculator';

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName: 'NoMatch' */ './NoMatch'),
  { LoadingComponent: Loading }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Calculator} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;