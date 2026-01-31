import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from './Button';

import ghLogo from '../assets/gh-logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Close mobile menu on scroll to prevent accidental display
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileMenuOpen]);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <img src={ghLogo} alt="GH Digitals Logo" height="50" />
                </a>

                <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                    <a href="#academy" onClick={() => setMobileMenuOpen(false)}>Academy</a>
                    <a href="#agency" onClick={() => setMobileMenuOpen(false)}>Agency</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <div className="mobile-cta">
                        <Button variant="secondary" onClick={() => window.location.href = 'mailto:ghdigitalsacademy@gmail.com'}>Book Consultation</Button>
                    </div>
                </nav>

                <div className="desktop-cta">
                    <Button variant="secondary" onClick={() => window.location.href = 'mailto:ghdigitalsacademy@gmail.com'}>Book Consultation</Button>
                </div>

                <div className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
