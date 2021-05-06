import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import "./AdminNav.css";

const AdminNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          {" "}
          <NavbarBrand href="/">ADMIN</NavbarBrand>
        </Container>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav-admin" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                View
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/studentprofile">
                  View Student Profiles
                </DropdownItem>

                <DropdownItem href="/pendingleave">
                  View Pending Leave Application
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button className="btn-admin" href="/admin_register">
              Create New Admin
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNav;
