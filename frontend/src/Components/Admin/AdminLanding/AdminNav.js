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
          <NavbarBrand href="/adminlanding">ADMIN</NavbarBrand>
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
                  Student Profiles
                </DropdownItem>

                <DropdownItem href="/pendingleave">
                  Pending Leave Application
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button className="btn-admin" href="/admin_register">
              Create New Admin
            </Button>
            <Button
              className="btn-admin"
              href="http://localhost:9000/admin_login/a/a_logout"
            >
              Logout
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNav;
