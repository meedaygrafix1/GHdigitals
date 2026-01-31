import React, { useState } from 'react';
import Button from './Button';
import './Contact.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail02Icon, Call02Icon, Location01Icon, Clock01Icon, Facebook02Icon, InstagramIcon, Linkedin02Icon, NewTwitterIcon } from '@hugeicons/core-free-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for submission logic
        alert('Thank you for contacting GH Digitals! We will get back to you shortly.');
        console.log(formData);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-intro text-center reveal">
                    <h2>Are you ready to begin?</h2>
                    <p className="cta-hook">Let's Start Your Digital Journey.</p>
                </div>

                <div className="contact-wrapper">
                    {/* Contact Form */}
                    <div className="contact-form-container reveal delay-100">
                        <h3>Send a Message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Interest</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Academy Training">Academy Training</option>
                                    <option value="SMM Services">SMM Services</option>
                                    <option value="Ads Management">Ads Management</option>
                                    <option value="Consulting">Consulting</option>
                                </select>
                            </div>

                            <div className="form-group full">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us about your project or goals"
                                ></textarea>
                            </div>

                            <Button variant="primary" className="submit-btn full">Send Message</Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info reveal delay-200">
                        <h3>Get in Touch</h3>
                        <div className="info-item">
                            <span className="icon"><HugeiconsIcon icon={Mail02Icon} size={24} /></span>
                            <div>
                                <h4>Email Us</h4>
                                <p>ghdigitalsacademy@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="icon"><HugeiconsIcon icon={Call02Icon} size={24} /></span>
                            <div>
                                <h4>Call Us</h4>
                                <p>+2348109851011</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="icon"><HugeiconsIcon icon={Location01Icon} size={24} /></span>
                            <div>
                                <h4>Visit Us</h4>
                                <p>Lagos, Nigeria</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="icon"><HugeiconsIcon icon={Clock01Icon} size={24} /></span>
                            <div>
                                <h4>Business Hours</h4>
                                <p>Mon–Fri, 9:00 AM – 5:00 PM</p>
                            </div>
                        </div>

                        <div className="social-connect">
                            <h4>Connect With Us</h4>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/share/1AioKkckQY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><HugeiconsIcon icon={Facebook02Icon} size={24} /></a>
                                <a href="https://www.instagram.com/gh__digitals?igsh=NjZvMXM4cHpxZDkw&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><HugeiconsIcon icon={InstagramIcon} size={24} /></a>
                                <a href="https://www.linkedin.com/company/ghdigitals" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><HugeiconsIcon icon={Linkedin02Icon} size={24} /></a>
                                <a href="https://x.com/gh_digitals?s=21&t=mSSFxTbPUaixUUZJ_I6LC" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><HugeiconsIcon icon={NewTwitterIcon} size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
