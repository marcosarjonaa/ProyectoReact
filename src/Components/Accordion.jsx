import React, { useState } from 'react';
import './css/Accordion.css'

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(prevState => !prevState);
    };
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
                {title}
                <span className="accordion-icon">{isOpen ? <i class="fa-regular fa-arrow-right"></i> : <img href="/img/flechaAbajo.png"/>}</span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};
export default AccordionItem;