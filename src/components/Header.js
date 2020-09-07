import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Navbar.Brand href="/">Json Converter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <Button variant="outline-success" href="/signin">
            SignIn
          </Button>
          <Button variant="outline-success" href="/signup">
            Signup
          </Button>
          <Button variant="btn btn-danger">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
