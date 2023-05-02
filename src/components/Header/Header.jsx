import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div >
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <h1 className="text-warning fs-2">Recipe Guru</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-4 ">
              <NavLink className="text-decoration-none fs-5" to="/">
                Home
              </NavLink>
              <NavLink className="text-decoration-none fs-5" to="/blog">
                Blog
              </NavLink>
            </Nav>
            <Nav>
              <Link to="/login">
                <Button className="btn btn-warning ms-4 fw-semibold fs-5">
                  Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;