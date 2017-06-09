import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';

const EditTicket = ({ handleSubmit, handleChange, ticket, errors }) => (
  <form onSubmit={ handleSubmit }>
    <FormGroup controlId="title" validationState={ errors.title && 'error' }>
      <ControlLabel>Title</ControlLabel>
      <FormControl id="title" placeholder="Title" value={ ticket.title } onChange={ handleChange } />
      { errors.title && <HelpBlock>{ errors.title.message }</HelpBlock> }
    </FormGroup>

    <FormGroup controlId="description" validationState={ errors.description && 'error' }>
      <ControlLabel>Description</ControlLabel>
      <FormControl id="description" placeholder="Description" value={ ticket.description } onChange={ handleChange } componentClass="textarea" />
      { errors.description && <HelpBlock>{ errors.description.message }</HelpBlock> }
    </FormGroup>

    <FormGroup controlId="status" validationState={ errors.status && 'status' }>
      <ControlLabel>Status</ControlLabel>
      <FormControl id="status" value={ ticket.status } onChange={ handleChange } componentClass="select">
        <option value="open">Open</option>
        <option value="review">Review</option>
        <option value="closed">Closed</option>
      </FormControl>
      { errors.status && <HelpBlock>{ errors.status.message }</HelpBlock> }
    </FormGroup>

    <FormGroup>
      <Button type="submit" bsStyle="primary">Update</Button>
    </FormGroup>
  </form>
);

EditTicket.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  ticket: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditTicket;
