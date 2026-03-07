import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen">
            <ContactSection />
        </div>
    );
};

export default ContactPage;
