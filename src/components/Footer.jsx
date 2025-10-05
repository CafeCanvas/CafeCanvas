import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="mb-4">
          <h3 className="heading-2 mb-2" style={{ color: 'var(--cream)' }}>
            CaféCanvas
          </h3>
          <p className="body-medium" style={{ maxWidth: '400px', margin: '0 auto' }}>
            Transforming cafés and restaurants with smart digital solutions. 
            From QR ordering to complete online presence - we make it happen.
          </p>
        </div>
        
        <div className="footer-links">
          <a 
            href="#home" 
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pricing');
            }}
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
        
        <div className="social-icons">
          <a 
            href="https://instagram.com/cafecanvas" 
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://linkedin.com/company/cafecanvas" 
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          marginTop: '2rem'
        }}>
          <p className="body-small" style={{ color: 'var(--cream)', opacity: 0.8 }}>
            © 2024 CaféCanvas. All rights reserved. | Designed & Developed with ❤️ for the hospitality industry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;