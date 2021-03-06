import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';

class TicketItem extends React.Component {
  renderStatus() {
    const status = this.props.ticket.status;
    let style = 'danger';

    if (status === 'open') style = 'success';
    if (status === 'review') style = 'warning';

    return style;
  }


  render() {
    const { _id, title, description, _owner, status } = this.props.ticket;
    const statusStyle = `label label-${this.renderStatus()}`;
    const url = `/tickets/${ _id }/update`;

    return (
      <Panel header={ _owner.username } bsStyle="primary">
        <span className={ statusStyle }>{ status }</span>

        <h3>{ title }</h3>
        <hr/>

        <p>{ description }</p>

        <hr/>
        <ButtonToolbar>
          <Link to={ url } className="btn btn-warning">Update</Link>
          <Button bsStyle="danger" onClick={ () => this.props.handleRemove(_id) }>Remove</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TicketItem;
