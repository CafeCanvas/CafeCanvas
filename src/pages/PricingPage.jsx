import React, { useEffect } from 'react';
import PricingSection from '../components/PricingSection';

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen">
            <PricingSection />
        </div>
    );
};

export default PricingPage;
