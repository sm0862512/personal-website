// src/App.tsx

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import './App.css';
import About from "./About";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Degrees from "./Degrees";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar /> {/* Include NavBar */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Degrees" element={<Degrees />} />
            </Routes>
        </Router>
    );
};

export default App;