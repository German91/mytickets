import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FlipMove from 'react-flip-move';

import { getTickets } from '../api/ticketApi';
import TicketItem from '../components/tickets/TicketItem';

class TicketsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tickets: [] };
  }

  componentDidMount() {
    getTickets((err, tickets) => {
      if (err) {
        console.log(err);
      } else {
        console.log(tickets);
        this.setState({ tickets });
      }
    });
  }

  renderTickets() {
    if (this.state.tickets.length) {
      return this.state.tickets.map((ticket, index) => {
        return <TicketItem key={ index } ticket={ ticket } />
      });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={4}>
            <h1>My Tickets</h1>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <FlipMove>{ this.renderTickets() }</FlipMove>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TicketsPage;
