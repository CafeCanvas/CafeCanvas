import React, { useState, useEffect, useRef } from 'react';
import { Users, Zap, Award, Headphones, Palette, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whyChooseUs = [
    {
      icon: <Users size={26} />,
      title: "Tailored Solutions",
      description: "Every business is unique. We create custom solutions that perfectly fit your model, target audience, and growth goals.",
      accent: '#F97316',
      number: '01'
    },
    {
      icon: <Zap size={26} />,
      title: "Quick Implementation",
      description: "Get your digital presence up and running fast. Our streamlined process ensures you're reaching clients digitally in no time.",
      accent: '#4ECDC4',
      number: '02'
    },
    {
      icon: <Award size={26} />,
      title: "Proven Results",
      description: "Our clients see real improvements in efficiency, customer satisfaction, and revenue. We deliver solutions that actually work.",
      accent: '#6c5ce7',
      number: '03'
    },
    {
      icon: <Headphones size={26} />,
      title: "Ongoing Support",
      description: "We don't disappear after launch. Our team provides continued support, updates, and guidance to ensure your long-term success.",
      accent: '#FF6B6B',
      number: '04'
    },
    {
      icon: <Palette size={26} />,
      title: "Stunning Design",
      description: "We craft pixel-perfect interfaces that captivate your audience, blending modern aesthetics with intuitive user experiences.",
      accent: '#a29bfe',
      number: '05'
    },
    {
      icon: <BarChart3 size={26} />,
      title: "SEO & Growth",
      description: "Every project is built with growth in mind — optimized for search engines, performance, and conversions from day one.",
      accent: '#2ecc71',
      number: '06'
    }
  ];

  return (
    <>
      <style>{`
        .why-choose-section {
          padding: 6rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .why-choose-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── Header ── */
        .why-choose-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }

        .why-choose-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1.1rem;
          border-radius: 3rem;
          background: rgba(249, 115, 22, 0.07);
          border: 1.5px solid rgba(249, 115, 22, 0.18);
          color: #F97316;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.04em;
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .why-choose-label.show {
          animation: wcFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .why-choose-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #29150B;
          line-height: 1.15;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(30px);
        }

        .why-choose-title.show {
          animation: wcFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }

        .why-choose-title .highlight {
          background: linear-gradient(135deg, #F97316, #6E3F28);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .why-choose-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 2vw, 1.1rem);
          color: #8B6B58;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(25px);
        }

        .why-choose-subtitle.show {
          animation: wcFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }

        /* ── Grid ── */
        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        /* ── Card ── */
        .why-card {
          position: relative;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 1.25rem;
          padding: 2.25rem 1.75rem 2rem;
          border: 1px solid rgba(110, 63, 40, 0.07);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
          opacity: 0;
          transform: translateY(35px);
        }

        .why-card.show {
          animation: wcCardIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .why-card:nth-child(1).show { animation-delay: 0.1s; }
        .why-card:nth-child(2).show { animation-delay: 0.18s; }
        .why-card:nth-child(3).show { animation-delay: 0.26s; }
        .why-card:nth-child(4).show { animation-delay: 0.34s; }
        .why-card:nth-child(5).show { animation-delay: 0.42s; }
        .why-card:nth-child(6).show { animation-delay: 0.50s; }

        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(62, 33, 19, 0.1);
          border-color: transparent;
          background: rgba(255, 255, 255, 0.8);
        }

        /* Accent stripe on hover – animated from left */
        .why-card-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 1.25rem 0 0 1.25rem;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .why-card:hover .why-card-stripe {
          transform: scaleY(1);
        }

        /* Step number */
        .why-card-number {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-family: 'Georgia', serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          opacity: 0.04;
          color: #3E2113;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .why-card:hover .why-card-number {
          opacity: 0.08;
        }

        /* Icon */
        .why-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
          position: relative;
          z-index: 1;
        }

        .why-card:hover .why-card-icon {
          transform: scale(1.08) rotate(-2deg);
        }

        .why-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 650;
          color: #29150B;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
        }

        .why-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          line-height: 1.65;
          color: #8B6B58;
          margin: 0;
        }

        /* ── CTA Card ── */
        .why-cta-section {
          margin-top: 3.5rem;
          opacity: 0;
          transform: translateY(25px);
        }

        .why-cta-section.show {
          animation: wcFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }

        .why-cta-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 1.5rem;
          padding: 3rem 2.5rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          border: 2px solid rgba(249, 115, 22, 0.18);
          box-shadow: 0 8px 40px rgba(249, 115, 22, 0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .why-cta-card::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .why-cta-card::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(110, 63, 40, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .why-cta-card:hover {
          border-color: rgba(249, 115, 22, 0.35);
          box-shadow: 0 12px 50px rgba(249, 115, 22, 0.12);
        }

        .why-cta-title {
          font-family: 'Georgia', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.6rem);
          font-weight: 600;
          color: #3E2113;
          margin: 0 0 0.75rem 0;
          position: relative;
          z-index: 1;
        }

        .why-cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #8B6B58;
          max-width: 560px;
          margin: 0 auto 1.75rem;
          position: relative;
          z-index: 1;
        }

        .why-cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        /* ── Keyframes ── */
        @keyframes wcFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wcCardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .why-choose-section {
            padding: 4rem 0.75rem;
          }

          .why-choose-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .why-card {
            padding: 1.75rem 1.25rem 1.5rem;
          }

          .why-cta-card {
            padding: 2rem 1.5rem;
          }

          .why-choose-header {
            margin-bottom: 3rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="pricing" className="why-choose-section">
        <div className="why-choose-inner">
          {/* Header */}
          <div className="why-choose-header">
            <div className={`why-choose-label ${isVisible ? 'show' : ''}`}>
              <Sparkles size={14} />
              Why Us
            </div>
            <h2 className={`why-choose-title ${isVisible ? 'show' : ''}`}>
              Why Choose <span className="highlight">CafeCanvas</span>
            </h2>
            <p className={`why-choose-subtitle ${isVisible ? 'show' : ''}`}>
              We understand the business landscape and create digital solutions that truly make a difference for your growth
            </p>
          </div>

          {/* Grid — 3×2 */}
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`why-card ${isVisible ? 'show' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Left accent stripe */}
                <div
                  className="why-card-stripe"
                  style={{ background: item.accent }}
                />

                {/* Watermark number */}
                <span className="why-card-number">{item.number}</span>

                {/* Icon */}
                <div
                  className="why-card-icon"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}, ${item.accent}cc)`,
                    boxShadow: hoveredCard === index
                      ? `0 8px 24px ${item.accent}40`
                      : `0 4px 12px ${item.accent}20`,
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`why-cta-section ${isVisible ? 'show' : ''}`}>
            <div className="why-cta-card">
              <h3 className="why-cta-title">Ready to Transform Your Business?</h3>
              <p className="why-cta-desc">
                Every business has different needs, goals, and budgets. Let's discuss your specific requirements
                and create a custom solution that fits perfectly with your vision.
              </p>
              <div className="why-cta-buttons">
                <button className="btn-primary" onClick={scrollToContact}>
                  Get Custom Quote <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
                <button className="btn-secondary" onClick={scrollToContact}>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;