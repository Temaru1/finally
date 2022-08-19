import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <div className="tt">
    <Container>
    <Form>

    <Row className="ttt"><h2>CV Upload Form</h2></Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>



      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Enter Address" />
      </Form.Group>

      <Row className="mb-3">



        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Company</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Select an option</option>
            <option>Hodge Auto Center</option>
            <option>Premier Guards</option>
            <option>Hardley Grey Group</option>
          </Form.Select>
        </Form.Group>


      </Row>
      <Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>CV</Form.Label>
        <Form.Control type="file" placeholder="pdf or doc only" />
      </Form.Group>
      </Row>
      <div className="tk"></div>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  );
}

export default GridComplexExample;
