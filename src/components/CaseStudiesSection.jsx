import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const STUDIES = [
  {
    client: 'BMS IT Solutions',
    type: 'Professional Services',
    desc: 'Full-stack digital transformation for a growing IT consultancy.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    color: '#1A2421',
    link: 'https://bmsitsolutionsindia.com'
  },
  {
    client: 'Dr. Ajay Agrawal Clinic',
    type: 'Healthcare',
    desc: 'A patient-first medical website with modern booking and trust signals.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    color: '#2A1F1D',
    link: 'https://dr-ajay-agrawal.netlify.app/'
  },
  {
    client: 'Samatva Yoga',
    type: 'Wellness & Lifestyle',
    desc: 'A seamless, serene digital platform for class bookings and retreats.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    color: '#1D242A',
    link: 'https://samatvayoga.com.my/'
  }
];

const CaseStudiesSection = () => {
  useReveal();

  return (
    <section className="section" id="work">
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8vw' }}>
          <div>
            <div className="label" data-reveal="fade-up">Selected Works</div>
            <h2 className="display-md delay-1" data-reveal="fade-up" style={{ marginTop: '1rem' }}>
              Building <span style={{ color: 'var(--accent)' }}>Digital</span> Excellence.
            </h2>
          </div>
          <p className="body-lg delay-2" data-reveal="fade-up" style={{ maxWidth: '400px', textAlign: 'right' }}>
            A curated selection of our most impactful technical projects and visual identities.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4vw', marginTop: '6vw' }}>
          {STUDIES.map((study, i) => (
            <div 
              key={i} 
              data-reveal="fade-up"
              style={{ 
                position: 'sticky', 
                top: `calc(120px + ${i * 40}px)`, 
                background: study.color, 
                borderRadius: '32px', 
                padding: '4vw', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1.2fr', 
                gap: '4vw', 
                alignItems: 'center',
                boxShadow: '0 -20px 40px rgba(0,0,0,0.6)',
                zIndex: i,
                minHeight: '60vh',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              
              {/* Text Block */}
              <div>
                <div className="label" style={{ marginBottom: '1.5rem', color: 'var(--fg-muted)' }}>0{i+1} — {study.type}</div>
                <h3 className="display-md" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>{study.client}</h3>
                <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: '400px' }}>{study.desc}</p>
                <a href={study.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2rem' }}>
                  <span>Visit Website</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Image Block */}
              <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ borderRadius: '24px', aspectRatio: '4/3', width: '100%', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                  <img src={study.img} alt={study.client} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
