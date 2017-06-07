import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import NotFound from './components/NotFound';
import SignupPage from './containers/SignupPage';

const Routes = (
  <Router history={ browserHistory }>
    <Router path="/" component={ App }>
      <IndexRoute name="signup" component={ SignupPage } />
    </Router>

    <Route name="not-found" path="*" component={ NotFound } />
  </Router>
);

export default Routes;
