import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <h1 className="text-warning fs-2">Recipe Guru</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-4 ">
              <NavLink
                style={{ textDecoration: "none", color: "yellow" }}
                className={({ isActive, isPending }) =>
                  isActive ? "text-white" : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "yellow" }}
                className={({ isActive, isPending }) =>
                  isActive ? "text-white text-decoration-none" : ""
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              <Link to="/login">
                {user? (
                  <Button onClick={handleLogOut} className="btn btn-warning ms-4 fw-semibold fs-5">
                    Logout
                  </Button>
                ) : (
                  <Button className="btn btn-warning ms-4 fw-semibold fs-5">
                    Login
                  </Button>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
