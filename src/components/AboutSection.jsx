import React from 'react';
import CloudinaryVideo from './CloudinaryVideo';

const AboutSection = () => {
  return (
    <section id="about" className="bg-section">
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="heading-1 mb-3 fade-in-up">About CafeCanvas</h2>
          <p className="body-large fade-in-up delay-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Empowering businesses to thrive in the digital age
          </p>
        </div>

        <div className="about-grid">
          <div className="fade-in-up delay-1">
            <h3 className="heading-2 mb-4 text-coffee">Our Mission</h3>
            <p className="body-medium mb-4">
              At CafeCanvas, we believe that every business deserves a strong digital presence.
              Our mission is to bridge the gap between traditional operations and modern technology,
              helping companies compete in today's digital marketplace.
            </p>
            <p className="body-medium mb-4">
              We specialize in creating seamless custom software and websites that not only enhance the
              customer experience but also streamline operations for business owners. From startups
              to established enterprises, we tailor our solutions to fit your unique needs.
            </p>
            <p className="body-medium">
              With our comprehensive approach combining web development, branding, and strategic
              marketing, we ensure your business doesn't just survive but thrives in the digital landscape.
            </p>
          </div>

          <div className="fade-in-up delay-2">
            <div className="service-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <CloudinaryVideo />
              <h4 className="heading-3 mb-2">Digital Innovation in Action</h4>
              <p className="body-small">
                See how our solutions transform business operations
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 fade-in-up delay-3">
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 4px 20px rgba(14, 165, 233, 0.1)'
          }}>
            <h4 className="heading-3 mb-3 text-coffee">Why Choose CafeCanvas?</h4>
            <div className="features-grid">
              <div>
                <div className="text-orange" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
                <p className="body-small"><strong>Fast Setup</strong><br />Launch in days, not months</p>
              </div>
              <div>
                <div className="text-orange" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
                <p className="body-small"><strong>Smart Solutions</strong><br />Technology that works for you</p>
              </div>
              <div>
                <div className="text-orange" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
                <p className="body-small"><strong>Ongoing Support</strong><br />We're here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;