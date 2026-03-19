import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TrendingUp, Users, Clock, Award, Smartphone, Handshake, ArrowRight, Shield, Zap, Heart } from 'lucide-react';

const InteractiveStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const promises = [
    {
      icon: <Heart size={24} />,
      number: 100,
      suffix: '%',
      title: 'Commitment',
      tagline: 'Dedicated to your success',
      description: 'Every project gets our full attention. We treat your business like our own.',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #ee5a24 100%)',
      glowColor: 'rgba(255, 107, 107, 0.3)',
      accentColor: '#FF6B6B',
    },
    {
      icon: <Shield size={24} />,
      number: 24,
      suffix: '/7',
      title: 'Support',
      tagline: 'Always here when you need us',
      description: 'Round-the-clock assistance to keep your business running without interruption.',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #2ecc71 100%)',
      glowColor: 'rgba(78, 205, 196, 0.3)',
      accentColor: '#4ECDC4',
    },
    {
      icon: <TrendingUp size={24} />,
      number: 5,
      suffix: '+',
      title: 'Years Experience',
      tagline: 'Proven industry expertise',
      description: 'Half a decade of crafting digital solutions that drive real business results.',
      gradient: 'linear-gradient(135deg, #45B7D1 0%, #6c5ce7 100%)',
      glowColor: 'rgba(69, 183, 209, 0.3)',
      accentColor: '#45B7D1',
    },
    {
      icon: <Zap size={24} />,
      number: 1,
      suffix: 'wk',
      title: 'Quick Launch',
      tagline: 'From concept to live',
      description: 'Rapid deployment without cutting corners — speed meets quality.',
      gradient: 'linear-gradient(135deg, #F97316 0%, #FECA57 100%)',
      glowColor: 'rgba(249, 115, 22, 0.3)',
      accentColor: '#F97316',
    },
    {
      icon: <Award size={24} />,
      number: 100,
      suffix: '%',
      title: 'Custom Solutions',
      tagline: 'Tailored to your needs',
      description: 'No cookie-cutter templates — every project is a unique creation for your brand.',
      gradient: 'linear-gradient(135deg, #a29bfe 0%, #fd79a8 100%)',
      glowColor: 'rgba(162, 155, 254, 0.3)',
      accentColor: '#a29bfe',
    },
    {
      icon: <Handshake size={24} />,
      number: 1,
      suffix: 'st',
      title: 'Your Success',
      tagline: 'Our top priority',
      description: 'We measure our success by yours — every decision is made with your goals in mind.',
      gradient: 'linear-gradient(135deg, #6E3F28 0%, #F97316 100%)',
      glowColor: 'rgba(249, 115, 22, 0.3)',
      accentColor: '#F97316',
    }
  ];

  const animateNumber = useCallback((target, key) => {
    let start = 0;
    const duration = 1800;
    const steps = Math.max(30, target);
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setAnimatedValues(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(start) }));
      }
    }, stepTime);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          promises.forEach((promise, index) => {
            setTimeout(() => {
              animateNumber(promise.number, `promise-${index}`);
            }, index * 150 + 400);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animateNumber]);

  return (
    <>
      <style>{`
        .promise-section {
          position: relative;
          padding: 7rem 1rem;
          margin: 0 auto;
          overflow: hidden;
        }

        .promise-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── Header ── */
        .promise-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .promise-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: 3rem;
          background: rgba(249, 115, 22, 0.08);
          border: 1.5px solid rgba(249, 115, 22, 0.2);
          color: #F97316;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.03em;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .promise-badge.visible {
          animation: promiseFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .promise-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #29150B;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(30px);
        }

        .promise-heading.visible {
          animation: promiseFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }

        .promise-heading .accent {
          background: linear-gradient(135deg, #F97316, #6E3F28);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .promise-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: #8B6B58;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(30px);
        }

        .promise-subtext.visible {
          animation: promiseFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }

        /* ── Bento Grid ── */
        .promise-bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 1.25rem;
        }

        /* ── Card ── */
        .promise-card {
          position: relative;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 1.5rem;
          padding: 2rem 1.75rem;
          border: 1px solid rgba(110, 63, 40, 0.08);
          cursor: pointer;
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
        }

        .promise-card.visible {
          animation: promiseCardIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .promise-card:nth-child(1).visible { animation-delay: 0.15s; }
        .promise-card:nth-child(2).visible { animation-delay: 0.25s; }
        .promise-card:nth-child(3).visible { animation-delay: 0.35s; }
        .promise-card:nth-child(4).visible { animation-delay: 0.45s; }
        .promise-card:nth-child(5).visible { animation-delay: 0.55s; }
        .promise-card:nth-child(6).visible { animation-delay: 0.65s; }

        /* Glow line at top */
        .promise-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 1.5rem 1.5rem 0 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .promise-card:hover::before {
          opacity: 1;
        }

        .promise-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(62, 33, 19, 0.1);
          border-color: transparent;
        }

        /* Card glow background on hover */
        .promise-card-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          filter: blur(50px);
        }

        .promise-card:hover .promise-card-glow {
          opacity: 0.5;
        }

        /* ── Icon ── */
        .promise-icon-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .promise-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }

        .promise-card:hover .promise-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        /* ── Stat Number ── */
        .promise-stat {
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
          margin-bottom: 0.25rem;
        }

        .promise-number {
          font-family: 'Georgia', serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: #29150B;
          transition: color 0.3s ease;
        }

        .promise-suffix {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #8B6B58;
        }

        .promise-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #563624;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.75rem;
        }

        .promise-divider {
          width: 30px;
          height: 2px;
          border-radius: 2px;
          margin-bottom: 0.75rem;
          transition: width 0.35s ease;
        }

        .promise-card:hover .promise-divider {
          width: 50px;
        }

        .promise-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          line-height: 1.6;
          color: #8B6B58;
          margin: 0;
        }

        /* ── CTA Banner ── */
        .promise-cta-banner {
          margin-top: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 2.5rem 3rem;
          background: linear-gradient(135deg, #3E2113 0%, #5a3424 50%, #3E2113 100%);
          border-radius: 1.5rem;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .promise-cta-banner.visible {
          animation: promiseFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
        }

        .promise-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 60%),
                      radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: ctaPulse 6s ease-in-out infinite;
        }

        .promise-cta-text {
          position: relative;
          z-index: 2;
        }

        .promise-cta-text h3 {
          font-family: 'Georgia', serif;
          font-size: clamp(1.25rem, 2.5vw, 1.6rem);
          font-weight: 600;
          color: white;
          margin: 0 0 0.35rem 0;
        }

        .promise-cta-text p {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .promise-cta-btn {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2rem;
          background: linear-gradient(135deg, #F97316 0%, #e67e22 100%);
          color: white;
          border: none;
          border-radius: 2rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.35s ease;
          white-space: nowrap;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.35);
        }

        .promise-cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 35px rgba(249, 115, 22, 0.5);
        }

        .promise-cta-btn .arrow-icon {
          transition: transform 0.3s ease;
        }

        .promise-cta-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* ── Animations ── */
        @keyframes promiseFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes promiseCardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .promise-bento {
            grid-template-columns: repeat(2, 1fr);
          }

          .promise-cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 1.25rem;
          }
        }

        @media (max-width: 600px) {
          .promise-section {
            padding: 4rem 0.75rem;
          }

          .promise-bento {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .promise-card {
            padding: 1.5rem 1.25rem;
          }

          .promise-number {
            font-size: 2rem;
          }

          .promise-header {
            margin-bottom: 3rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="promise-section" id="our-promise">
        <div className="promise-inner">
          {/* Header */}
          <div className="promise-header">
            <div className={`promise-badge ${isVisible ? 'visible' : ''}`}>
              <Handshake size={15} />
              Our Commitment
            </div>
            <h2 className={`promise-heading ${isVisible ? 'visible' : ''}`}>
              Our Promise <span className="accent">to You</span>
            </h2>
            <p className={`promise-subtext ${isVisible ? 'visible' : ''}`}>
              Starting fresh with a commitment to excellence — we don't just build websites, we build long-term partnerships.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="promise-bento">
            {promises.map((promise, index) => (
              <div
                key={index}
                className={`promise-card ${isVisible ? 'visible' : ''}`}
                style={{ '--accent': promise.accentColor }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Top glow line */}
                <div
                  className="promise-card::before"
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    background: promise.gradient,
                    borderRadius: '1.5rem 1.5rem 0 0',
                    opacity: activeCard === index ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Background glow */}
                <div
                  className="promise-card-glow"
                  style={{ background: promise.glowColor }}
                />

                {/* Icon */}
                <div className="promise-icon-wrapper">
                  <div
                    className="promise-icon"
                    style={{
                      background: promise.gradient,
                      boxShadow: activeCard === index
                        ? `0 8px 25px ${promise.glowColor}`
                        : '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  >
                    {promise.icon}
                  </div>
                </div>

                {/* Stat */}
                <div className="promise-stat">
                  <span className="promise-number" style={{
                    color: activeCard === index ? promise.accentColor : '#29150B',
                  }}>
                    {animatedValues[`promise-${index}`] ?? 0}
                  </span>
                  <span className="promise-suffix">{promise.suffix}</span>
                </div>

                <div className="promise-title">{promise.title}</div>

                <div
                  className="promise-divider"
                  style={{ background: promise.gradient }}
                />

                <p className="promise-desc">{promise.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className={`promise-cta-banner ${isVisible ? 'visible' : ''}`}>
            <div className="promise-cta-text">
              <h3>Ready to experience the difference?</h3>
              <p>Let's start your project with a free consultation</p>
            </div>
            <a href="#contact" className="promise-cta-btn">
              Get Started <ArrowRight size={18} className="arrow-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveStats;