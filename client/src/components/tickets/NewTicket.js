import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

const NewTicket = ({ handleSubmit, errors }) => (
  <form onSubmit={ handleSubmit }>
     <FormGroup controlId="title" validationState={ errors.title && 'error' }>
       <ControlLabel>Title</ControlLabel>
       <FormControl id="title" placeholder="Title" />
       { errors.title && <HelpBlock>{ errors.title.message }</HelpBlock> }
     </FormGroup>

     <FormGroup controlId="description" validationState={ errors.description && 'error' }>
       <ControlLabel>Description</ControlLabel>
       <FormControl id="description" placeholder="Description" componentClass="textarea" />
       { errors.description && <HelpBlock>{ errors.description.message }</HelpBlock> }
     </FormGroup>

     <FormGroup controlId="title">
       <Button type="submit" bsStyle="primary">Create Ticket</Button>
     </FormGroup>
   </form>
);

NewTicket.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default NewTicket;
