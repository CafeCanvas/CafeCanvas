import React, { useEffect, useState } from 'react';
import { ArrowRight, Coffee, Smartphone, Users, TrendingUp, Sparkles } from 'lucide-react';

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

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    { icon: <Users size={24} />, number: "24/7", label: "Dedicated Support" },
    { icon: <Coffee size={24} />, number: "100%", label: "Custom Solutions" },
    { icon: <TrendingUp size={24} />, number: "Ready", label: "To Launch" }
  ];

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <div className="hero-background-elements">
        {/* Floating Coffee Beans */}
        <div className="floating-element coffee-bean-1" style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '2rem',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}>
          ☕
        </div>
        <div className="floating-element coffee-bean-2" style={{
          position: 'absolute',
          top: '70%',
          right: '10%',
          fontSize: '1.5rem',
          opacity: 0.15,
          animation: 'float 8s ease-in-out infinite reverse',
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
        }}>
          ☕
        </div>
        <div className="floating-element coffee-bean-3" style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          fontSize: '2.5rem',
          opacity: 0.08,
          animation: 'float 7s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`
        }}>
          📱
        </div>

        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1" style={{
          position: 'absolute',
          top: '20%',
          left: '80%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 127, 80, 0.1) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(139, 69, 19, 0.08) 0%, transparent 70%)',
          animation: 'pulse-slow 5s ease-in-out infinite reverse',
          transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`
        }} />
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        {/* Announcement Badge */}
        <div className={`hero-announcement ${isVisible ? 'slide-in-down' : ''}`} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '2px solid var(--orange-accent)',
          borderRadius: '3rem',
          padding: '0.75rem 1.5rem',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(255, 127, 80, 0.2)',
          animation: isVisible ? 'bounce-in 1s ease-out' : ''
        }}>
          <Sparkles size={16} style={{ color: 'var(--orange-accent)' }} />
          <span className="body-small" style={{ fontWeight: '600', color: 'var(--coffee-dark)' }}>
            🚀 Ready to Transform Your Restaurant Digitally
          </span>
        </div>

        {/* Main Heading with Creative Typography */}
        <div className={`${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="heading-hero mb-4" style={{ 
            color: 'var(--coffee-dark)',
            position: 'relative'
          }}>
            Welcome to{' '}
            <span style={{ 
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--coffee-dark) 0%, var(--orange-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CaféCanvas
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
        
        {/* Tagline with Animation */}
        <div className={`${isVisible ? 'fade-in-up delay-1' : ''}`}>
          <p className="body-large mb-4" style={{ 
            maxWidth: '700px', 
            margin: '0 auto 2rem',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            fontWeight: '500',
            color: 'var(--text-secondary)'
          }}>
            Smart QR-based Ordering Websites for Cafés & Restaurants
          </p>
        </div>

        {/* Interactive Description */}
        <div className={`${isVisible ? 'fade-in-up delay-2' : ''}`}>
          <p className="body-medium mb-5" style={{ 
            maxWidth: '800px', 
            margin: '0 auto 3rem', 
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}>
            We help cafés and restaurants create <strong style={{ color: 'var(--orange-accent)' }}>modern, efficient digital ordering experiences</strong> 
            that boost sales and improve customer satisfaction. From QR menu systems to complete 
            digital makeovers, we've got your business covered.
          </p>
        </div>
        
        {/* Creative CTA Section */}
        <div className={`${isVisible ? 'fade-in-up delay-3' : ''}`} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <button 
              className="btn-primary creative-cta-primary"
              onClick={scrollToContact}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.2rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 40px rgba(255, 127, 80, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 127, 80, 0.3)';
              }}
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} style={{ transition: 'transform 0.3s ease' }} />
            </button>
            
            <button 
              className="btn-secondary creative-cta-secondary"
              onClick={scrollToServices}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.2rem 2rem',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'transparent';
              }}
            >
              <Smartphone size={18} />
              <span>View Our Work</span>
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`${isVisible ? 'fade-in-up delay-4' : ''}`}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
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
                  boxShadow: '0 4px 20px rgba(255, 127, 80, 0.3)'
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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