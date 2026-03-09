import React, { useEffect, useState } from 'react';
import { ArrowRight, Smartphone, Users, TrendingUp, Sparkles, Rocket, Building2, Stethoscope, ShoppingBag, GraduationCap, Briefcase, Utensils } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndustries = () => {
    const element = document.getElementById('industries');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { icon: <Users size={24} />, number: "25+", label: "Clients Served" },
    { icon: <Building2 size={24} />, number: "10+", label: "Industries" },
    { icon: <TrendingUp size={24} />, number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <div className="hero-background-elements">
        <div className="floating-element shape-1" style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}>
          <Rocket size={48} />
        </div>
        <div className="floating-element shape-2" style={{
          position: 'absolute',
          top: '70%',
          right: '10%',
          opacity: 0.15,
          animation: 'float 8s ease-in-out infinite reverse',
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
        }}>
          <Stethoscope size={32} />
        </div>
        <div className="floating-element shape-3" style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          opacity: 0.08,
          animation: 'float 7s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`
        }}>
          <ShoppingBag size={64} />
        </div>

        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1" style={{
          position: 'absolute',
          top: '20%',
          left: '80%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          animation: 'pulse-slow 4s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }} />
        <div className="gradient-orb orb-2" style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110, 63, 40, 0.08) 0%, transparent 70%)',
          animation: 'pulse-slow 5s ease-in-out infinite reverse',
          transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`
        }} />
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        {/* Announcement Badge */}
        <div className={`hero-announcement ${isVisible ? 'slide-in-down' : ''}`}>
          <Sparkles size={16} style={{ color: 'var(--orange-accent)' }} />
          <span className="body-small" style={{ fontWeight: '600', color: 'var(--coffee-dark)' }}>
            🚀 Digital Transformation for Every Industry
          </span>
        </div>

        {/* Main Heading */}
        <div className={`${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="heading-hero mb-4" style={{
            color: 'var(--coffee-dark)',
            position: 'relative'
          }}>
            Your Vision.{' '}
            <span style={{
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--coffee-dark) 0%, var(--orange-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Canvas.
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '4px',
                background: 'var(--orange-accent)',
                borderRadius: '2px',
                animation: isVisible ? 'expand-width 1.5s ease-out 0.5s both' : ''
              }} />
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className={`${isVisible ? 'fade-in-up delay-1' : ''}`}>
          <p className="body-large mb-4" style={{
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: '500',
            color: 'var(--text-secondary)'
          }}>
            We build digital experiences that transform businesses across <strong>Healthcare, Retail, Real Estate, Education</strong>, and beyond.
          </p>
        </div>

        {/* Description */}
        <div className={`${isVisible ? 'fade-in-up delay-2' : ''}`}>
          <p className="body-medium mb-5" style={{
            maxWidth: '800px',
            margin: '0 auto 3rem',
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}>
            From <strong style={{ color: 'var(--orange-accent)' }}>clinic websites</strong> to <strong style={{ color: 'var(--orange-accent)' }}>e-commerce platforms</strong>,
            from <strong style={{ color: 'var(--orange-accent)' }}>ERP systems</strong> to <strong style={{ color: 'var(--orange-accent)' }}>brand identities</strong> —
            CafeCanvas is the creative partner that brings your business into the digital age.
          </p>
        </div>

        {/* CTA Section */}
        <div className={`${isVisible ? 'fade-in-up delay-3' : ''}`} style={{ marginBottom: '4rem' }}>
          <div className="hero-cta-container">
            <button
              className="btn-primary creative-cta-primary"
              onClick={scrollToContact}
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} style={{ transition: 'transform 0.3s ease' }} />
            </button>

            <button
              className="btn-secondary creative-cta-secondary"
              onClick={scrollToIndustries}
            >
              <Smartphone size={18} />
              <span>Explore Industries</span>
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`${isVisible ? 'fade-in-up delay-4' : ''}`}>
          <div className="hero-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item"
                style={{
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--orange-accent)',
                  color: 'white',
                  marginBottom: '1rem',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.25)'
                }}>
                  {stat.icon}
                </div>
                <div className="heading-2" style={{
                  color: 'var(--coffee-dark)',
                  marginBottom: '0.5rem',
                  fontWeight: '700'
                }}>
                  {stat.number}
                </div>
                <div className="body-small" style={{
                  color: 'var(--text-muted)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }

        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(-30px) scale(0.8); }
          60% { opacity: 1; transform: translateY(5px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes expand-width {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes slide-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .creative-cta-primary:hover .lucide-arrow-right {
          transform: translateX(5px);
        }

        .hero-announcement {
          animation: bounce-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;