import React from 'react';
import './About.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserMultiple02Icon, PaintBoardIcon, Store01Icon, Building02Icon, Award01Icon, Settings01Icon, ChartIncreaseIcon, UserLove01Icon, Rocket01Icon, EyeIcon, Diamond01Icon } from '@hugeicons/core-free-icons';

const About = () => {
    return (
        <section id="about" className="about-section">
            {/* Intro */}
            <div className="container about-intro reveal">
                <div className="section-header">
                    <span className="eyebrow">About Us</span>
                    <h2>Who is GH Digitals?</h2>
                </div>
                <div className="intro-content">
                    <p className="lead-text">GH Digitals is a premier digital marketing academy and agency.</p>
                    <p><strong>Core Purpose:</strong> Helping individuals, businesses, and organizations understand social media properly, use it strategically, and get real results, not just likes and followers.</p>
                    <p><strong>Our Edge:</strong> Combining strategic thinking, creative execution, and data-driven insights to achieve digital marketing goals.</p>
                </div>
            </div>

            {/* Mission Vision Values */}
            <div className="mvv-grid container reveal delay-100">
                <div className="mvv-card mission">
                    <div className="icon-wrapper"><HugeiconsIcon icon={Rocket01Icon} size={32} /></div>
                    <h3>Mission</h3>
                    <p>To democratize digital marketing excellence by providing accessible, high-quality training and services that empower businesses and individuals.</p>
                </div>
                <div className="mvv-card vision">
                    <div className="icon-wrapper"><HugeiconsIcon icon={EyeIcon} size={32} /></div>
                    <h3>Vision</h3>
                    <p>To be the leading digital marketing training and service provider in Africa and beyond, recognized for transforming social media marketing and digital branding.</p>
                </div>
                <div className="mvv-card values">
                    <div className="icon-wrapper"><HugeiconsIcon icon={Diamond01Icon} size={32} /></div>
                    <h3>Values</h3>
                    <ul>
                        <li>Excellence</li>
                        <li>Innovation</li>
                        <li>Integrity</li>
                        <li>Empowerment</li>
                        <li>Results</li>
                    </ul>
                </div>
            </div>

            {/* Why Us */}
            <div className="why-us">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="eyebrow">Why Choose Us</span>
                        <h2>We Deliver Real Results</h2>
                        <p className="subtitle">We don't just teach or manage pages. We build confidence, systems, and long-term growth.</p>
                    </div>



                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">300+</span>
                            <span className="stat-label">Students Trained</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">60+</span>
                            <span className="stat-label">Trusted Brands</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Satisfaction Rate</span>
                        </div>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-wrapper"><HugeiconsIcon icon={Award01Icon} size={32} /></div>
                            <h4>Proven Expertise</h4>
                            <p>Years of experience helping businesses across sectors achieve objectives.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper"><HugeiconsIcon icon={Settings01Icon} size={32} /></div>
                            <h4>Customized Solutions</h4>
                            <p>No cookie-cutter approaches; every strategy is tailored to unique needs.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper"><HugeiconsIcon icon={ChartIncreaseIcon} size={32} /></div>
                            <h4>Results-Driven</h4>
                            <p>Focus on metrics that matter, delivering tangible ROI and business growth.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper"><HugeiconsIcon icon={UserLove01Icon} size={32} /></div>
                            <h4>Comprehensive Support</h4>
                            <p>From training to execution, we are with you every step of the digital journey.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who We Serve */}
            <div className="container target-audience">
                <h3>Who Do We Serve?</h3>
                <div className="audience-tags">
                    <span><HugeiconsIcon icon={UserMultiple02Icon} size={20} /> Individuals & Students</span>
                    <span><HugeiconsIcon icon={PaintBoardIcon} size={20} /> Freelancers & Creatives</span>
                    <span><HugeiconsIcon icon={Store01Icon} size={20} /> Small & Medium Businesses</span>
                    <span><HugeiconsIcon icon={Building02Icon} size={20} /> Corporate Organizations</span>
                </div>
            </div>
        </section>
    );
};

export default About;
