import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function TheNavbar() {
  return (
    <Navbar
      className="navbar"
      style={{ position: "sticky" }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/">
          The Bit Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ textDecoration: "none" }} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ textDecoration: "none" }}
              to="/product"
            >
              Products
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} style={{ textDecoration: "none" }} to="/cart">
              Cart <AiOutlineShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
