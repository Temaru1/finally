import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample(){
  return (
    <Navbar className="groupnav" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/HodgeAutoCenter"><img className="groupnavlogo" src="https://hardleygrey.com/wp-content/uploads/2022/05/HAC_001.png" alt="photo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="groupnavlink" href="/Hodgebusiness">Our Business</Nav.Link>
            <Nav.Link className="groupnavlink" href="/Hodgeservices">Services</Nav.Link>
            <Nav.Link className="groupnavlink" href="/Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
