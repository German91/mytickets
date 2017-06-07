import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const NewTicket = ({ handleSubmit }) => (
  <form onSubmit={ handleSubmit }>
    <FormGroup controlId="title">
      <ControlLabel>Title</ControlLabel>
      <FormControl id="title" placeholder="Title" />
    </FormGroup>

    <FormGroup controlId="description">
      <ControlLabel>Description</ControlLabel>
      <FormControl id="description" placeholder="Description" componentClass="textarea" />
    </FormGroup>

    <FormGroup controlId="title">
      <Button type="submit" bsStyle="primary">Create Ticket</Button>
    </FormGroup>
  </form>
);

NewTicket.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default NewTicket;
