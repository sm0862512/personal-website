import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar-custom" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
                    Shane Mrad
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className="nav-link-custom">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/About" className="nav-link-custom">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Projects" className="nav-link-custom">
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Degrees" className="nav-link-custom">
                            Education
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.linkedin.com/in/shane-mrad/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link-custom nav-link-external"
                        >
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/sm0862512"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link-custom nav-link-external"
                        >
                            GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;