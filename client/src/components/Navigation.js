import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import Auth from '../utils/Auth';
import { logout } from '../api/userApi';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    logout((err, done) => {
      if (err) {
        console.log(err);
      } else {
        Auth.destroyToken();
      }
    });
  }

  render() {
    const { username } = this.props.profile;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/dashboard">My Tickets</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey="active">
            <IndexLinkContainer to="/dashboard">
              <NavItem eventKey={1}>Tickets</NavItem>
            </IndexLinkContainer>

            <LinkContainer to="/tickets/add">
              <NavItem eventKey={2}>New Ticket</NavItem>
            </LinkContainer>
          </Nav>

          <Nav pullRight>
            <NavDropdown eventKey={3} title={ username || '' } id="profile-dropdown">
              <MenuItem eventKey={3.1} onClick={ this.handleLogout }>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Navigation;
