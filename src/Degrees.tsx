import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const Degrees = () => {
    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col lg={12}>
                    <h1 className="display-4 fw-bold mb-3">Education & Credentials</h1>
                    <p className="lead text-muted">
                        Academic degrees and professional certifications demonstrating commitment to
                        continuous learning and technical excellence.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4 fw-bold">Academic Degrees</h2>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="education-card h-100">
                        <Card.Body>
                            <div className="mb-3">
                                <div className="text-primary fw-bold fs-1">🎓</div>
                            </div>
                            <h3 className="h5 fw-bold">Associate in Computer Science</h3>
                            <p className="text-muted mb-3">Academic Degree</p>
                            <p className="mb-0">
                                Comprehensive study of programming fundamentals, algorithms,
                                data structures, and software development methodologies.
                            </p>
                            <div className="mt-3">
                                <small className="text-muted">Key Areas:</small>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark me-1 mb-1">Programming</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Algorithms</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Software Development</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="education-card h-100">
                        <Card.Body>
                            <div className="mb-3">
                                <div className="text-primary fw-bold fs-1">🌐</div>
                            </div>
                            <h3 className="h5 fw-bold">Associate in Networking</h3>
                            <p className="text-muted mb-3">Academic Degree</p>
                            <p className="mb-0">
                                In-depth study of network infrastructure, protocols, system
                                administration, and network security principles.
                            </p>
                            <div className="mt-3">
                                <small className="text-muted">Key Areas:</small>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark me-1 mb-1">Network Infrastructure</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Protocols</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">System Admin</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="education-card h-100">
                        <Card.Body>
                            <div className="mb-3">
                                <div className="text-primary fw-bold fs-1">📜</div>
                            </div>
                            <h3 className="h5 fw-bold">High School Diploma</h3>
                            <p className="text-muted mb-3">Secondary Education</p>
                            <p className="mb-0">
                                Foundation in core academic subjects with focus on mathematics,
                                science, and technology.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <h2 className="h3 mb-4 fw-bold">Professional Certifications</h2>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="education-card h-100">
                        <Card.Body>
                            <div className="mb-3">
                                <div className="text-success fw-bold fs-1">✓</div>
                            </div>
                            <h3 className="h5 fw-bold">Google IT Support Professional Certificate</h3>
                            <p className="text-muted mb-3">Google Career Certificate</p>
                            <p className="mb-0">
                                Comprehensive program covering IT fundamentals, networking, operating
                                systems, system administration, and IT infrastructure services.
                            </p>
                            <div className="mt-3">
                                <small className="text-muted">Skills Gained:</small>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark me-1 mb-1">Troubleshooting</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Customer Support</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Linux</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Network Protocols</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="education-card h-100">
                        <Card.Body>
                            <div className="mb-3">
                                <div className="text-success fw-bold fs-1">🔒</div>
                            </div>
                            <h3 className="h5 fw-bold">Google Cybersecurity Professional Certificate</h3>
                            <p className="text-muted mb-3">Google Career Certificate</p>
                            <p className="mb-0">
                                Advanced program focused on security principles, threat detection,
                                incident response, and implementing security controls.
                            </p>
                            <div className="mt-3">
                                <small className="text-muted">Skills Gained:</small>
                                <div className="mt-2">
                                    <span className="badge bg-light text-dark me-1 mb-1">Security Frameworks</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Threat Analysis</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">SIEM Tools</span>
                                    <span className="badge bg-light text-dark me-1 mb-1">Python Security</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Degrees;