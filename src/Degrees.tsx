import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';


const Degrees = () => {
    return (
        <Container>
            <Container>
                <h1>Degrees</h1>
                <p>Here are some of my degrees:</p>
                <ul>
                    <li>High School Diploma</li>
                    <li>Associates in Networking</li>
                    <li>Associates in Computer Science</li>
                </ul>
            </Container>
        </Container>
    );
};

export default Degrees;