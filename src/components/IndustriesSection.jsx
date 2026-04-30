import React from 'react';
import { useReveal } from '../hooks/useReveal';

const INDUSTRIES = [
  'Healthcare', 'Fintech', 'Real Estate', 'E-Commerce', 'SaaS & Technology', 'Hospitality'
];

const IndustriesSection = () => {
  useReveal();

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4vw', alignItems: 'center' }}>
          <div>
            <div className="label" data-reveal="fade-up">Sectors</div>
            <h2 className="display-md delay-1" data-reveal="fade-up" style={{ marginTop: '1rem' }}>Where we excel.</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} data-reveal="fade-up" style={{ transitionDelay: `${i * 0.1}s`, padding: '1.5rem 3rem', border: '1px solid var(--border)', borderRadius: '100px', fontSize: '1.125rem', color: 'var(--fg)' }}>
                {ind}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
