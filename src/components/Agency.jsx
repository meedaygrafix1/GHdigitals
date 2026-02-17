import React from 'react';
import Button from './Button';
import './Agency.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { Analytics01Icon, PencilEdit02Icon, Megaphone01Icon, ChartBarLineIcon, Target02Icon, PaintBoardIcon } from '@hugeicons/core-free-icons';

const Agency = () => {
    return (
        <section id="agency" className="agency-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="eyebrow">The Agency</span>
                    <h2>Tailored SMM Solutions</h2>
                    <p className="subtitle">Professional management for SMEs and corporates.</p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    <div className="service-card reveal delay-100">
                        <div className="icon-wrapper"><HugeiconsIcon icon={Analytics01Icon} size={32} /></div>
                        <h3>Strategy Development</h3>
                        <p>Comprehensive audit, competitor analysis, target audience research, and KPI setting.</p>
                    </div>
                    <div className="service-card reveal delay-200">
                        <div className="icon-wrapper"><HugeiconsIcon icon={Megaphone01Icon} size={32} /></div>
                        <h3>Community Management</h3>
                        <p>Active engagement, comment moderation, and building loyal brand communities.</p>
                    </div>
                    <div className="service-card reveal delay-300">
                        <div className="icon-wrapper"><HugeiconsIcon icon={PencilEdit02Icon} size={32} /></div>
                        <h3>Content Creation</h3>
                        <p>High-quality visuals, copy, and video production tailored to each platform.</p>
                    </div>
                    <div className="service-card reveal delay-400">
                        <div className="icon-wrapper"><HugeiconsIcon icon={ChartBarLineIcon} size={32} /></div>
                        <h3>Analytics & Reporting</h3>
                        <p>Monthly reports, ROI tracking, audience insights, and data-driven refinement.</p>
                    </div>
                </div>

                <div className="packages-container">
                    <h3>Service Packages</h3>
                    <div className="packages-grid">
                        <div className="package-card">
                            <h4>Starter</h4>
                            <div className="package-features">
                                <p><strong>3 Platforms</strong></p>
                                <p>12 Posts / Month</p>
                                <p>Basic Community Mgmt</p>
                            </div>
                        </div>
                        <div className="package-card featured">
                            <h4>Growth</h4>
                            <div className="package-features">
                                <p><strong>4 Platforms</strong></p>
                                <p>20 Posts / Month</p>
                                <p>Paid Ads Management</p>
                                <p>Monthly Reporting</p>
                            </div>
                        </div>
                        <div className="package-card">
                            <h4>Premium</h4>
                            <div className="package-features">
                                <p><strong>5+ Platforms</strong></p>
                                <p>25 Posts / Month</p>
                                <p>Full-Service Support</p>
                                <p>Dedicated Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ads-section reveal">
                    <div className="ads-header">
                        <h3>Advertising & Branding</h3>
                        <p>We don't just run ads; we build brands that dominate.</p>
                    </div>
                    <div className="ads-content">
                        <div className="ads-box glass-panel">
                            <div className="icon-wrapper dark"><HugeiconsIcon icon={Target02Icon} size={32} /></div>
                            <h4>Campaign Management</h4>
                            <p>Facebook, Instagram, Google, LinkedIn, Twitter, TikTok, and Pinterest Ads.</p>
                            <ul className="ads-list">
                                <li>Strategy & Planning</li>
                                <li>Creative Design</li>
                                <li>Optimization & Scaling</li>
                            </ul>
                        </div>
                        <div className="ads-box glass-panel">
                            <div className="icon-wrapper dark"><HugeiconsIcon icon={PaintBoardIcon} size={32} /></div>
                            <h4>Branding Consultancy</h4>
                            <p>Brand Strategy, Identity Development, and Digital Marketing Roadmaps.</p>
                            <ul className="ads-list">
                                <li>Identity Design</li>
                                <li>Brand Voice</li>
                                <li>Market Positioning</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }} className="reveal">
                        <Button variant="secondary" onClick={() => window.open('https://calendly.com/ghdigitalsacademy', '_blank')}>Book a Consultation</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agency;
