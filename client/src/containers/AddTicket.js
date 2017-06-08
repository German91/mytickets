import React from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, Alert } from 'react-bootstrap';

import { addTicket } from '../api/ticketApi';
import NewTicket from '../components/tickets/NewTicket';

class AddTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: {} };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    addTicket({ title, description }, (err, response) => {
      if (err) {
        this.setState({ errors: err.response.data.errors });
      } else {
        browserHistory.push('/dashboard');
      }
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <h1>Create new ticket</h1>
          <hr/>

          { this.state.error && <Alert bsStyle="danger">{ this.state.error }</Alert> }
          <NewTicket handleSubmit={ this.handleSubmit } errors={ this.state.errors } />
        </Col>
      </Row>
    );
  }
}

export default AddTicket;
