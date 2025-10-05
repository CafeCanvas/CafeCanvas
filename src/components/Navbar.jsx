import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          CaféCanvas
        </a>
        
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#pricing" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('pricing');
              }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;