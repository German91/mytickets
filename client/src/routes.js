import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';

const Routes = (
  <Router history={ browserHistory }>
    <Router path="/" component={ App }>
      <IndexRoute name="welcome" component={ Welcome } />
    </Router>

    <Route name="not-found" path="*" component={ NotFound } />
  </Router>
);

export default Routes;
