import React, { useContext, useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { NavbarText } from "reactstrap";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Navbar.Brand href="/">Json Converter</Navbar.Brand>
        <NavbarText className="text-dark">
          {context.user?.email ? "Welcome " + context.user.email : ""}
        </NavbarText>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          {context.user?.email ? (
            <Button
              variant="btn btn-danger"
              onClick={() => {
                context.setUser(null);
                window.sessionStorage.removeItem("email");

                toast("Sucessfully Logged out", { type: "success" });
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button variant="outline-success" href="/signin">
                SignIn
              </Button>
              <Button variant="outline-success" href="/signup">
                Signup
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
