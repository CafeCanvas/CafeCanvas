import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  { n: '01', title: 'Strategy & Brand', desc: 'Digital positioning, architecture, and comprehensive brand identity systems.' },
  { n: '02', title: 'UI/UX Design', desc: 'Immersive, award-winning interfaces focusing on user experience and conversion.' },
  { n: '03', title: 'Engineering', desc: 'Full-stack development, headless CMS, and scalable custom web applications.' },
  { n: '04', title: 'Growth & SEO', desc: 'Data-driven marketing, performance optimization, and organic search strategies.' }
];

const ServicesSection = () => {
  useReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" id="services" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6vw' }}>
          
          <div style={{ position: 'sticky', top: '120px', alignSelf: 'start' }}>
            <div className="label" data-reveal="fade-up">Capabilities</div>
            <h2 className="display-md delay-1" data-reveal="fade-up" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              What We Do.
            </h2>
            <p className="body-lg delay-2" data-reveal="fade-up" style={{ maxWidth: '400px' }}>
              We blend creative vision with deep technical expertise to build products that stand out and perform beautifully.
            </p>
          </div>

          <div>
            <div className="divider" style={{ marginBottom: '2rem' }}></div>
            {SERVICES.map((s, i) => (
              <div key={i} data-reveal="fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div 
                  style={{ 
                    display: 'flex', 
                    gap: '2rem', 
                    padding: '3rem 0', 
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    transition: 'opacity 0.4s ease'
                  }}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="label" style={{ flexShrink: 0, marginTop: '0.5rem', opacity: activeIndex === i ? 1 : 0.4, transition: 'opacity 0.4s ease' }}>{s.n}</div>
                  <div style={{ flex: 1 }}>
                    <h3 className="display-md" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', color: activeIndex === i ? 'var(--accent)' : 'var(--fg)', transition: 'color 0.4s ease' }}>{s.title}</h3>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateRows: activeIndex === i ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)'
                    }}>
                      <div style={{ overflow: 'hidden' }}>
                        <p className="body-lg" style={{ paddingTop: '1.5rem', maxWidth: '500px', opacity: activeIndex === i ? 1 : 0, transition: 'opacity 0.5s ease', transitionDelay: activeIndex === i ? '0.2s' : '0s' }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
