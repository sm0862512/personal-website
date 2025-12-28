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
                        Skilled IT professional with 6 years of experience in hardware and software support,
                        troubleshooting, and server maintenance. Strong software development background combining
                        technical expertise with practical problem-solving skills. Experienced in full-stack
                        development, computer vision, Windows and Linux environments, networking, and virtualization.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4">Professional Summary</h2>
                    <p>
                        I specialize in both IT infrastructure support and software development across multiple platforms.
                        My experience spans from hands-on technical support in healthcare and educational environments to
                        developing computer vision applications using OpenCV and full-stack web development with React,
                        Django, and Flask. Proficient in managing Windows and Linux environments, server administration,
                        networking, and utilizing automation tools like Puppet for inventory management.
                    </p>
                    <p>
                        With a strong programming background in Python, C++, Java, HTML, JavaScript, and MySQL, I excel
                        at building scalable applications and solving complex technical challenges. I have successfully
                        completed contract work for clients and built various applications that solve real-world problems
                        in card trading management, Twitch stream integration, and healthcare IT infrastructure.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4">Technical Skills</h2>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col lg={12} className="mb-3">
                    <h3 className="h4 fw-bold mb-3">Software Developer Skills</h3>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Programming Languages</h4>
                            <ul className="skill-list">
                                <li>Python</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>JavaScript/TypeScript</li>
                                <li>Swift</li>
                                <li>HTML/CSS</li>
                                <li>SQL</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Frameworks & Libraries</h4>
                            <ul className="skill-list">
                                <li>React</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>React Bootstrap</li>
                                <li>OpenCV</li>
                                <li>Node.js</li>
                                <li>SQLAlchemy</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Database & APIs</h4>
                            <ul className="skill-list">
                                <li>MySQL</li>
                                <li>SQLite</li>
                                <li>Meilisearch</li>
                                <li>RESTful APIs</li>
                                <li>API Development</li>
                                <li>AWS SES</li>
                                <li>Twitch API</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Development Tools</h4>
                            <ul className="skill-list">
                                <li>Git/GitHub</li>
                                <li>Version Control</li>
                                <li>Debugging & Testing</li>
                                <li>Cross-Platform Development</li>
                                <li>Scripting & Automation</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col lg={12} className="mb-3">
                    <h3 className="h4 fw-bold mb-3">Network Engineer & IT Support Skills</h3>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Operating Systems</h4>
                            <ul className="skill-list">
                                <li>Windows (10/11)</li>
                                <li>Linux</li>
                                <li>Active Directory</li>
                                <li>System Administration</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Networking</h4>
                            <ul className="skill-list">
                                <li>Network Fundamentals</li>
                                <li>Network Devices</li>
                                <li>Network Protocols</li>
                                <li>Network Security</li>
                                <li>Server Administration</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Infrastructure</h4>
                            <ul className="skill-list">
                                <li>Virtualization</li>
                                <li>Remote Access Tools</li>
                                <li>Monitoring Tools</li>
                                <li>Infrastructure Support</li>
                                <li>Hardware Support</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="skill-card h-100">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Automation & Tools</h4>
                            <ul className="skill-list">
                                <li>Puppet</li>
                                <li>Automation Tools</li>
                                <li>Jira</li>
                                <li>IT Asset Management</li>
                                <li>Troubleshooting</li>
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

            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="h3 mb-4">Professional Experience</h2>
                </Col>
                <Col lg={12}>
                    <Card className="education-card mb-3">
                        <Card.Body>
                            <h3 className="h5 fw-bold">Onsite IT Specialist</h3>
                            <p className="text-muted mb-2">Healthcare Organization | June 2025 - September 2025</p>
                            <ul className="mb-0">
                                <li>Diagnosed and resolved hardware issues across clinical and administrative departments</li>
                                <li>Built and imaged computers with Windows and Active Directory configuration</li>
                                <li>Deployed computers and devices supporting healthcare management systems</li>
                                <li>Managed warranty devices and coordinated equipment replacements</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="education-card mb-3">
                        <Card.Body>
                            <h3 className="h5 fw-bold">IT Help Desk Technician</h3>
                            <p className="text-muted mb-2">Educational Institution | August 2024 - June 2025</p>
                            <ul className="mb-0">
                                <li>Provided hands-on technical support to staff, students, and faculty</li>
                                <li>Troubleshot and repaired desktop computers and classroom equipment</li>
                                <li>Managed ticket tracking and documentation in Jira</li>
                                <li>Performed Windows 11 installations and system maintenance</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="education-card mb-3">
                        <Card.Body>
                            <h3 className="h5 fw-bold">IT Support Specialist</h3>
                            <p className="text-muted mb-2">Major Retail Corporation (Contract) | February 2023 - October 2023</p>
                            <ul className="mb-0">
                                <li>Managed comprehensive project involving payment terminal systems</li>
                                <li>Programmed, troubleshot, and shipped payment systems</li>
                                <li>Maintained centralized database for system tracking and reporting</li>
                                <li>Organized inventory based on manufacturing dates</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="education-card mb-3">
                        <Card.Body>
                            <h3 className="h5 fw-bold">IT Asset Management Coordinator</h3>
                            <p className="text-muted mb-2">Technology Services Provider (Contract) | August 2022 - January 2023</p>
                            <ul className="mb-0">
                                <li>Coordinated shipping of work-from-home equipment and operating systems</li>
                                <li>Maintained inventory of critical PC parts and components</li>
                                <li>Oversaw leasing, maintenance, and upkeep of company-issued computers</li>
                                <li>Inventoried and verified storage items for accuracy and availability</li>
                            </ul>
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