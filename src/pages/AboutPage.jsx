import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import InteractiveStats from '../components/InteractiveStats';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen flex flex-col items-center">
            <AboutSection />
            <InteractiveStats />
        </div>
    );
};

export default AboutPage;
