import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

import SignupForm from '../components/signup/SignupForm';
import { signup } from '../api/authApi';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    signup({ email, password, username }, (err) => {
      if (err) {
        this.setState({ error: err });
      }
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <h1 className="text-center">Sign Up</h1>
          <hr/>

          { this.state.error && <Alert bsStyle="danger">{ this.state.error }</Alert> }

          <SignupForm handleSubmit={ this.handleSubmit } />
        </Col>
      </Row>
    );
  }
}

export default SignupPage;
