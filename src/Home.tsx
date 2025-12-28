import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-hero">
            <Container>
                <Row className="align-items-center min-vh-80">
                    <Col lg={12} className="text-center">
                        <h1 className="display-3 fw-bold mb-3">Shane Mrad</h1>
                        <h2 className="display-6 text-muted mb-4">Software Developer & IT Professional</h2>
                        <p className="lead mb-4">
                            Full-stack developer and IT professional with 6 years of experience in software development,
                            hardware/software support, and infrastructure management. Specializing in Python, C++, Java,
                            React, Flask, and Django. Passionate about building innovative solutions, managing complex IT
                            systems, and turning technical challenges into elegant solutions.
                        </p>
                        <div className="d-flex gap-3 justify-content-center mb-5">
                            <Link to="/Projects">
                                <Button variant="primary" size="lg">View My Work</Button>
                            </Link>
                            <a href="https://www.linkedin.com/in/shane-mrad/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" size="lg">LinkedIn</Button>
                            </a>
                            <a href="https://github.com/sm0862512" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-secondary" size="lg">GitHub</Button>
                            </a>
                        </div>

                        <div className="skills-preview mt-5">
                            <h3 className="h5 mb-4 text-muted">Technical Skills</h3>
                            <div className="d-flex flex-wrap gap-2 justify-content-center">
                                <span className="badge bg-primary">Python</span>
                                <span className="badge bg-primary">C++</span>
                                <span className="badge bg-primary">Java</span>
                                <span className="badge bg-primary">JavaScript</span>
                                <span className="badge bg-secondary">React</span>
                                <span className="badge bg-secondary">Django</span>
                                <span className="badge bg-secondary">Flask</span>
                                <span className="badge bg-secondary">MySQL</span>
                                <span className="badge bg-success">Windows/Linux</span>
                                <span className="badge bg-success">Active Directory</span>
                                <span className="badge bg-success">Networking</span>
                                <span className="badge bg-success">Cybersecurity</span>
                                <span className="badge bg-info">OpenCV</span>
                                <span className="badge bg-info">Git</span>
                                <span className="badge bg-info">Virtualization</span>
                                <span className="badge bg-info">Server Administration</span>
                            </div>
                        </div>

                        <div className="quick-stats mt-5">
                            <Row>
                                <Col md={3} className="mb-3">
                                    <div className="stat-box">
                                        <h4 className="display-6 fw-bold text-primary">6+</h4>
                                        <p className="text-muted">Years Experience</p>
                                    </div>
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div className="stat-box">
                                        <h4 className="display-6 fw-bold text-primary">8+</h4>
                                        <p className="text-muted">Projects Completed</p>
                                    </div>
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div className="stat-box">
                                        <h4 className="display-6 fw-bold text-primary">2</h4>
                                        <p className="text-muted">Associate Degrees</p>
                                    </div>
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div className="stat-box">
                                        <h4 className="display-6 fw-bold text-primary">2</h4>
                                        <p className="text-muted">Google Certifications</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;