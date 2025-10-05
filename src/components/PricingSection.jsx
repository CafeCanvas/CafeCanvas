import React from 'react';
import { Users, Zap, Award, Headphones } from 'lucide-react';

const PricingSection = () => {
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

  const whyChooseUs = [
    {
      icon: <Users size={48} />,
      title: "Tailored Solutions",
      description: "Every café and restaurant is unique. We create custom solutions that perfectly fit your business model, target audience, and growth goals."
    },
    {
      icon: <Zap size={48} />,
      title: "Quick Implementation",
      description: "Get your digital presence up and running fast. Our streamlined process ensures you're serving customers digitally in no time."
    },
    {
      icon: <Award size={48} />,
      title: "Proven Results",
      description: "Our clients see real improvements in efficiency, customer satisfaction, and revenue. We deliver solutions that actually work."
    },
    {
      icon: <Headphones size={48} />,
      title: "Ongoing Support",
      description: "We don't disappear after launch. Our team provides continued support, updates, and guidance to ensure your long-term success."
    }
  ];

  return (
    <section id="pricing" className="section-container">
      <div className="text-center mb-5">
        <h2 className="heading-1 mb-3 fade-in-up">Why Choose CaféCanvas</h2>
        <p className="body-large fade-in-up delay-1" style={{ maxWidth: '700px', margin: '0 auto' }}>
          We understand the hospitality industry and create digital solutions that truly make a difference for your business
        </p>
      </div>
      
      <div className="grid-services">
        {whyChooseUs.map((item, index) => (
          <div 
            key={index} 
            className={`service-card fade-in-up delay-${index % 2 + 1}`}
          >
            <div className="text-orange mb-3">
              {item.icon}
            </div>
            <h3 className="heading-3 mb-3">{item.title}</h3>
            <p className="body-medium">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-5 fade-in-up delay-3">
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 8px 30px rgba(139, 69, 19, 0.1)',
          border: '2px solid var(--orange-accent)'
        }}>
          <h3 className="heading-2 mb-3 text-coffee">Ready to Transform Your Business?</h3>
          <p className="body-medium mb-4" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Every business has different needs, goals, and budgets. Let's discuss your specific requirements 
            and create a custom solution that fits perfectly with your vision and objectives.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={scrollToContact}>
              Get Custom Quote
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;