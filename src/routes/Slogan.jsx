import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Slogan() {
  return (
    <div className="coll">
    <Container className="chii">
      <Row>
        <Col>
        <div className="vvv">
        <div className="mnb">
          <h2>Slogan</h2>
          <h5>Delivering Exceptional value</h5>
        </div>
        <div className="mnb">
          <h2>Mission Statement</h2>
          <h5>To deliver innovative and superior services through operational excellence and partnerships</h5>
        </div>
        <div className="mnb">
          <h2>Vision Statement</h2>
          <h5>To build a world class support service conglomerate committed to excellence and stakeholder value</h5>
        </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Slogan;
