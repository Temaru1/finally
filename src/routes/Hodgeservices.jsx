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
          <p>Established in 2012 as a professional alternative to existing automobile repair options in the Lagos metropolis, Hodge Auto Centre provides robust and variegated automobile repair services to a wide range of clients ranging from vehicle owners, public and private companies and vehicle dealerships.

          Currently, Hodge Auto centre is the first option for a growing number of the leading companies in the Lagos metropolis. Our customer base includes several finiancial institutions, engineering and manufacturing companies, and players in the Nigerian Oil and gas industry.

          We are an experienced team of industry professionals using innovative tools, companies specifications and local and international standards to provide the following automobile repaair and maintenance services:</p>
          </Col>
        </Row>
      </Container>

      </div>
      <div>

        <Container className="iiii">
          <Row>
            <Col className="iii">
            <div className="klm">
            <h3 className="llm">Repairs overhauling or replacement of components in automobile mechanical systems</h3>
            <ul>
              <li><p>Engines<br />
              Transmission systems<br />
              Suspensions<br />
              Power systems<br />
              Drive trains for front, rear and all-wheel drive models<br />
              Cooling and heating systems<br />
              Speed and direction control systems</p></li>
            </ul>
            </div>
            </Col>
            <Col className="iii">
            <div className="klm">
            <h3 className="llm">Repair of wear and tear to vehicle exterior due to age or accidents</h3>
            <ul>
              <li><p>Frame/ Chassis straightening<br />
              Panel Beating<br />
              Enhancements for aesthetic purposes<br />
              Rust treatment<br />
              Replacement of vehicle peripherals including side mirrors, bumpers and windscreens<br />
              Painting with computer aided selection of original manufacturer specified paint</p></li>

            </ul>
            </div>
            </Col>
            <Col className="iii">
            <div className="klm">
            <h3 className="llm">Specialized services</h3>
            <ul>
              <li><p>Modifications of vehicle exterior<br />
              Restoration of vehicle upholstery<br />
              Restoration of vintage cars<br />
              Programming of replacement keys<br />
              Reprogramming of brainbox systems<br />
              Hot-rodding<br />
              Repair of damaged parts</p></li>

            </ul>
            </div>
            </Col>
            </Row>
            <Row>
            <Col className="iii">
            <div className="klm">
            <h3 className="llm">Machining</h3>
            <ul>
              <li><p>Resurfacing of brake discs<br />
              Machining of valves and crank shafts</p></li>
            </ul>
            </div>
            </Col>
            <Col className="iii">
            <div className="klm">
            <h3 className="llm">Support services</h3>
            <ul>
              <li><p>Towing<br />
              Pickup and delivery of vehicles (available only for clients in Ikoyi, VI, Lekki and Ajah)</p></li>
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
