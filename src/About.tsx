import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container className="about-page py-5">
            <Row className="mb-5">
                <Col lg={12}>
                    <h1 className="display-4 fw-bold mb-4">About Me</h1>
                    <p className="lead">
                        Software developer with a strong foundation in computer science and networking,
                        combining technical expertise with practical problem-solving skills. Experienced
                        in full-stack development, computer vision, and building scalable applications.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4">Professional Summary</h2>
                    <p>
                        I specialize in developing innovative software solutions across multiple platforms.
                        My experience spans from computer vision applications using OpenCV to full-stack web
                        development with React and Django. I have successfully completed contract work for
                        Twitch streamers and built various applications that solve real-world problems.
                    </p>
                    <p>
                        Currently, I'm focused on building advanced systems including a Magic card sorting
                        machine using computer vision and a comprehensive Twitch integration platform that
                        enhances viewer engagement through interactive features.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4">Technical Skills</h2>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h3 className="h5 fw-bold mb-3">Languages</h3>
                            <ul className="skill-list">
                                <li>Python</li>
                                <li>Java</li>
                                <li>Swift</li>
                                <li>JavaScript/TypeScript</li>
                                <li>SQL</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h3 className="h5 fw-bold mb-3">Frameworks & Libraries</h3>
                            <ul className="skill-list">
                                <li>React</li>
                                <li>Django</li>
                                <li>React Bootstrap</li>
                                <li>OpenCV</li>
                                <li>Node.js</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h3 className="h5 fw-bold mb-3">Tools & Technologies</h3>
                            <ul className="skill-list">
                                <li>Git/GitHub</li>
                                <li>Netlify</li>
                                <li>SQLite</li>
                                <li>RESTful APIs</li>
                                <li>Twitch API</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h3 className="h5 fw-bold mb-3">Specializations</h3>
                            <ul className="skill-list">
                                <li>Computer Vision</li>
                                <li>Full-Stack Development</li>
                                <li>Networking</li>
                                <li>Cybersecurity</li>
                                <li>Mobile Development</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4">Education & Certifications</h2>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="education-card">
                        <Card.Body>
                            <h3 className="h5 fw-bold">Associate in Computer Science</h3>
                            <p className="text-muted mb-2">Academic Degree</p>
                            <p className="mb-0">Comprehensive study of programming, algorithms, and software development</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="education-card">
                        <Card.Body>
                            <h3 className="h5 fw-bold">Associate in Networking</h3>
                            <p className="text-muted mb-2">Academic Degree</p>
                            <p className="mb-0">Network infrastructure, protocols, and system administration</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="education-card">
                        <Card.Body>
                            <h3 className="h5 fw-bold">Google IT Support Specialization</h3>
                            <p className="text-muted mb-2">Professional Certificate</p>
                            <p className="mb-0">IT fundamentals, networking, operating systems, and system administration</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="education-card">
                        <Card.Body>
                            <h3 className="h5 fw-bold">Google Cybersecurity Specialization</h3>
                            <p className="text-muted mb-2">Professional Certificate</p>
                            <p className="mb-0">Security principles, threat detection, and incident response</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <h2 className="h3 mb-4">What I Bring to the Table</h2>
                    <Row>
                        <Col md={6} className="mb-3">
                            <div className="value-prop">
                                <h4 className="h6 fw-bold">Problem Solver</h4>
                                <p>Experienced in tackling complex challenges from computer vision to full-stack development, always finding efficient and scalable solutions.</p>
                            </div>
                        </Col>
                        <Col md={6} className="mb-3">
                            <div className="value-prop">
                                <h4 className="h6 fw-bold">Fast Learner</h4>
                                <p>Proven ability to quickly master new technologies and frameworks, evidenced by diverse project portfolio across multiple tech stacks.</p>
                            </div>
                        </Col>
                        <Col md={6} className="mb-3">
                            <div className="value-prop">
                                <h4 className="h6 fw-bold">Detail-Oriented</h4>
                                <p>Strong focus on code quality, best practices, and creating maintainable solutions that stand the test of time.</p>
                            </div>
                        </Col>
                        <Col md={6} className="mb-3">
                            <div className="value-prop">
                                <h4 className="h6 fw-bold">Team Player</h4>
                                <p>Successful collaboration on contract projects and open-source contributions, with experience working alongside other developers.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;