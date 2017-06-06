import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Welcome = () => (
  <Row>
    <Col xs={12} sm={6} smOffset={3}>
      <div className="text-center">
        <h1>Welcome</h1>
        <hr/>
      </div>
    </Col>
  </Row>
);

export default Welcome;
