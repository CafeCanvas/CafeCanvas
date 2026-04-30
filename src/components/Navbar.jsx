import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">CAFECANVAS</Link>
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>
          <Link to="/services" style={{ transition: 'opacity 0.3s' }}>Services</Link>
          <Link to="/about" style={{ transition: 'opacity 0.3s' }}>Agency</Link>
          <a href="#work" style={{ transition: 'opacity 0.3s' }}>Work</a>
        </div>
        <Link to="/contact" className="label" style={{ color: '#fff', borderBottom: '1px solid #fff', paddingBottom: '4px' }}>
          Start Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
