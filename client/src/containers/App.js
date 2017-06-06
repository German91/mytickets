import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

const App = ({ children }) => (
  <Grid>
    { children }
  </Grid>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
