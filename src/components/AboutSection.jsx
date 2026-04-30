import React from 'react';
import { useReveal } from '../hooks/useReveal';

const AboutSection = () => {
  useReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'center' }}>
          
          <div data-reveal="fade-up">
            <div className="label" style={{ marginBottom: '1.5rem' }}>Our Philosophy</div>
            <h2 className="display-md" style={{ marginBottom: '2rem' }}>We don't build generic.</h2>
            <p className="body-xl" style={{ marginBottom: '2rem' }}>
              CafeCanvas is an independent digital studio dedicated to pushing the boundaries of web architecture and visual identity.
            </p>
            <p className="body-lg" style={{ color: 'var(--fg-muted)' }}>
              We collaborate with ambitious founders and established enterprises to craft bespoke digital experiences. Our approach is entirely custom, relying on deep research, avant-garde design, and uncompromising engineering standards.
            </p>
          </div>

          <div data-reveal="clip-up" className="delay-2" style={{ aspectRatio: '3/4', background: 'var(--bg-elevated)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" alt="Abstract aesthetic" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'grayscale(100%)' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
              <div className="label" style={{ color: '#fff' }}>Est. 2020</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
