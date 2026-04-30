import React, { useState, useEffect } from 'react';

const LoadingCurtain = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Animate progress to 100%
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 30); // Reaches 100 in 1500ms
    
    // Hide curtain after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'var(--bg)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: loading ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        pointerEvents: loading ? 'all' : 'none'
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: 800,
          color: 'var(--fg)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: loading ? 1 : 0,
          transform: loading ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <span style={{ color: 'var(--accent)' }}>CAFECANVAS</span>
        <span style={{ fontSize: '0.4em', letterSpacing: '0.4em', color: 'var(--fg-muted)' }}>STUDIO</span>
        
        {/* Progress Bar Container */}
        <div style={{ width: '200px', height: '2px', background: 'var(--border)', marginTop: '2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            height: '100%', 
            background: 'var(--accent)', 
            width: `${progress}%`, 
            transition: 'width 0.1s linear' 
          }} />
        </div>
        
        {/* Loading Counter */}
        <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--fg-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingCurtain;
