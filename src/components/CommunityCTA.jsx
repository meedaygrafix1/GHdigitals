import React from 'react';
import './CommunityCTA.css';
import Button from './Button';

const CommunityCTA = () => {
    return (
        <section className="community-cta reveal">
            <div className="container community-content">
                <p className="community-text">
                    Are you a <span className="highlight-text">social media manager</span> looking for a <span className="highlight-text">community</span> to join to stay updated on industry update ?
                </p>
                <Button
                    variant="secondary"
                    onClick={() => window.open('https://chat.whatsapp.com/DzIwGVAGLH9DJ8auBeJHwc?mode=gi_t', '_blank')}
                >
                    Join our community today
                </Button>
            </div>
        </section>
    );
};

export default CommunityCTA;
