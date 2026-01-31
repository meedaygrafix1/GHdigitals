import React from 'react';
import './Footer.css';
import ghLogo from '../assets/gh-logo.png';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-brand">
                    <img src={ghLogo} alt="GH Digitals Logo" className="footer-logo" height="60" />
                    <p>Transforming social media marketing and digital branding.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#academy">Academy</a></li>
                        <li><a href="#agency">Agency</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p><strong>Email:</strong> ghdigitalsacademy@gmail.com</p>
                    <p><strong>Phone:</strong> +2348109851011</p>
                    <p><strong>Office:</strong> Lagos, Nigeria</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/1AioKkckQY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/gh__digitals?igsh=NjZvMXM4cHpxZDkw&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/company/ghdigitals" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://x.com/gh_digitals?s=21&t=mSSFxTbPUaixUUZJ_I6LC" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GH Digitals. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
