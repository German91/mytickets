import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const App = ({ children }) => (
  <Grid>
    <div>
      { children }
    </div>

    <Alert stack={{limit: 3}} />
  </Grid>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
