import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FlipMove from 'react-flip-move';

import { getTickets, removeTicket } from '../api/ticketApi';
import TicketItem from '../components/tickets/TicketItem';

class TicketsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tickets: [] };

    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    getTickets((err, tickets) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ tickets });
      }
    });
  }

  handleRemove(id) {
    removeTicket(id, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        let index = 0;
        const tickets = this.state.tickets;

        for (let i in tickets) {
          if (tickets[i]._id === id) index = i;
        }

        if (index > -1) {
          tickets.splice(index, 1);

          this.setState({ tickets });
        }
      }
    });
  }

  renderTickets() {
    if (this.state.tickets.length) {
      return this.state.tickets.map((ticket, index) => {
        return <TicketItem key={ index } ticket={ ticket } handleRemove={ this.handleRemove } />
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
