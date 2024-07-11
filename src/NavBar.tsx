import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Shane</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* This is the hamburger button */}
                <Navbar.Collapse id="basic-navbar-nav"> {/* This wraps the collapsible content */}
                    <Nav className="me-auto fw-bold">
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/shane-mrad/">LinkedIn</Nav.Link>
                        <Nav.Link href="/Degrees">Degrees</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;