import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Coffee, Award, Clock, Smartphone } from 'lucide-react';

const InteractiveStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <Users size={28} />,
      number: 100,
      suffix: '%',
      label: 'Commitment',
      color: '#FF6B6B',
      description: 'Dedicated to your success'
    },
    {
      icon: <Coffee size={28} />,
      number: 24,
      suffix: '/7', 
      label: 'Support Available',
      color: '#4ECDC4',
      description: 'Always here when needed'
    },
    {
      icon: <TrendingUp size={28} />,
      number: 5,
      suffix: '+',
      label: 'Years Experience',
      color: '#45B7D1',
      description: 'Industry expertise'
    },
    {
      icon: <Clock size={28} />,
      number: 1,
      suffix: 'wk',
      label: 'Quick Launch',
      color: '#96CEB4',
      description: 'From concept to live'
    },
    {
      icon: <Award size={28} />,
      number: 100,
      suffix: '%',
      label: 'Custom Solutions',
      color: '#FECA57',
      description: 'Tailored to your needs'
    },
    {
      icon: <Smartphone size={28} />,
      number: 1,
      suffix: 'st',
      label: 'Your Success',
      color: '#FF9FF3',
      description: 'Our top priority'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start animating numbers
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateNumber(stat.number, `stat-${index}`, stat.suffix);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumber = (target, key, suffix) => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 50);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setAnimatedStats(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }
    }, 50);
  };

  // Testimonials removed as requested

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: 'linear-gradient(135deg, var(--coffee-dark) 0%, #2a1810 100%)',
        color: 'white',
        padding: '6rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255, 127, 80, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(245, 245, 220, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 127, 80, 0.05) 0%, transparent 50%)
        `,
        animation: 'pulse-bg 8s ease-in-out infinite'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className={`heading-1 mb-3 ${isVisible ? 'fade-in-up' : ''}`} style={{ color: 'white' }}>
            Our Promise to You
          </h2>
          <p className={`body-large ${isVisible ? 'fade-in-up delay-1' : ''}`} style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Starting fresh with a commitment to excellence and your success
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`${isVisible ? 'fade-in-up delay-2' : ''}`} style={{ marginBottom: '5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '2rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Glowing border effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: stat.color,
                  borderRadius: '2rem 2rem 0 0'
                }} />
                
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}aa 100%)`,
                  color: 'white',
                  marginBottom: '1.5rem',
                  boxShadow: `0 10px 30px ${stat.color}40`
                }}>
                  {stat.icon}
                </div>
                
                <div className="heading-1" style={{ 
                  color: 'white', 
                  marginBottom: '0.5rem',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700'
                }}>
                  {animatedStats[`stat-${index}`] || 0}{stat.suffix}
                </div>
                
                <div className="heading-3" style={{ 
                  color: 'white', 
                  marginBottom: '0.75rem',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
                
                <p className="body-small" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* End of Stats Section */}
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes pulse-bg {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default InteractiveStats;