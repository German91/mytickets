import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ handleChange }) => (
  <FormGroup>
    <FormControl id="search" placeholder="Search by any term" onChange={ handleChange } />
  </FormGroup>
);

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
