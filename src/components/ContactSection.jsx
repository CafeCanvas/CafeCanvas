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
    setSubmitStatus(null);
    
    try {
      const formDataToSend = new FormData();
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ea367075-b543-44ec-85ba-201932942b62';
      formDataToSend.append('access_key', accessKey);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('business_name', formData.businessName);
      formDataToSend.append('requirements', formData.requirements);
      formDataToSend.append('subject', 'New Contact Form Submission from CafeCanvas');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          requirements: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
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
            {/* Web3Forms hidden fields */}
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ea367075-b543-44ec-85ba-201932942b62'} />
            <input type="hidden" name="subject" value="New Contact Form Submission from CafeCanvas" />
            <input type="hidden" name="from_name" value="CafeCanvas Contact Form" />
            
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
            
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
                placeholder="+91 87918 04428"
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
                  <p className="body-medium">
                    <span style={{ color: '#8B4513', fontWeight: '500' }}>Rachit:</span> 
                    <a href="tel:+918791804428" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem' }}>+91 87918 04428</a>
                  </p>
                  <p className="body-medium">
                    <span style={{ color: '#8B4513', fontWeight: '500' }}>Arman:</span> 
                    <a href="tel:+919548784462" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '0.5rem' }}>+91 9548784462</a>
                  </p>
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
                  <p className="body-medium">cafe.canvas0@gmail.com</p>
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
                  <p className="body-medium">Mathura 281001</p>
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
            
            <div style={{
              background: 'var(--bg-section)',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginTop: '1rem'
            }}>
              <h4 className="heading-3 mb-3 text-coffee">Follow Us</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a 
                  href="https://www.instagram.com/cafe._canvas/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  aria-label="Follow us on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/cafecanvas0/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: '#0077B5',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;