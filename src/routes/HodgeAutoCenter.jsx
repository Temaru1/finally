import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from "./Hodgenav";
import Corevalues from "./Corevalues";
import Ourclients from "./Ourclients";
import Localcontent from "./Localcontent";


export default function HodgeAutoCenter() {
  return (
    <div className="hodgediv">



      <div className="hodgedivpic">
      <div className="hodgelist">

          <ul className="ee">
          <li className="nkl">Mechanical Repairs and Servicing</li>
          <li className="nkl">Electrical Repairs</li>
          <li className="nkl">Model Upgrade and Conversion</li>
          <li className="nkl">Panel Beating and Spray Painting</li>
          <li className="nkl">Air Conditionaer Servicing</li>
          <li className="nkl">Automobile Support</li>
        </ul>



      </div>
      <img
        className="d-block w-100 pic"
        src="https://www.cccollision.net/wp-content/uploads/2020/12/Do-Body-Repair-Shops-for-Cars-Fix-Interiors-Too_.jpg"
        alt="First slide"/>

      </div>

      <BasicExample />
      <div className="qq">
        <Container>
        <div>
          <Row>
            <Col>

            <div className="nbm">
            <img src="https://hardleygrey.com/wp-content/uploads/2022/05/HAC_001.png" alt="photo" />
              <h2>Hodge Auto center was established in Nigeria in 2012,</h2>
              <p className="ptag">as a professional alternative to existing automobile repair operations in the Lagos metropolis.
              Currently, Hodge Auto Centre is the first option for a growing number of the leading companies in the Lagos metropolis</p>
              </div>
            </Col>
            <Col>
            <div className="nbm">
            <p className="ptag">Hodge Auto Centre has forged partnerships with key players in the global automotive industry.
            These partnerships guarantee that our diagnostic equipment and software are always up to date and that we utilizeonly Original Equipment Manufacturer spare parts and lubricants. Ensuring that our processes are in keeping with industry best practices</p>
            </div>
            </Col>
            <Col>
            <div className="nbm">
            <div><h5>OUR VISION</h5></div>
            <div className="useless3"></div>
            <div><p className="ptag">To be the first option for leading companies and individuals in the Lagos metropolis.</p></div>
            <div><h5>OUR MISSION</h5></div>
            <div className="useless4"></div>
            <div><p className="ptag">To deliver professional and qualitative automobile diagnostic and repair services</p></div>
            </div>
            </Col>
          </Row>
          </div>
        </Container>
        </div>

            <div>
        <Corevalues />
        
      </div>
      <div>

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
