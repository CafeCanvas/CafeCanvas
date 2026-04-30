import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const data = new FormData();
      data.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ea367075-b543-44ec-85ba-201932942b62');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      data.append('subject', 'New Lead from CafeCanvas');

      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw' }}>
          
          <div>
            <div className="label" data-reveal="fade-up">Let's Talk</div>
            <h2 className="display-md delay-1" data-reveal="fade-up" style={{ marginTop: '1rem', marginBottom: '4rem' }}>
              Have an idea? <br/><span style={{ color: 'var(--accent)' }}>Tell us about it.</span>
            </h2>
            
            <div data-reveal="fade-up" className="delay-2">
              <div className="label" style={{ color: 'var(--fg-muted)', marginBottom: '0.5rem' }}>Drop us a line</div>
              <a href="mailto:cafe.canvas0@gmail.com" className="display-md" style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>cafe.canvas0@gmail.com</a>
              
              <div style={{ marginTop: '4rem' }}>
                <div className="label" style={{ color: 'var(--fg-muted)', marginBottom: '0.5rem' }}>Call Us</div>
                <div className="body-lg" style={{ color: 'var(--fg)', marginBottom: '0.25rem' }}>+91 87918 04428</div>
                <div className="body-lg" style={{ color: 'var(--fg)' }}>+91 95487 84462</div>
              </div>
            </div>
          </div>

          <div data-reveal="fade-up" className="delay-3">
            {status === 'success' && <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid #4ade80', marginBottom: '2rem' }}>Message received successfully. We will be in touch shortly.</div>}
            {status === 'error' && <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid #ef4444', marginBottom: '2rem' }}>Something went wrong. Please try emailing us.</div>}
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="What's your name?" required />
              </div>
              <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="What's your email?" required />
              </div>
              <div>
                <input type="text" name="message" value={formData.message} onChange={handleChange} className="form-input" placeholder="Tell us about your project..." required />
              </div>
              
              <div>
                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
