import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const RestaurantHome = () => {
  useReveal();

  return (
    <div style={{ paddingTop: '120px' }}>
      <section className="section" style={{ paddingBottom: '4vw' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', textAlign: 'center' }}>
            
            <div className="label" data-reveal="fade-up" style={{ marginBottom: '2rem' }}>Hospitality Solutions</div>
            <h1 className="display-huge" style={{ margin: '0 auto', maxWidth: '1200px' }}>
              <div style={{ overflow: 'hidden' }}><div data-reveal="fade-up">Redefining</div></div>
              <div style={{ overflow: 'hidden' }}><div data-reveal="fade-up" className="delay-1" style={{ color: 'var(--accent)' }}>Dining Experiences</div></div>
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem' }} data-reveal="fade-up" className="delay-2">
              <p className="body-xl" style={{ maxWidth: '600px', marginBottom: '3rem' }}>
                Bespoke digital menus, seamless ordering systems, and high-end brand identities for restaurants.
              </p>
              <a href="#contact" className="btn-primary">
                <span>Transform Your Restaurant</span>
                <ArrowUpRight size={20} />
              </a>
            </div>

          </div>
        </div>
      </section>

      <div className="img-reveal-wrapper" data-reveal="clip-up" style={{ height: '70vh', width: '100%', marginTop: '4vw' }}>
        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" alt="Restaurant Interior" style={{ width: '100%', height: '100%', filter: 'grayscale(30%)' }} />
      </div>
    </div>
  );
};

export default RestaurantHome;
