import React, { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen">
            <ServicesSection />
            <CaseStudiesSection />
        </div>
    );
};

export default ServicesPage;
