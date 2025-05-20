
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default 
import { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [isOpen, setIsOpen] = useState(false);

    return (
        
<nav className="navbar">
    <div className="nav-container">
        <div className="logo">Universe TourX</div>
        <div className="hamburger" onClick={toggleMenu}>
            ☰
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>

    );
}
