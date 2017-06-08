import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { viewTicket } from '../api/ticketApi';

class UpdateTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      error: '',
      ticket: {},
      ticket: {
        title: '',
        description: '',
        status: '',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ id: this.props.params.id });
  }

  componentDidMount() {
    viewTicket(this.state.id, (err, ticket) => {
      if (err) {
        console.log(err);
        this.setState({ error: err });
      } else {
        this.setState({ ticket });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const title = this.state.ticket.title;
    const description = this.state.ticket.description;
    const status = this.state.ticket.status;

    console.log(title);
    console.log(description);
    console.log(status);
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <h1>Update Ticket</h1>
          <hr/>

        </Col>
      </Row>
    );
  }
}

export default UpdateTicket;
