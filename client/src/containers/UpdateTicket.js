import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Alert from 'react-s-alert';

import { viewTicket, updateTicket } from '../api/ticketApi';
import EditTicket from '../components/tickets/EditTicket';

class UpdateTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      errors: {},
      ticket: {
        title: '',
        description: '',
        status: '',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({ id: this.props.params.id });
  }

  componentDidMount() {
    viewTicket(this.state.id, (err, ticket) => {
      if (err) {
        console.log(err);
      } else {
        const ticketFields = {
          title: ticket.title,
          description: ticket.description,
          status: ticket.status,
        };

        this.setState({ ticket: ticketFields });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const id = this.state.id;
    const title = this.state.ticket.title;
    const description = this.state.ticket.description;
    const status = this.state.ticket.status;

    updateTicket(id, { title, description, status }, (err, response) => {
      if (err) {
        this.setState({ errors: err.response.data.errors });
      } else {
        Alert.success(response, { position: 'top-right', effect: 'slide', timeout: 5000 });
      }
    });
  }

  handleChange(e) {
    let ticket = this.state.ticket;
    ticket[e.target.id] = e.target.value;

    this.setState({ ticket });
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <h1>Update Ticket</h1>
          <hr/>

          <EditTicket
            ticket={ this.state.ticket }
            errors={ this.state.errors }
            handleSubmit={ this.handleSubmit }
            handleChange={ this.handleChange } />
        </Col>
      </Row>
    );
  }
}

export default UpdateTicket;
