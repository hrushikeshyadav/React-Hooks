import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-18</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/use-effect">UseEffect</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-context">UseContext</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-memo">UseMemo</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-reducer">UseReducer</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-transition">UseTransition</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-ref">UseRef</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-deferred-value">UseDeferredValue</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-callback">UseCallback</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/use-layout-effect">UseLayoutEffect</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
