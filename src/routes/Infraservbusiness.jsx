import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ourclients from "./Ourclients";
import BasicExample from "./Infraservnav";

export default function Hodgebusiness(){
  return (
    <div className="lol">
    <div className="hodgedivpic">
    <div className="infraservlist">
        <ul>
        <li className="nkm">Cleaning</li>
        <li className="nkm">Gardening and Landscaping</li>
        <li className="nkm">Fumigation and Pest Control</li>
        <li className="nkm">Facade Maintenance</li>
        <li className="nkm">Maintenance and Repair of Mechanical and Electrical Systems</li>
        <li className="nkm">Maintenance and Repair of HVAC Systems</li>
        <li className="nkm">Plumbing and Management of Water Purification Systems</li>
        <li className="nkm">Carpentry Works</li>
        <li className="nkm">Masonry</li>
      </ul>
    </div>
    <img
      className="d-block w-100 pic"
      src="https://www.peopleready.com/wp-content/uploads/2021/04/1000x460_office-cleaning-02-1024x471.jpg"
      alt="First slide"
    />

    </div>
    <BasicExample />
    <div>
    <Container className="con1">
      <Row>
        <Col>
        <div className="jk">
          <div className="jj"><img src="https://hardleygrey.com/wp-content/uploads/2022/05/Infraserv_001.png" alt="photo" /></div>
          <div className="lass"></div>
          <h3>Our Business</h3>
          <div className="useless5"></div>
          <div><p> Infraserv has over 12 years of experience offering a broad range of facilities management services including janitorial services, gardening and landscaping, fumigation and pest control, facade maintenance, maintenance and repairs of mechanical and electrical systems, maintenance of HVAC systems, etc…

          Our competitive advantage is rooted in the ability to effectively deliver projects in a manner that satisfies even the strictest quality and performance requirements.We are able to provide facility management services in ways that work best for our clients. Whatever your unique needs, our services are customizable to provide you the extent of support you desire</p></div></div>
        </Col>
        <Col className="jl">
        <div className="jm">
          <h4>THE EDGE</h4>
          <div className="useless7"></div>
          <p>We have a team of experienced industry professionals that are equipped with modern tools to deliver to client’s specifications in various projects.</p>
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
          <div className="mag"><img src="https://hardleygrey.com/wp-content/uploads/2022/05/IMG-20211215-WA0016-225x300.jpg" alt="photo" /></div>
        </Col>
      </Row>
    </Container>
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
