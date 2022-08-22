import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CoreValues() {
  return <div>
  <div className="corediv">
    <div className="core">
      <h2>CORE VALUES</h2>
      <div className="corel"></div>
    </div>
    </div>
    <Container>
      <Row>
        <Col>
        <div className="coretext">
          <h2>In the delivery of our services to clients, we are guided by the following shared values</h2>
        </div>
        </Col>
        <Col>
        <div className="coreatt">


          <Row className="kk">
            <Col>
              <img className="logooo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gOq3wKvbxOKy3W9jFIBeZMuf3bW2GInnXA&usqp=CAU" alt="photo" />
              <p>Leadership</p>
            </Col>
            <Col>
              <img className="logooo" src="https://icon-library.com/images/integrity-icon/integrity-icon-6.jpg" alt="photo" />
              <p>Integrity</p>
            </Col>
            <Col>
              <img className="logooo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OwCWg-gRYHlyzzkFuAzEWfoo_98loa8DUR_q36BBvbRJ9iSaq4GzLXziF--zpC_rgyQ&usqp=CAU" alt="photo" />
              <p>Innovation</p>
            </Col>
            <Col>
              <img className="logooo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFlH2qfS88eWc83RN4Sm9qRCCP6vtiPCYDgu3IIVst-XHHOim_6Fo6A1eIW627SFI9t4&usqp=CAU" alt="photo" />
              <p>Teamwork</p>
            </Col>
            <Col>
              <img className="logooo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1owDv1HVjontNibge1fUq60-R4eUhJVnmgg&usqp=CAU" alt="photo" />
              <p>Excellence</p>
            </Col>
          </Row>




        </div>
        </Col>
      </Row>

    </Container>
  </div>
}
