import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

class TicketItem extends React.Component {
  renderStatus() {
    const status = this.props.ticket.status;

    switch (status) {
      case 'open':
        return 'success';
        break;
      case 'review':
        return 'warning';
        break;
      default:
        return 'danger';
    }
  }

  render() {
    const { title, description, _owner, status } = this.props.ticket;
    const statusStyle = `label label-${this.renderStatus()}`;

    return (
      <Panel header={ _owner.username } bsStyle="primary">
        <span className={ statusStyle }>{ status }</span>

        <h3>{ title }</h3>
        <hr/>

        <p>{ description }</p>
      </Panel>
    );
  }
}

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default TicketItem;
