import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';
import Calculator from './Calculator';

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChuckName: 'DynamicPage' */ './DynamicPage'),
  { LoadingComponent: Loading }
);

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName: 'NoMatch' */ './NoMatch'),
  { LoadingComponent: Loading }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dynamic' component={AsyncDynamicPage} />
          <Route exact path='/calculator' component={Calculator} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;