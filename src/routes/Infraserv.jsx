import React from "react";
import BasicExample from "./Infraservnav";
import Corevalues from "./Corevalues";
import Ourclients from "./Ourclients";
import Localcontent from "./Localcontent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Infraserv(){
  return (
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
      <div className="qq">
      <Container>
      <Row>
      <Col>
      <div className="nbm">
        <img src="https://hardleygrey.com/wp-content/uploads/2022/05/Infraserv_001.png" alt="photo" />
        <div className="lass"></div>
        <h2>Infraserv was established to become a leading player in Facilities Management.,</h2>
        <p className="ptag">It has grown to develop a full spectrum of service offerings to a growing number of highly satisfied clients in Nigeria.

        Infraserv is armed with the will, vision and experience to meet statutory, technical and contractual requirements with regards to quality and timely delivery.

        Our competitive advantage is rooted in the ability to effectively deliver projects in a manner that satisfies even the strictest quality and performance requirements.</p>
        </div>
      </Col>
      <Col>
      <div className="nbm">
      <p className="ptag">Infraserv has forged partnerships with key players in the global Facility Management Service Industry. These partnerships         guarantee that our methodology, equipment and materials meet the strictest compliances regulations for safety, professionalism and the preservation of the environment.

      Our ultimate goal is to carry out all our operations while paying near-fanatical attention to detail; achieving and exceeding all client’s expectations

      We are driven by the burning desire to do it better than any competition</p>
      </div>
      </Col>
      <Col>
      <div className="nbm">
      <h5>OUR VISION</h5>
      <div className="useless3"></div>
      <p>To be the leading player in the facilities management industry</p>
      <h5>OUR MISSION</h5>
      <div className="useless4"></div>
      <p>To deliver superior and extra ordinary facilities management services in a safe, professional ad timely manner using our local and foreign expertise</p>
      </div>
      </Col>
      </Row>
      </Container>
      </div>
      <Corevalues />
      <Container>
      <Row>

      </Row>
      </Container>
      <div className="milk">
        <Ourclients />
      </div>
      </div>
  )
}
