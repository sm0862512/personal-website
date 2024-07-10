import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import './About.css';

const Projects = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    return (
        <Container>
            <Container>
                <h1>Projects</h1>
                <p>Here are some of my projects:</p>
                <ul>
                    <li onClick={() => setShow1(true)} style={{cursor: 'pointer'}}>Magic Card Scanner (Python)</li>
                    <li onClick={() => setShow2(true)} style={{cursor: 'pointer'}}>React Website (This website)</li>
                    <li onClick={() => setShow3(true)} style={{cursor: 'pointer'}}>Nasa App(Swift)</li>
                    <li onClick={() => setShow4(true)} style={{cursor: 'pointer'}}>Minecraft Plugin (Java)</li>
                    <li onClick={() => setShow5(true)} style={{cursor: 'pointer'}}>MTG Book Backend (django)</li>
                    <li onClick={() => setShow6(true)} style={{cursor: 'pointer'}}>MTG Book Frontend (React)</li>
                </ul>

                <Modal show={show1} onHide={() => setShow1(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Magic Card Scanner</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="https://github.com/sm0862512/card-scanner" target="_blank" rel="noopener noreferrer">Magic Card Scanner</a> </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow1(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show2} onHide={() => setShow2(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>React Website (This website)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="https://github.com/sm0862512/personal-website" target="_blank" rel="noopener noreferrer">React Website</a></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow2(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show3} onHide={() => setShow3(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nasa App(Swift)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="https://github.com/sm0862512/final" target="_blank" rel="noopener noreferrer">Nasa Swift App</a></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow3(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show4} onHide={() => setShow4(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Minecraft Plugin (Java)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="https://github.com/sm0862512/minecraft-plugin" target="_blank" rel="noopener noreferrer">Java Minecraft plugin</a></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow4(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show5} onHide={() => setShow5(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>MTG Book Backend (django)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="#" onClick={(e) => e.preventDefault()}>No open source link Available</a></Modal.Body>
                    <Modal.Body>
                        <button className="link-button" onClick={() => setShow5(false)}>No open source link Available</button>
                    </Modal.Body>
                </Modal>
                <Modal show={show6} onHide={() => setShow6(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>MTG Book Frontend (React)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="#" onClick={(e) => e.preventDefault()}>No open source link Available</a></Modal.Body>
                    <Modal.Body>
                        <button className="link-button" onClick={() => setShow5(false)}>No open source link Available</button>
                    </Modal.Body>
                </Modal>
            </Container>
        </Container>
    );
};

export default Projects;