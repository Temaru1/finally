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
          <h4>Slogan</h4>
          <h6>Delivering Exceptional value</h6>
        </div>
        <div className="mnb">
          <h4>Mission Statement</h4>
          <h6>To deliver innovative and superior services through operational excellence and partnerships</h6>
        </div>
        <div className="mnb">
          <h4>Vision Statement</h4>
          <h6>To build a world class support service conglomerate committed to excellence and stakeholder value</h6>
        </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Slogan;
