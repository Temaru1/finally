import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample(){
  return (
    <div className="navDroIt">
    <Navbar className="groupnav" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand  href="/Premier"><img className="groupnavlogo" src="https://hardleygrey.com/wp-content/uploads/2022/05/PG_001.png" alt="photo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className="groupnavlink" href="/Premierbusiness">Our Business</Nav.Link>
            <Nav.Link  className="groupnavlink" href="/Premierservices">Services</Nav.Link>
            <Nav.Link className="groupnavlink" href="/Contact">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;
