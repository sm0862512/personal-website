// src/NavBar.tsx

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
                <Nav className="me-auto fw-bold">
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/shane-mrad/">LinkedIn</Nav.Link>
                    <Nav.Link href="/Degrees">Degrees</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;