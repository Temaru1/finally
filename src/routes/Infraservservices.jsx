import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from "./Infraservnav"
import Ourclients from "./Ourclients";
export default function Infraservservices(){
  return(
    <div>

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

    <Container className="pok">
    <Row>
    <div className="mlk">
      <h2>Our Services</h2>
      <div className="ooo"></div>
    </div>
    </Row>
    <Row className="iiiii">
    <Col>

    <div><p>Infraserv has over 12 years of experience offering a broad range of facilities management services which include, but not limited to: janitorial services, gardening and landscaping, fumigation and pest control, facade maintenance, maintenance and repairs of mechanical and electrical systems, maintenance of HVAC systems, etc…

    Our competitive advantage is rooted in the ability to effectively deliver projects in a manner that satisfies even the strictest quality and performance requirements.We are able to provide facility management services in ways that work best for our clients. Whatever your unique needs, our services are customizable to provide you the extent of support you desire

    Our services fall under two broad categories:</p></div>
    </Col>
    </Row>
    </Container>
    <Container className="iiii">
    <Row>
    <Col className="iii">
    <div className="klm">
    <h3 className="llm">SOFT SERVICES</h3>
    <ul>
      <li><p>Cleaning</p></li>
      <li><p>Gardening and landscaping</p></li>
      <li><p>Security and security systems management</p></li>
      <li><p>Fumigation and Pest Control</p></li>
      <li><p>Façade maintenance</p></li>
    </ul>
    </div>
    </Col>
    <Col className="iii">
    <div className="klm">
      <h3 className="llm">HARD SERVICES</h3>
      <ul>
        <li><p>Maintenance and repairs of Mechanical and Electrical Systems</p></li>
        <li><p>Maintenance and repairs of HVAC Systems</p></li>
        <li><p>Plumbing and management of water purification systems</p></li>
        <li><p>Carpentry Works</p></li>
        <li><p>Masonry</p></li>
        <li><p>Power systems management</p></li>
      </ul>
    </div>
    </Col>
    </Row>
    </Container>
    <Container>
    <Col className="boyo">

      <img className="okayo" src="https://hardleygrey.com/wp-content/uploads/2022/05/Infraserv-gardening.png" alt="photo" />
      <img className="okayo" src="https://hardleygrey.com/wp-content/uploads/2022/05/IMG-20211215-WA0017.jpg" alt="photo" />
      <img className="okayo" src="https://hardleygrey.com/wp-content/uploads/2022/05/Infraserv-painting.png" alt="photo" />
      <img className="okayo" src="https://hardleygrey.com/wp-content/uploads/2022/05/Infraserv-cleaning.png" alt="photo" />
    </Col>
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
