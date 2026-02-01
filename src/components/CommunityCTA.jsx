import React from 'react';
import './CommunityCTA.css';
import Button from './Button';

const CommunityCTA = () => {
    return (
        <section className="community-cta reveal">
            <div className="container community-content">
                {/* <div className="stacked-profiles">
                    <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=faces" alt="Member" className="profile-img" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces" alt="Member" className="profile-img" />
                    <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop&crop=faces" alt="Member" className="profile-img" />
                    <img src="https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=150&h=150&fit=crop&crop=faces" alt="Member" className="profile-img" />
                    <div className="profile-count">1k+</div>
                </div> */}

                <p className="community-text">
                    Are you a <span className="highlight-text">social media manager</span> looking for a <span className="highlight-text">community</span> to join to stay updated on industry update?
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
