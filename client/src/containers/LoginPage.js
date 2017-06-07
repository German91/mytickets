import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router';

import LoginForm from '../components/auth/LoginForm';
import { login } from '../api/authApi';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login({ email, password }, (err, token) => {
      if (err) {
        this.setState({ error: err.response.data });
      }
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <h1 className="text-center">Login</h1>
          <hr/>

          { this.state.error && <Alert bsStyle="danger">{ this.state.error }</Alert> }

          <LoginForm handleSubmit={ this.handleSubmit } />

          <div className="text-center">
            <Link to="/signup">Create an account</Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default LoginPage;
