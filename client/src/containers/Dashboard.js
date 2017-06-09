import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import { profile } from '../api/userApi';
import Navigation from '../components/Navigation';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { profile: '' };
  }

  componentDidMount() {
    profile((err, profile) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ profile });
      }
    });
  }

  render() {
    return (
      <div>
        { this.state.profile && <Navigation profile={ this.state.profile } /> }

        <Grid>
          { this.props.children }
        </Grid>

        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
