import React, { useState } from 'react';
import { Container, Modal, Button, Row, Col, Card, Badge } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);

    const projects = [
        {
            id: 1,
            title: "Magic Card Scanner",
            tech: ["Python", "OpenCV", "Computer Vision"],
            type: "Personal Project",
            status: "Active Development",
            show: show1,
            setShow: setShow1
        },
        {
            id: 2,
            title: "Personal Portfolio Website",
            tech: ["React", "TypeScript", "Bootstrap"],
            type: "Personal Project",
            status: "Deployed",
            show: show2,
            setShow: setShow2
        },
        {
            id: 3,
            title: "NASA Swift App",
            tech: ["Swift", "iOS", "API Integration"],
            type: "Academic Project",
            status: "Completed",
            show: show3,
            setShow: setShow3
        },
        {
            id: 4,
            title: "Minecraft Home Plugin",
            tech: ["Java", "Bukkit API"],
            type: "Academic Project",
            status: "Completed",
            show: show4,
            setShow: setShow4
        },
        {
            id: 5,
            title: "Infinity Binder - Backend API",
            tech: ["Flask", "Python", "MySQL", "SQLAlchemy"],
            type: "Personal Project",
            status: "Active Development",
            show: show5,
            setShow: setShow5
        },
        {
            id: 6,
            title: "Infinity Binder - Frontend Platform",
            tech: ["React", "JavaScript", "Chart.js"],
            type: "Personal Project",
            status: "Active Development",
            show: show6,
            setShow: setShow6
        },
        {
            id: 7,
            title: "Twitch Event Plugin",
            tech: ["Java", "Minecraft API"],
            type: "Contract Work",
            status: "Delivered",
            show: show7,
            setShow: setShow7
        },
        {
            id: 8,
            title: "Viewer Forge",
            tech: ["Python", "Django", "Twitch API", "SQLite"],
            type: "Ongoing Project",
            status: "In Development",
            show: show8,
            setShow: setShow8
        }
    ];

    return (
        <Container className="projects-page py-5">
            <Row className="mb-5">
                <Col lg={12}>
                    <h1 className="display-4 fw-bold mb-3">Projects Portfolio</h1>
                    <p className="lead text-muted">
                        A collection of personal, academic, and contract projects showcasing full-stack development,
                        computer vision, and API integration skills.
                    </p>
                </Col>
            </Row>

            <Row>
                {projects.map((project, index) => (
                    <Col md={6} lg={4} key={project.id} className="mb-4">
                        <Card
                            className="project-card h-100"
                            onClick={() => project.setShow(true)}
                        >
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <h3 className="h5 fw-bold mb-0">{project.title}</h3>
                                </div>
                                <div className="mb-3">
                                    <Badge bg="secondary" className="me-2 mb-2">{project.type}</Badge>
                                    <Badge
                                        bg={project.status === "Deployed" || project.status === "Delivered" ? "success" :
                                            project.status === "In Development" || project.status === "Active Development" ? "primary" : "info"}
                                        className="mb-2"
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                <div className="tech-stack mb-3">
                                    {project.tech.map((tech, idx) => (
                                        <Badge key={idx} bg="light" text="dark" className="me-1 mb-1">{tech}</Badge>
                                    ))}
                                </div>
                                <div className="text-primary fw-bold mt-auto">
                                    Click for details →
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={show1} onHide={() => setShow1(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Magic Card Scanner</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="primary" className="me-2">Python</Badge>
                            <Badge bg="primary" className="me-2">OpenCV</Badge>
                            <Badge bg="primary">Computer Vision</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Advanced computer vision application using OpenCV to automatically scan and identify
                            Magic: The Gathering cards. The system recognizes card names and sets with high accuracy,
                            designed to be the foundation for a complete card sorting machine.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Automated card recognition using computer vision algorithms</li>
                            <li>Set identification and cataloging capabilities</li>
                            <li>Inventory management system for card shops</li>
                            <li>Online ticket support system for shop integration</li>
                            <li>Scalable architecture for future automation</li>
                        </ul>
                        <div className="mt-3">
                            <a
                                href="https://github.com/sm0862512/card-scanner"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow1(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={() => setShow2(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Personal Portfolio Website</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="primary" className="me-2">React</Badge>
                            <Badge bg="primary" className="me-2">TypeScript</Badge>
                            <Badge bg="primary">Bootstrap</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Professional portfolio website built with React and TypeScript, showcasing projects,
                            skills, and experience. Demonstrates proficiency in modern frontend development and
                            responsive design principles.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Responsive design with React Bootstrap</li>
                            <li>TypeScript for type safety</li>
                            <li>Client-side routing with React Router</li>
                            <li>Deployed on Netlify with CI/CD</li>
                            <li>Modern UI/UX design patterns</li>
                        </ul>
                        <div className="mt-3">
                            <a
                                href="https://github.com/sm0862512/personal-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow2(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show3} onHide={() => setShow3(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">NASA Swift App</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="primary" className="me-2">Swift</Badge>
                            <Badge bg="primary" className="me-2">iOS</Badge>
                            <Badge bg="primary">API Integration</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Mobile application developed for iOS using Swift, integrating with NASA's public APIs
                            to display astronomical data and imagery. Academic project demonstrating mobile
                            development skills and API integration.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Native iOS application built with Swift</li>
                            <li>NASA API integration for real-time data</li>
                            <li>Clean user interface design</li>
                            <li>Asynchronous data loading</li>
                            <li>Image caching and display</li>
                        </ul>
                        <div className="mt-3">
                            <a
                                href="https://github.com/sm0862512/final"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow3(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show4} onHide={() => setShow4(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Minecraft Home Plugin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="primary" className="me-2">Java</Badge>
                            <Badge bg="primary">Bukkit API</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Server-side plugin for Minecraft built with Java and the Bukkit API. Implements a
                            home system allowing players to set multiple home locations and teleport to them,
                            with persistent data storage.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Multiple home location management per player</li>
                            <li>Teleportation command system</li>
                            <li>Persistent data storage</li>
                            <li>Player permission handling</li>
                            <li>Command parsing and validation</li>
                        </ul>
                        <div className="mt-3">
                            <a
                                href="https://github.com/sm0862512/minecraft-plugin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow4(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show5} onHide={() => setShow5(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Infinity Binder - Flask-Based Trading Card Management API</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="warning" text="dark" className="me-2">Active Development</Badge>
                            <Badge bg="primary" className="me-2">Flask</Badge>
                            <Badge bg="primary" className="me-2">Python</Badge>
                            <Badge bg="primary" className="me-2">MySQL</Badge>
                            <Badge bg="primary">SQLAlchemy</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Comprehensive REST API built with Flask for card trading and inventory management.
                            Features enterprise-grade security with token-based authentication, rate limiting,
                            and CAPTCHA protection for a robust and scalable backend system.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Secure token-based authentication system</li>
                            <li>Rate limiting with IP banning for security</li>
                            <li>CAPTCHA protection and CORS-enabled endpoints</li>
                            <li>AWS SES integration for email notifications</li>
                            <li>Discord webhooks for real-time security alerts</li>
                            <li>Scalable architecture with MySQL + SQLAlchemy ORM</li>
                            <li>Modular blueprints for organized code structure</li>
                            <li>Full-text search with Meilisearch for optimized card lookups</li>
                        </ul>
                        <div className="alert alert-info mt-3">
                            <strong>Status:</strong> Active development with ongoing feature additions and security enhancements.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow5(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show6} onHide={() => setShow6(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Infinity Binder - Trading Card Inventory & Sales Management Platform</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="warning" text="dark" className="me-2">Active Development</Badge>
                            <Badge bg="primary" className="me-2">React</Badge>
                            <Badge bg="primary" className="me-2">JavaScript</Badge>
                            <Badge bg="primary">Chart.js</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Full-stack web application for trading card inventory and e-commerce operations.
                            Provides comprehensive inventory tracking, sales management, and analytics with
                            support for multi-device POS terminals and mobile tablets.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Real-time inventory tracking and management</li>
                            <li>Role-based access control for team management</li>
                            <li>Bulk CSV/Excel import functionality</li>
                            <li>Responsive storefront with shopping cart</li>
                            <li>Complete order management and payment workflows</li>
                            <li>Analytics dashboards with Chart.js for sales and order history</li>
                            <li>Multi-device management for POS terminals and mobile tablets</li>
                            <li>Integration with Flask backend API</li>
                        </ul>
                        <div className="alert alert-info mt-3">
                            <strong>Status:</strong> Active development with ongoing enhancements to e-commerce and analytics features.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow6(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show7} onHide={() => setShow7(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Twitch Event Plugin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="success" className="me-2">Contract Work</Badge>
                            <Badge bg="primary" className="me-2">Java</Badge>
                            <Badge bg="primary">Minecraft API</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Custom Minecraft server plugin developed as contract work for a Twitch streamer.
                            Implemented a timed event system that manages player game modes based on timer
                            expiration and player status.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>6-hour timer system with command interface</li>
                            <li>Automatic game mode switching (Survival to Spectator)</li>
                            <li>Player state management and persistence</li>
                            <li>Event tracking and logging</li>
                            <li>Collaborative development with team oversight</li>
                        </ul>
                        <h5 className="fw-bold mb-3">Professional Experience</h5>
                        <p>
                            Delivered as part of a team under management direction, demonstrating ability
                            to work in collaborative environments and meet client specifications.
                        </p>
                        <div className="alert alert-info mt-3">
                            <strong>Note:</strong> This is proprietary code developed for a client. Source not publicly available.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow7(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal show={show8} onHide={() => setShow8(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Viewer Forge</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <Badge bg="warning" text="dark" className="me-2">In Development</Badge>
                            <Badge bg="primary" className="me-2">Python</Badge>
                            <Badge bg="primary" className="me-2">Django</Badge>
                            <Badge bg="primary" className="me-2">Twitch API</Badge>
                            <Badge bg="primary">SQLite</Badge>
                        </div>
                        <h5 className="fw-bold mb-3">Project Overview</h5>
                        <p>
                            Comprehensive Twitch integration platform enabling viewers to convert channel points
                            into coins for stream interaction. Expanding to a full SaaS solution with web interface
                            for streamers to customize and deploy their own interactive experiences.
                        </p>
                        <h5 className="fw-bold mb-3">Key Features</h5>
                        <ul>
                            <li>Twitch API integration for channel points</li>
                            <li>Custom currency system with conversion mechanics</li>
                            <li>Interactive command system for stream engagement</li>
                            <li>Django-powered web dashboard</li>
                            <li>SQLite database for efficient data management</li>
                            <li>Multi-streamer support (planned)</li>
                            <li>Customizable interaction options</li>
                        </ul>
                        <h5 className="fw-bold mb-3">Future Roadmap</h5>
                        <p>
                            Expanding to support multiple streamers with a self-service platform allowing
                            customization and configuration through an intuitive web interface.
                        </p>
                        <div className="alert alert-warning mt-3">
                            <strong>Status:</strong> Active development. New features being added regularly.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow8(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Projects;