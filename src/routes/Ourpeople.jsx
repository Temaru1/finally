
import React from "react";
import ContainerExample from "./Employeepics";
import ContainerExamplee from "./Mdwriteup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Aboutus(){
  return(
    <div>
    <Container>
    <div className="cvb"><h1 className="d">Leadership</h1>
    <div className="d1"></div></div>


    <div className="d2">
      <ContainerExamplee />
    </div>

          <div><ContainerExample /></div>
        <div className="bottomheight"></div>
        </Container>
    </div>
  )
}
