import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const SignupForm = ({handleSubmit}) => (
  <form onSubmit={ handleSubmit }>
    <FormGroup controlId="email">
      <ControlLabel>Email Address</ControlLabel>
      <FormControl id="email" type="email" placeholder="Email Address" />
    </FormGroup>

    <FormGroup controlId="password">
      <ControlLabel>Password</ControlLabel>
      <FormControl id="password" type="password" placeholder="Password" />
    </FormGroup>

    <FormGroup controlId="username">
      <ControlLabel>Username</ControlLabel>
      <FormControl id="username" type="username" placeholder="Username" />
    </FormGroup>

    <FormGroup>
      <Button type="submit" bsStyle="primary">Sign Up</Button>
    </FormGroup>
  </form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SignupForm;
