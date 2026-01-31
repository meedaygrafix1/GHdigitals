import React from 'react';
import './Testimonials.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { QuoteUpIcon } from '@hugeicons/core-free-icons';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="eyebrow">Social Proof</span>
                    <h2>What Our Clients Say</h2>
                </div>

                <div className="testimonials-grid reveal delay-100">
                    <div className="testimonial-card">
                        <div className="quote-icon"><HugeiconsIcon icon={QuoteUpIcon} size={48} variant="solid" /></div>
                        <p className="quote-text">"After the first class, I realized I had been doing social media management wrongly all this while. My mindset completely changed."</p>
                        <div className="client-info">
                            <h4>Omolola</h4>
                            <span>Academy Student</span>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="quote-text">"GH Digitals helped us bring structure and clarity to our online presence. Everything finally made sense."</p>
                        <div className="client-info">
                            <h4>Boozebuddy NG</h4>
                            <span>Agency Client</span>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="quote-text">"I didn’t know social media management had a business side until my 1:1 session. I finally understood why clients were treating me anyhow."</p>
                        <div className="client-info">
                            <h4>Oluwafemi</h4>
                            <span>Consultation Client</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
