import React from "react";
import BasicExample from "./Premiernav";
import Ourclients from "./Ourclients";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Premierservices(){
  return(
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
