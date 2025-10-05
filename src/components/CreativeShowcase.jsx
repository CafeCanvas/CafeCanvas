import React, { useState, useEffect } from 'react';
import { Zap, Target, Rocket } from 'lucide-react';

const CreativeShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const transformationSteps = [
    {
      title: "Traditional Menu",
      description: "Static, printed menus that get outdated",
      icon: "📋",
      color: "#8B4513"
    },
    {
      title: "QR Code Magic",
      description: "Instant digital transformation",
      icon: "📱", 
      color: "#FF7F50"
    },
    {
      title: "Smart Ordering",
      description: "Seamless customer experience",
      icon: "⚡",
      color: "#32CD32"
    },
    {
      title: "Business Growth",
      description: "Increased revenue & efficiency",
      icon: "📈",
      color: "#FFD700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % transformationSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [transformationSteps.length]);

  const features = [
    {
      icon: <Target size={32} />,
      title: "Precision Marketing",
      description: "Data-driven insights to target your ideal customers",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)"
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Get your digital presence live quickly and efficiently",
      gradient: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)"
    },
    {
      icon: <Rocket size={32} />,
      title: "Growth Focused",
      description: "Solutions designed to scale with your business",
      gradient: "linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)"
    }
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #FFF9F2 0%, #F5F5DC 100%)', 
      padding: '5rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 127, 80, 0.05) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.05) 0%, transparent 50%)`,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Interactive Transformation Demo */}
        <div className="text-center mb-5">
          <h2 className="heading-1 mb-3 fade-in-up">Watch The Magic Happen</h2>
          <p className="body-large fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
            See how we transform traditional restaurant operations into modern digital experiences
          </p>
        </div>

        <div className="fade-in-up delay-2" style={{ marginBottom: '5rem' }}>
          <div style={{
            background: 'white',
            borderRadius: '2rem',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 127, 80, 0.1)',
            position: 'relative'
          }}>
            {/* Auto-cycling indicator */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '2px solid var(--orange-accent)',
                borderRadius: '3rem',
                padding: '0.75rem 1.5rem',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(255, 127, 80, 0.2)'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--orange-accent)',
                  animation: 'pulse 2s infinite'
                }} />
                <span className="body-small" style={{ fontWeight: '600', color: 'var(--coffee-dark)' }}>
                  Live Transformation Demo
                </span>
              </div>
            </div>

            {/* Transformation Steps */}
            <div className="transformation-steps-grid">
              {transformationSteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    background: index === currentStep ? 
                      `linear-gradient(135deg, ${step.color}15 0%, ${step.color}25 100%)` : 
                      'rgba(248, 241, 228, 0.3)',
                    border: index === currentStep ? 
                      `3px solid ${step.color}` : 
                      '1px solid rgba(139, 69, 19, 0.1)',
                    transform: index === currentStep ? 'scale(1.1) translateY(-10px)' : 'scale(1)',
                    boxShadow: index === currentStep ? 
                      `0 15px 40px ${step.color}30` : 
                      '0 4px 20px rgba(139, 69, 19, 0.05)'
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    transform: index === currentStep ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {step.icon}
                  </div>
                  <h4 className="heading-3 mb-2" style={{ 
                    color: index === currentStep ? step.color : 'var(--coffee-dark)'
                  }}>
                    {step.title}
                  </h4>
                  <p className="body-small" style={{ 
                    color: index === currentStep ? 'var(--coffee-dark)' : 'var(--text-muted)'
                  }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div style={{
              marginTop: '3rem',
              background: 'rgba(139, 69, 19, 0.1)',
              borderRadius: '1rem',
              height: '8px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                background: `linear-gradient(90deg, var(--orange-accent), var(--coffee-medium))`,
                height: '100%',
                borderRadius: '1rem',
                width: `${((currentStep + 1) / transformationSteps.length) * 100}%`,
                transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="fade-in-up delay-3">
          <h3 className="heading-2 text-center mb-4">Why We're Different</h3>
          <div className="features-showcase-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(139, 69, 19, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.1)';
                }}
              >
                {/* Gradient Background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: feature.gradient
                }} />
                
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: feature.gradient,
                  color: 'white',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}>
                  {feature.icon}
                </div>
                
                <h4 className="heading-3 mb-3">{feature.title}</h4>
                <p className="body-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;