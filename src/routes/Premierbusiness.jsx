import React from "react";
import BasicExample from "./Premiernav";
import Ourclients from "./Ourclients";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Premierbusiness(){
  return (
    <div className="lol">
    <div className="hodgedivpic">
    <div className="premierlist">

        <ul>
        <li>Security Reporting</li>
        <li>Access Control and Management</li>
        <li>Surveillance and Patrol</li>
        <li>Intelligence Gathering</li>

      </ul>



    </div>
    <img
      className="d-block w-100 pic"
      src="https://www.offdutyofficers.com/wp-content/uploads/2019/12/hiring-a-security-guard-company.jpeg"
      alt="First slide"
    />
    <BasicExample />
    </div>
    <Container className="con1">
      <Row>
        <Col>
        <div className="jj"><img src="https://hardleygrey.com/wp-content/uploads/2022/05/PG_001.png" alt="photo" /></div>
        <div className="lass"></div>
        <h3> Our Business < /h3>
        <div className="useless5"></div>
        <div className="sss"><p> PREMIER GUARDS provides intelligent, robust security management solutions to business organizations in Nigeria.It has since grown to offer services to numerous governmental organizations, manufacturing companies, oil and gas giants, construction companies, banks and organizations in the hospitality industry </p></div>
        </Col>
        <Col>
        <div className="lll">
          <h4> THE EDGE < /h4>
          <div className="useless7"></div>
          <p> We have a team of experienced industry professionals that are equipped with modern tools to deliver to client’ s specifications in various projects. </p>
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
    <div>
    <Container>
    <Row>
    <div className="klklkl">
      <Ourclients />
    </div>
    </Row>
    </Container>

    </div>

    </div>
  )
}
