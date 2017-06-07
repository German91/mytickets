import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

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
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
