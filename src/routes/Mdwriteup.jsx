import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExamplee() {
  return (
    <Container className="write">
      <Row>
        <Col>
        <div className="multi"><h2>At Hardley grey,<br /> we value our multicultural <br />and multinational landscape <br />of professional team players <br />and highly motivated <br />employees</h2></div>
        <div className="useless"></div>
        <div className="multi2"><p>Hardley grey is a worldclass company for all people and myriads of opinion. Our people are our most valuable assets.</p>
        </div>

        <div className="multi3">
        <p>Engr Kamsolibe Rhamsis <br /> Group Managing Director and Chief Executive Officer</p>
        </div>
        </Col>
        <Col className="mlp">
        <div className="mlp1"><img src="https://hardleygrey.com/wp-content/uploads/2022/07/Our-people-Engr-K.-Rhamsis-1-244x300.jpg" alt="photo" alt="photo" />
        <h3>Engr. K. Rhamsis</h3>
        <h5>GMD & CEO</h5>
        </div>

        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExamplee;
