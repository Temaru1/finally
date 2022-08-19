import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BasicExample() {
  return (
    <Navbar className="navv" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="navLogo" href="/"><img
          className="logo"
          src="https://hardleygrey.com/wp-content/uploads/2022/02/Hardley-Grey_001.png"
          alt="logo"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto temaru">

            <NavDropdown renderMenuOnMount={true} title="About Us" id="basic-nav-dropdown">
            <div className="pinn">
              <NavDropdown.Item href="/Aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Ourpeople">
                Leadership
              </NavDropdown.Item >
              <NavDropdown.Item href="/Hse">HSE</NavDropdown.Item>
              <NavDropdown.Item href="/Contact">Contact Us</NavDropdown.Item>
            </div>

            </NavDropdown>
            <NavDropdown renderMenuOnMount={true} title="Our Group" id="basic-nav-dropdown">
            <div className="pinn">
              <NavDropdown.Item href="/HodgeAutoCenter">Hodge Auto Center</NavDropdown.Item>
              <NavDropdown.Item href="/Infraserv">
                Infraserv Nig Ltd
              </NavDropdown.Item>
              <NavDropdown.Item href="/Premier">Premier Guards</NavDropdown.Item>
            </div>

            </NavDropdown>
            <NavDropdown renderMenuOnMount={true} title="Careers" id="basic-nav-dropdown">
            <div className="pinn">
              <NavDropdown.Item href="/Career">Careers</NavDropdown.Item>
              <NavDropdown.Item href="Whocanwork">
                Who Can Work At Hardley Grey
              </NavDropdown.Item>
            </div>
            </NavDropdown>
            <NavDropdown renderMenuOnMount={true} title="Hardley Grey News" id="basic-nav-dropdown">
            <div className="pinn">
              <NavDropdown.Item href="#action/3.1">Temaru</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Benedict
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Emeasoba</NavDropdown.Item>
            </div>

            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
