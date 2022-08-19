import React from "react";
import BasicExample from "./Premiernav";
import CoreValuess from "./Corevaluess";
import Ourclients from "./Ourclients";
import Localcontent from "./Localcontent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Premier(){
  return(
    <div>

    <div className="hodgedivpic">
    <div className="premierlist">

        <ul>
        <li className="nkl">Security Reporting</li>
        <li className="nkl">Access Control and Management</li>
        <li className="nkl">Surveillance and Patrol</li>
        <li className="nkl">Intelligence Gathering</li>

      </ul>



    </div>
    <img
      className="d-block w-100 pic"
      src="https://www.offdutyofficers.com/wp-content/uploads/2019/12/hiring-a-security-guard-company.jpeg"
      alt="First slide"
    />
    <BasicExample />
    </div>
    <div className="qq">
    <Container>
      <Row>
        <Col>
        <div className="nbm">
        <img src="https://hardleygrey.com/wp-content/uploads/2022/05/PG_001.png" alt="photo" />
        <h3> PREMIER GUARDS was founded in 2005 as a provider
        for intelligent, robust security management solutions to business organizations in Nigeria, </h3>
        <p className="ptag"> It has since grown to offer services to numerous governmental organizations, manufacturing companies, oil and gas giants, construction companies, banks and organizations in the hospitality industry </p>
        </div>
        </Col>
        <Col>
        <div className="nbm">
        <div><h5>OUR VISION</h5></div>
        <div className="useless3"></div>
        <div><p className="ptag">To be the leading security management company in the country.</p></div>
        <div><h5>OUR MISSION</h5></div>
        <div className="useless4"></div>
        <div><p className="ptag">To provide services that are professional and cost-tailored, to exceed the expectations of each and every one of our clients.</p></div>
        </div>
        </Col>
      </Row>

    </Container>
    </div>




    <div><CoreValuess /></div>
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
