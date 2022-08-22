import React from "react";
import Aboutuswriteup from "./Aboutuswriteup";
import Corevalues from "./Corevalues";
import Ourclients from "./Ourclients";
import Slogan from "./Slogan";
import Ourvalues from "./Ourvalues";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Ourpeople(){
  return (
    <div>
    <Container>
    <div className="s3"><h1>ABOUT US</h1></div>
    <div className="useless2"></div>
    <div className="s4">
      <Aboutuswriteup />
      </div>
    <Container>
      <Row>

        <Col>
          <div>
            <Ourvalues />
          </div>
        </Col>

        <Col>
          <div>
            <Slogan />
          </div>
        </Col>

      </Row>
    </Container>
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
