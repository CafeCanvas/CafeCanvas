import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';

const CounterItem = ({ end, suffix = '', label, delayClass = '', isLast = false }) => {
  const { count, countRef } = useCounter(end, 2000);
  return (
    <div data-reveal="fade-up" className={delayClass} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4vw 2vw', borderRight: isLast ? 'none' : '1px solid var(--border)' }}>
      <div ref={countRef} style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: '800', fontFamily: 'var(--font-display)', lineHeight: '1', color: 'var(--fg)', marginBottom: '1rem', whiteSpace: 'nowrap' }}>
        {count}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </div>
      <div className="label" style={{ color: 'var(--fg-muted)' }}>{label}</div>
    </div>
  );
};

const InteractiveStats = () => {
  useReveal();

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <CounterItem end={50} suffix="+" label="High-End Projects" />
          <CounterItem end={99} suffix="%" label="Client Retention" delayClass="delay-1" />
          <CounterItem end={4} suffix="X" label="Average ROI" delayClass="delay-2" isLast={true} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;
