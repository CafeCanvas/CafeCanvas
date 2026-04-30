import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-elevated)', paddingTop: '6vw', paddingBottom: '2vw' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4vw', paddingBottom: '6vw' }}>
          <div>
            <Link to="/" className="nav-logo" style={{ display: 'inline-block', marginBottom: '2rem' }}>CAFECANVAS</Link>
            <p className="body-lg" style={{ maxWidth: '300px' }}>
              Building the next generation of digital experiences for forward-thinking brands.
            </p>
          </div>
          
          <div>
            <div className="label" style={{ marginBottom: '1.5rem', color: 'var(--fg-muted)' }}>Index</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/" className="body-lg" style={{ color: 'var(--fg)', transition: 'opacity 0.3s' }}>Home</Link></li>
              <li><Link to="/services" className="body-lg" style={{ color: 'var(--fg)', transition: 'opacity 0.3s' }}>Services</Link></li>
              <li><Link to="/about" className="body-lg" style={{ color: 'var(--fg)', transition: 'opacity 0.3s' }}>Agency</Link></li>
            </ul>
          </div>

          <div>
            <div className="label" style={{ marginBottom: '1.5rem', color: 'var(--fg-muted)' }}>Socials</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="https://www.instagram.com/cafe._canvas/" target="_blank" rel="noopener noreferrer" className="body-lg" style={{ color: 'var(--fg)' }}>Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/cafecanvas0/" target="_blank" rel="noopener noreferrer" className="body-lg" style={{ color: 'var(--fg)' }}>LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2vw', alignItems: 'center' }}>
          <div className="label" style={{ color: 'var(--fg-muted)', fontSize: '0.75rem' }}>&copy; {new Date().getFullYear()} CafeCanvas</div>
          <div className="label" style={{ color: 'var(--fg-muted)', fontSize: '0.75rem' }}>All Rights Reserved</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
