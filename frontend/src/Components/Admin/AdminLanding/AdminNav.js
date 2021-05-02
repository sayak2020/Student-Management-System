import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";

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
          <Nav className="mr-auto" navbar>
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
                <DropdownItem href="/approvedleave">
                  View Approved Leave Application
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button href="/admin_register">Create New Admin</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNav;
