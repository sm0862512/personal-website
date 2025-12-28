import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const Certs = () => {
    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col lg={12}>
                    <h1 className="display-4 fw-bold mb-3">Certifications & Community Involvement</h1>
                    <p className="lead text-muted">
                        Professional certifications and community contributions demonstrating commitment
                        to continuous learning and giving back to the tech community.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
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
                            <p className="mb-3">
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
                                    <span className="badge bg-light text-dark me-1 mb-1">System Administration</span>
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
                            <p className="mb-3">
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
                                    <span className="badge bg-light text-dark me-1 mb-1">Incident Response</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <h2 className="h3 mb-4 fw-bold">Community Involvement</h2>
                </Col>
                <Col lg={12} className="mb-4">
                    <Card className="education-card">
                        <Card.Body>
                            <div className="mb-3">
                                <div className="text-primary fw-bold fs-1">🤝</div>
                            </div>
                            <h3 className="h5 fw-bold">Open SGF Nonprofit</h3>
                            <p className="text-muted mb-3">Community Volunteer</p>
                            <p className="mb-0">
                                Active involvement with Open SGF, a nonprofit organization dedicated to
                                promoting open-source technology, community collaboration, and technical
                                education in the Springfield area.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Certs;