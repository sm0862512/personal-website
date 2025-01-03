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
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);

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
                    <li onClick={() => setShow7(true)} style={{cursor: 'pointer'}}>Contract Minecraft Plugin</li>
                    <li onClick={() => setShow8(true)} style={{cursor: 'pointer'}}>Viewer Forge</li>
                </ul>

                <Modal show={show1} onHide={() => setShow1(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Magic Card Scanner</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a href="https://github.com/sm0862512/card-scanner" target="_blank" rel="noopener noreferrer">Magic Card Scanner</a>
                        <p style={{ marginTop: '20px' }}>The project uses OpenCV to scan magic cards and return the card name and set. The end goal is to have a working Magic card sorting Machine that People can build and sort or inventory. The program also has online Ticket support for shops that my friends and I run to support shops. </p>
                    </Modal.Body>
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
                    <Modal.Body><a href="https://github.com/sm0862512/personal-website" target="_blank" rel="noopener noreferrer">React Website</a>
                        <p style={{ marginTop: '20px' }}>This project goal was to learn and practice learning React. The website is hosted on netlify. </p>
                    </Modal.Body>
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
                    <Modal.Body><a href="https://github.com/sm0862512/final" target="_blank" rel="noopener noreferrer">Nasa Swift App</a>
                        <p style={{ marginTop: '20px' }}> This project was for a final for My App class. In this class we learned how to make a Android app and Swift app. This was the final project for the class.</p>
                    </Modal.Body>
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
                    <Modal.Body ><a href="https://github.com/sm0862512/minecraft-plugin" target="_blank" rel="noopener noreferrer">Java Minecraft plugin</a>
                        <p style={{ marginTop: '20px' }}> This project was for a final in my java 2 class. In this project I made a Minecraft server plugin that keeps track of the players home they set. The player can teleport to them as well. </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow4(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show5} onHide={() => setShow5(false)}>
                    <Modal.Header closeButton>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Modal.Title><a>MTG Book Backend (django)</a>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <button className="link-button" onClick={() => setShow5(false)}>No open source link Available</button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow5(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show6} onHide={() => setShow6(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>MTG Book Frontend (React)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <button className="link-button" onClick={() => setShow6(false)}>No open source link Available</button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow6(false)}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
                <Modal show={show7} onHide={() => setShow7(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contract Minecraft Java Pluin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <button className="link-button" onClick={() => setShow7(false)}>No open source link Available</button>
                        <p style={{ marginTop: '20px' }}>This was a Contract Job for a Twitch streamer and needed a PLugin for a event where the user ran one command and set a timer for 6 hours. Brofre the timer ran out the user would be able to play the game again if they lost. when the timer ran out when the player lost the game it would set there game mode from survival to spectator. This was a plugin helped with other developers. And under direction of the teams management.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow7(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show8} onHide={() => setShow8(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Viewer Forge</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <button className="link-button" onClick={() => setShow8(false)}>In progress</button>
                        <p style={{ marginTop: '20px' }}>This is a Program for a follow Twitch streamer where users can spent channel points convert them into coins and use those coins to interact with the Twitch streamers stream. This is a ongoing project and is going to expand to allowing others to use the service with a interactable website and powered by Django and sqlite database.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow8(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Container>
    );
};

export default Projects;