import React from 'react'
//import logo from "../../src/logo.svg";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


export default function Header() {
  return (
    <>
   <Navbar bg="light"  expand="lg">
  <Container>
    <Navbar.Brand href="#home"> Spa-App  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
