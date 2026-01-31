import React from 'react';
import './WhatsAppFloat.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { WhatsappIcon } from '@hugeicons/core-free-icons';

const WhatsAppFloat = () => {
    const whatsappLink = "https://wa.me/message/XRN5MQPHWXUDC1";

    return (
        <a
            href={whatsappLink}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <HugeiconsIcon icon={WhatsappIcon} size={28} />
            <span className="whatsapp-tooltip">Chat with us</span>
        </a>
    );
};

export default WhatsAppFloat;
