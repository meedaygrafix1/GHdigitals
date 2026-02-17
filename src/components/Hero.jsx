import React from 'react';
import './Hero.css';
import Button from './Button';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-eyebrow">Next cohort starts by April</span>
                    <h1 className="hero-headline">
                        Empowering Brands & People Through <span className="highlight">Strategic Social Media</span>
                    </h1>
                    <p className="hero-subtitle">
                        We train individuals and manage brands through strategic digital marketing, helping you achieve measurable growth.
                    </p>
                    <div className="hero-actions">
                        <Button variant="secondary" className="hero-cta-tertiary" onClick={() => window.open('https://calendly.com/ghdigitalsacademy', '_blank')}>Book a Consultation</Button>
                        <Button variant="outline" onClick={() => window.location.href = '#agency'}>Explore Our Services</Button>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src={heroImage} alt="Digital Marketing Professional" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
