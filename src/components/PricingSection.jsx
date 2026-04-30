import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const PricingSection = () => {
  useReveal();

  return (
    <section className="section" id="pricing">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '8vw' }}>
          <div className="label" data-reveal="fade-up">Engagements</div>
          <h2 className="display-md delay-1" data-reveal="fade-up" style={{ marginTop: '1rem' }}>Partnership Models</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw' }}>
          
          <div data-reveal="fade-up" style={{ padding: '4vw', border: '1px solid var(--border)', borderRadius: '24px', background: 'var(--bg-elevated)' }}>
            <h3 className="display-md" style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1rem' }}>Project Based</h3>
            <p className="body-lg" style={{ marginBottom: '3rem' }}>End-to-end delivery of bespoke digital products with strict scope and high-end execution.</p>
            <div className="label" style={{ marginBottom: '2rem' }}>From $10K</div>
            <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
              <span>Inquire</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div data-reveal="fade-up" className="delay-1" style={{ padding: '4vw', border: '1px solid var(--accent)', borderRadius: '24px', background: 'var(--bg)' }}>
            <h3 className="display-md" style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1rem' }}>Retainer</h3>
            <p className="body-lg" style={{ marginBottom: '3rem' }}>Ongoing design and engineering partnership acting as your fractional technical team.</p>
            <div className="label" style={{ marginBottom: '2rem' }}>Custom Quote</div>
            <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
              <span>Inquire</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
