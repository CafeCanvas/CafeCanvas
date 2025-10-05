import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-section">
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="heading-1 mb-3 fade-in-up">About CaféCanvas</h2>
          <p className="body-large fade-in-up delay-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Empowering cafés and restaurants to thrive in the digital age
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div className="fade-in-up delay-1">
            <h3 className="heading-2 mb-4 text-coffee">Our Mission</h3>
            <p className="body-medium mb-4">
              At CaféCanvas, we believe that every café and restaurant deserves a strong digital presence. 
              Our mission is to bridge the gap between traditional hospitality and modern technology, 
              helping local businesses compete in today's digital marketplace.
            </p>
            <p className="body-medium mb-4">
              We specialize in creating seamless QR-based ordering systems that not only enhance the 
              customer experience but also streamline operations for business owners. From small 
              neighborhood cafés to bustling restaurants, we tailor our solutions to fit your unique needs.
            </p>
            <p className="body-medium">
              With our comprehensive approach combining web development, branding, and social media 
              management, we ensure your business doesn't just survive but thrives in the digital landscape.
            </p>
          </div>
          
          <div className="fade-in-up delay-2">
            <div className="service-card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ 
                width: '100%', 
                height: '300px', 
                background: 'linear-gradient(135deg, var(--cream) 0%, var(--bg-page) 100%)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '2px solid var(--border-light)'
              }}>
                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                  <p className="body-medium">QR Ordering Website Mockup</p>
                  <p className="body-small">Modern, responsive design</p>
                </div>
              </div>
              <h4 className="heading-3 mb-2">Sample QR Ordering System</h4>
              <p className="body-small">
                See how we transform traditional menus into interactive digital experiences
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
            boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)'
          }}>
            <h4 className="heading-3 mb-3 text-coffee">Why Choose CaféCanvas?</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <div className="text-orange" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
                <p className="body-small"><strong>Fast Setup</strong><br/>Launch in days, not months</p>
              </div>
              <div>
                <div className="text-orange" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
                <p className="body-small"><strong>Smart Solutions</strong><br/>Technology that works for you</p>
              </div>
              <div>
                <div className="text-orange" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
                <p className="body-small"><strong>Ongoing Support</strong><br/>We're here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;