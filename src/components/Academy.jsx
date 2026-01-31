import React from 'react';
import Button from './Button';
import './Academy.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { SmartPhone01Icon, CheckmarkCircle02Icon, Megaphone01Icon, PaintBoardIcon, ChartIncreaseIcon, UserAdd01Icon, Video01Icon, MagicWand02Icon, StarIcon, PlayCircle02Icon } from '@hugeicons/core-free-icons';

import mobileFirstImage from '../assets/mobile-first-new.jpg';

const Academy = () => {
    return (
        <section id="academy" className="academy-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="eyebrow">The Academy</span>
                    <h2>Social Media Management Training</h2>
                    <p className="subtitle">Practical, easy-to-follow programs emphasizing real-life application.</p>
                </div>

                {/* Highlights Grid */}
                <div className="mobile-first-highlight reveal delay-200">
                    <div className="highlight-content">
                        <h3>The Mobile-First Approach</h3>
                        <p>You don't need expensive gear to start. We teach you how to get professional results using just your smartphone.</p>
                        <ul className="check-list">
                            <li>No expensive cameras or editing software needed</li>
                            <li>Create content anywhere, anytime</li>
                            <li>Professional design with your smartphone</li>
                        </ul>
                        <div style={{ marginTop: '2rem' }}>
                            <Button variant="secondary" onClick={() => window.location.href = 'mailto:ghdigitalsacademy@gmail.com'}>Enroll in Training</Button>
                        </div>
                    </div>
                    <div className="highlight-visual">
                        <div className="visual-box image-container">
                            <img src={mobileFirstImage} alt="Mobile First Approach" className="highlight-image" />
                        </div>
                    </div>
                </div>

                {/* What You'll Learn */}
                <div className="learning-grid">
                    <h3>What You'll Learn</h3>
                    <div className="learning-items">
                        <span><HugeiconsIcon icon={Megaphone01Icon} size={20} /> Meta Advertising Mastery</span>
                        <span><HugeiconsIcon icon={PaintBoardIcon} size={20} /> Personal & Business Branding</span>
                        <span><HugeiconsIcon icon={ChartIncreaseIcon} size={20} /> Profitable SMM Business</span>
                        <span><HugeiconsIcon icon={UserAdd01Icon} size={20} /> Client Attraction & Pitching</span>
                        <span><HugeiconsIcon icon={Video01Icon} size={20} /> Content Creation</span>
                        <span><HugeiconsIcon icon={MagicWand02Icon} size={20} /> AI-Powered Marketing</span>
                        <span><HugeiconsIcon icon={StarIcon} size={20} /> Industry Best Practices</span>
                        <span><HugeiconsIcon icon={PlayCircle02Icon} size={20} /> Hands-on Live Campaigns</span>
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div className="pricing-header">
                    <h3>Investment Tiers</h3>
                </div>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <div className="card-header">
                            <h4>Group Training</h4>
                            <div className="price">₦100,000 <small>/ 1000 GHC</small></div>
                            <span className="duration">4 Weeks</span>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Live Group Sessions</li>
                                <li>Access to Recording</li>
                                <li>Community Support</li>
                                <li>Assignments & Review</li>
                                <li>Class Holds Quarterly</li>
                                <li>Internship Opportunity</li>
                                <li>Certification</li>
                            </ul>
                            <Button variant="outline-primary" className="full-width" onClick={() => window.location.href = 'mailto:ghdigitalsacademy@gmail.com'}>Enroll Now</Button>
                        </div>
                    </div>

                    <div className="pricing-card featured">
                        <div className="card-header">
                            <span className="badge">Most Popular</span>
                            <h4>Individual Training</h4>
                            <div className="price">₦250,000 <small>/ 2500 GHC</small></div>
                            <span className="duration">4 Weeks (1-on-1)</span>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Personalized Attention</li>
                                <li>Flexible Schedule</li>
                                <li>Deep Dive Strategy</li>
                                <li>Direct Mentorship</li>
                                <li>Certification</li>
                            </ul>
                            <Button variant="secondary" className="full-width" onClick={() => window.location.href = 'mailto:ghdigitalsacademy@gmail.com'}>Enroll Now</Button>
                        </div>
                    </div>

                    <div className="pricing-card">
                        <div className="card-header">
                            <h4>Corporate Training</h4>
                            <div className="price">Custom</div>
                            <span className="duration">2–5 Days</span>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Team Upskilling</li>
                                <li>Tailored Curriculum</li>
                                <li>On-site or Virtual</li>
                                <li>Post-training Support</li>
                            </ul>
                            <Button variant="outline-primary" className="full-width" onClick={() => window.location.href = '#contact'}>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academy;
