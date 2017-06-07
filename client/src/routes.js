import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import TicketsPage from './containers/TicketsPage';
import AddTicket from './containers/AddTicket';
import NotFound from './components/NotFound';
import Middlewares from './utils/Middlewares';

const Routes = (
  <Router history={ browserHistory }>

    {/* Public Routes */}
    <Router path="/" component={ App }>
      <IndexRoute name="login" component={ LoginPage } />
      <Route name="signup" path="/signup" component={ SignupPage } />
    </Router>

    {/* Protected Routes */}
    <Router path="/dashboard" component={ Dashboard } onEnter={ Middlewares.isLogged }>
      <IndexRoute name="tickets" component={ TicketsPage } />
      <Route name="creat-ticket" path="/tickets/add" component={ AddTicket } />
    </Router>

    <Route name="not-found" path="*" component={ NotFound } />
  </Router>
);

export default Routes;
