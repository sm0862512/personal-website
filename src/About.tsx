import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container>
            <h1>About Me</h1>
            <p>Hi, I'm Shane Mrad. I am a software developer with a passion for technology. I have experience with Python, Java, Swift, React, and Django. I have a degree in Networking and Computer Science. I am currently working on a Magic the Gathering card scanner using Python. I am also working on a website for my Magic the Gathering collection using React and Django.</p>
            <p>Here are some of my projects:</p>
            <ul>
                <li><strong>Magic Card Scanner (Python):</strong> A project using OpenCV to scan magic cards and return the card name and set. The goal is to create a working Magic card sorting machine.</li>
                <li><strong>React Website:</strong> This website, built to learn and practice React, is hosted on Netlify.</li>
                <li><strong>Nasa App (Swift):</strong> A final project for an app class, creating an Android and Swift app.</li>
                <li><strong>Minecraft Plugin (Java):</strong> A Minecraft server plugin for a Java class final, allowing players to set and teleport to homes.</li>
                <li><strong>MTG Book Backend (Django):</strong> A backend project for managing MTG books, built with Django.</li>
                <li><strong>MTG Book Frontend (React):</strong> A frontend project for managing MTG books, built with React.</li>
                <li><strong>Contract Minecraft Plugin:</strong> A contract job for a Twitch streamer, creating a plugin for a timed event.</li>
                <li><strong>Viewer Forge:</strong> An ongoing project for a Twitch streamer, allowing users to convert channel points into coins to interact with the stream.</li>
            </ul>
        </Container>
    );
};

export default About;