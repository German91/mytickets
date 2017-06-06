import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const NotFound = () => (
  <Row>
    <Col xs={12} sm={6} smOffset={3}>
      <div className="text-center">
        <h1>Page not found</h1>
        <hr/>

        <Button bsStyle="primary">
          <Link to="/">Go Back</Link>
        </Button>
      </div>
    </Col>
  </Row>
);

export default NotFound;
