import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Nav, Container } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

function ResultNav() {
  const [email, setEmail] = useState([]);

  console.log(email);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container></Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <InputGroup>
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Link
                  to={{
                    pathname: `../filter_result/${email}`,
                  }}
                >
                  <Button>Filter</Button>
                </Link>
              </InputGroupAddon>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default ResultNav;
