import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  useReveal();

  return (
    <>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '100px' }}>
          
          <div className="label" data-reveal="fade-up" style={{ marginBottom: '2rem', letterSpacing: '0.2em' }}>
            Welcome to CafeCanvas Studio
          </div>
          
          <h1 className="display-lg" style={{ margin: '0 auto', maxWidth: '1100px', paddingBottom: '2rem' }}>
            <div style={{ overflow: 'hidden' }}><div data-reveal="fade-up">Crafting Digital</div></div>
            <div style={{ overflow: 'hidden' }}>
              <div data-reveal="fade-up" className="delay-1" style={{ color: 'var(--accent)' }}>
                Experiences That
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}><div data-reveal="fade-up" className="delay-2">Elevate Brands.</div></div>
          </h1>
          
          <p className="body-xl" data-reveal="fade-up" style={{ margin: '0 auto', maxWidth: '700px', marginBottom: '3rem', transitionDelay: '0.3s' }}>
            We are an award-winning digital agency specializing in high-end websites, scalable platforms, and bespoke branding for forward-thinking companies.
          </p>
          
          <div data-reveal="fade-up" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', transitionDelay: '0.4s' }}>
            <a href="#work" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
              <span>Explore Our Work</span>
              <ArrowUpRight size={20} />
            </a>
          </div>

        </div>
        
        {/* Elegant subtle background mesh */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 10%, rgba(212, 93, 58, 0.08) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />
      </section>

      {/* Marquee for social proof */}
      <div className="marquee-container" data-reveal="fade-up">
        <div className="marquee-track">
          <span className="marquee-item">VANGUARD MEDICAL</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          <span className="marquee-item">OMNI RETAIL</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          <span className="marquee-item">NEXUS PROPERTIES</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          <span className="marquee-item">LUMINA TECH</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          
          <span className="marquee-item">VANGUARD MEDICAL</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          <span className="marquee-item">OMNI RETAIL</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          <span className="marquee-item">NEXUS PROPERTIES</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
          <span className="marquee-item">LUMINA TECH</span>
          <span className="marquee-item" style={{ color: 'var(--accent)', WebkitTextStroke: '0' }}>✦</span>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
