import React from "react";
import Hodgenav from "./Hodgenav";
import Ourclients from "./Ourclients";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hodgeservices(){
  return(
    <div>
    <img className="d-block w-100 pic" src="https://www.cccollision.net/wp-content/uploads/2020/12/Do-Body-Repair-Shops-for-Cars-Fix-Interiors-Too_.jpg" alt="photo" />
    <Hodgenav />


      <div>
      <Container className="pok">
      <Row>
      <div className="mlk">
        <h2>Our Services</h2>
        <div className="ooo"></div>
      </div>
      </Row>
        <Row className="iiiii">
          <Col>
          <h5>Established in 2012 as a professional alternative to existing automobile repair options in the Lagos metropolis, Hodge Auto Centre provides robust and variegated automobile repair services to a wide range of clients ranging from vehicle owners, public and private companies and vehicle dealerships.

          Currently, Hodge Auto centre is the first option for a growing number of the leading companies in the Lagos metropolis. Our customer base includes several finiancial institutions, engineering and manufacturing companies, and players in the Nigerian Oil and gas industry.

          We are an experienced team of industry professionals using innovative tools, companies specifications and local and international standards to provide the following automobile repaair and maintenance services:</h5>
          </Col>
        </Row>
      </Container>

      </div>
      <div>

        <Container className="iiii">
          <Row>
            <Col className="iii">
            <div className="klm">
            <h5 className="llm">Repairs overhauling or replacement of components in automobile mechanical systems</h5>
            <ul>
              <li>Engines</li>
              <li>Transmission systems</li>
              <li>Suspensions</li>
              <li>Power systems</li>
              <li>Drive trains for front, rear and all-wheel drive models</li>
              <li>Cooling and heating systems</li>
              <li>Speed and direction control systems</li>
            </ul>
            </div>
            </Col>
            <Col className="iii">
            <div className="klm">
            <h5 className="llm">Repair of wear and tear to vehicle exterior due to age or accidents</h5>
            <ul>
              <li>Frame/ Chassis straightening</li>
              <li>Panel Beating</li>
              <li>Enhancements for aesthetic purposes</li>
              <li>Rust treatment</li>
              <li>Replacement of vehicle peripherals including side mirrors, bumpers and windscreens</li>
              <li>Painting with computer aided selection of original manufacturer specified paint</li>
              <li></li>
              <li></li>
            </ul>
            </div>
            </Col>
            <Col className="iii">
            <div className="klm">
            <h5 className="llm">Specialized services</h5>
            <ul>
              <li>Modifications of vehicle exterior</li>
              <li>Restoration of vehicle upholstery</li>
              <li>Restoration of vintage cars</li>
              <li>Programming of replacement keys</li>
              <li>Reprogramming of brainbox systems</li>
              <li>Hot-rodding</li>
              <li>Repair of damaged parts</li>
              <li></li>
            </ul>
            </div>
            </Col>
            </Row>
            <Row>
            <Col className="iii">
            <div className="klm">
            <h5 className="llm">Machining</h5>
            <ul>
              <li>Resurfacing of brake discs</li>
              <li>Machining of valves and crank shafts</li>
            </ul>
            </div>
            </Col>
            <Col className="iii">
            <div className="klm">
            <h5 className="llm">Support services</h5>
            <ul>
              <li>Towing</li>
              <li>Pickup and delivery of vehicles (available only for clients in Ikoyi, VI, Lekki and Ajah)</li>
            </ul>
            </div>
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



    </div>
  )
}
