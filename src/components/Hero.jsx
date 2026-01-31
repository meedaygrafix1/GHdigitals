import React from 'react';
import './Hero.css';
import Button from './Button';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <span className="hero-eyebrow">Next cohort starts by March</span>
                <h1 className="hero-headline">
                    Empowering Brands & People Through <span className="highlight">Strategic Social Media</span>
                </h1>
                <div className="hero-actions">
                    <Button variant="secondary" className="hero-cta-tertiary" onClick={() => window.location.href = '#contact'}>Book a Consultation</Button>
                    <Button variant="outline" onClick={() => window.location.href = '#agency'}>Explore Our Services</Button>
                </div>
            </div>


        </section>
    );
};

export default Hero;
