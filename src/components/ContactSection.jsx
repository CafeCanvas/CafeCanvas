import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API call
      console.log('Form submission:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-5">
        <h2 className="heading-1 mb-3 fade-in-up">Get In Touch</h2>
        <p className="body-large fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Ready to transform your café or restaurant? Let's discuss your project and create something amazing together.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        {/* Contact Form */}
        <div className="fade-in-up delay-1">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="heading-3 mb-4 text-coffee">Send us a message</h3>
            
            {submitStatus === 'success' && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                border: '1px solid #c3e6cb'
              }}>
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                border: '1px solid #f5c6cb'
              }}>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                required
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="businessName" className="form-label">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Your café or restaurant name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="requirements" className="form-label">What do you need help with? *</label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                className="form-textarea"
                required
                placeholder="Tell us about your project, goals, and what services you're interested in..."
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="fade-in-up delay-2">
          <div className="contact-form" style={{ height: 'fit-content' }}>
            <h3 className="heading-3 mb-4 text-coffee">Contact Information</h3>
            
            <div className="mb-4">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--orange-accent)',
                  color: 'white'
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <p className="body-small text-muted">Phone</p>
                  <p className="body-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--orange-accent)',
                  color: 'white'
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <p className="body-small text-muted">Email</p>
                  <p className="body-medium">hello@cafecanvas.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--orange-accent)',
                  color: 'white'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="body-small text-muted">Address</p>
                  <p className="body-medium">123 Digital Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            
            <div style={{
              background: 'var(--bg-section)',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginTop: '2rem'
            }}>
              <h4 className="heading-3 mb-2 text-coffee">Business Hours</h4>
              <div className="body-small">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div style={{
              background: 'var(--bg-section)',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginTop: '1rem'
            }}>
              <h4 className="heading-3 mb-2 text-coffee">Quick Response</h4>
              <p className="body-small">
                We typically respond to all inquiries within 24 hours. 
                For urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;