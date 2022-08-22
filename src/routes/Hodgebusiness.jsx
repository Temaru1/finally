import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ourclients from "./Ourclients";
import Hodgenav from "./Hodgenav";

export default function Hodgebusiness(){
  return (
    <div className="lol">
    <img className="d-block w-100 pic" src="https://www.cccollision.net/wp-content/uploads/2020/12/Do-Body-Repair-Shops-for-Cars-Fix-Interiors-Too_.jpg" alt="photo" />
    <Hodgenav />
    <Container className="con1">
      <Row>
        <Col>
          <div className="h11"><img className="h1" src="https://hardleygrey.com/wp-content/uploads/2022/05/HAC_001.png" alt="photo" /></div>
          <h3>Our Business</h3>
          <div className="useless5"></div>
          <div><p> Hodge Auto Centre has over 12 years of experience in providing robust and variegated automobile repair services to a wide range of clients ranging from vehicle owners, public and private companies and vehicle dealerships.</p></div>
        </Col>
        <Col>

        <div className="lll">
          <h4>THE EDGE</h4>
          <div className="useless7"></div>
          <p>Our expert team has years of experience in foresight, diagnosis, strategy and auto repair solutions.</p>
          </div>

        </Col>
      </Row>
    </Container>
    <Container className="con2">
      <Row>
        <Col>
          <h3>LOCAL CONTENT</h3>
          <div className="useless6"></div>
          <h1>100% Nigerian Owned</h1>
        </Col>
        <Col>
          <div className="jjjj">
            <p>PROFESSIONAL CERTIFICATION</p>
            <img className="iso" src="https://hardleygrey.com/wp-content/uploads/2022/05/ISO.jpg" alt="photo" />
            <p>Quality Management System Certified: ISO 9001</p>
          </div>
        </Col>
        <Col>
          <div className="mag"><img src="https://hardleygrey.com/wp-content/uploads/2022/05/HAC-Workshop-225x300.png" alt="photo" /></div>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>
    <div className="klklkl">
      <Ourclients />
    </div>
    </Row>
    </Container>

    </div>
  )
}
