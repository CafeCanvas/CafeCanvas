import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link
          to="/"
          className="logo"
          onClick={closeMobileMenu}
        >
          CafeCanvas
        </Link>

        <ul className="nav-links">
          <li>
            <Link
              to="/restaurants"
              className="nav-link"
              style={{ color: 'var(--orange-accent)' }}
              onClick={closeMobileMenu}
            >
              Restaurant Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile menu */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="logo" onClick={closeMobileMenu}>CafeCanvas</Link>
          <button
            className="mobile-close-button"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <Link to="/restaurants" className="mobile-nav-link text-orange-500" onClick={closeMobileMenu}>
              Restaurant Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;