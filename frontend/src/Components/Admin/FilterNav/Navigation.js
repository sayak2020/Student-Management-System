import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Nav, Container } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/welcome">ADMIN</Navbar.Brand>
        </Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <InputGroup>
              <Input placeholder="Stream" />
              <InputGroupAddon addonType="append">
                <InputGroupText>Filter</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <InputGroupText>Filter</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
