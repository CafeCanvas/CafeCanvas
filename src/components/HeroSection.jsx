import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight, Code2, Palette, Globe, ChevronDown,
  Stethoscope, ShoppingBag, GraduationCap, Utensils,
  Building2, Briefcase, Rocket, Sparkles, Zap, Star,
} from 'lucide-react';
// Note: ParticleCanvas is now rendered globally via GlobalBackground in App.js

/* ─────────────────────────────────────────────
   PARTICLE CANVAS
───────────────────────────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const COUNT = Math.min(Math.floor((W * H) / 12000), 90);
    const COLORS = ['#F97316', '#6E3F28', '#A66844', '#3E2113', '#D4845A'];

    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const pts = particlesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      pts.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) { p.vx += (dx / d) * 0.3; p.vy += (dy / d) * 0.3; }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249,115,22,${(1 - dist / 120) * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0, opacity: 0.55,
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   MAGNETIC CURSOR DOT
───────────────────────────────────────────── */
const MagneticCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 16); y.set(e.clientY - 16); };
    const over = (e) => { if (e.target.closest('button, a, [data-magnetic]')) setHovered(true); };
    const out = () => setHovered(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, x: sx, y: sy,
        width: 32, height: 32, borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'multiply',
        border: '2px solid #F97316',
        backgroundColor: hovered ? 'rgba(249,115,22,0.12)' : 'transparent',
      }}
      animate={{ scale: hovered ? 1.8 : 1 }}
      transition={{ duration: 0.2 }}
    />
  );
};

/* ─────────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────────── */
const words = ['Clinics', 'Restaurants', 'Retailers', 'Real Estate', 'Schools', 'Startups'];

const Typewriter = () => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) { const t = setTimeout(() => setPaused(false), 1400); return () => clearTimeout(t); }
    const word = words[idx];
    let timeout;
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
      } else { setPaused(true); setDeleting(true); }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else { setDeleting(false); setIdx((idx + 1) % words.length); }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, paused]);

  return (
    <span style={{
      color: 'var(--orange-accent)',
      fontStyle: 'italic',
      display: 'inline',
    }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          display: 'inline-block', width: 3, height: '0.85em',
          background: '#F97316', marginLeft: 3,
          verticalAlign: 'middle', borderRadius: 2,
        }}
      />
    </span>
  );
};

/* ─────────────────────────────────────────────
   MORPHING BLOB
───────────────────────────────────────────── */
const MorphBlob = ({ size, color, delay, style }) => {
  const paths = [
    'M60,20 C80,0 100,10 95,35 C90,60 75,80 55,85 C35,90 10,75 5,55 C0,35 10,15 30,10 C45,5 50,30 60,20 Z',
    'M65,15 C90,5 105,25 98,50 C91,75 70,90 45,88 C20,86 0,70 2,45 C4,20 20,5 40,8 C55,10 50,20 65,15 Z',
    'M55,10 C75,-5 100,15 100,40 C100,65 80,90 55,92 C30,94 5,75 3,50 C1,25 15,5 35,7 C48,8 42,20 55,10 Z',
  ];
  return (
    <motion.svg
      viewBox="0 0 110 100"
      style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1, width: size, height: size, ...style }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30 + delay * 5, repeat: Infinity, ease: 'linear' }}
    >
      <motion.path
        d={paths[0]}
        fill={color}
        animate={{ d: [paths[0], paths[1], paths[2], paths[0]] }}
        transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
};

/* ─────────────────────────────────────────────
   ORBIT RINGS
───────────────────────────────────────────── */
const OrbitRing = ({ size, duration, delay, style }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    style={{
      position: 'absolute', width: size, height: size,
      borderRadius: '50%', border: '1px solid rgba(249,115,22,0.13)',
      ...style,
    }}
  >
    <motion.div style={{
      position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)',
      width: 10, height: 10, borderRadius: '50%',
      background: 'rgba(249,115,22,0.6)', boxShadow: '0 0 8px rgba(249,115,22,0.5)',
    }} />
  </motion.div>
);

/* ─────────────────────────────────────────────
   MARQUEE TICKER (replaces the 4 floating cards)
───────────────────────────────────────────── */
const marqueeItems = [
  { icon: Stethoscope,  label: 'Healthcare' },
  { icon: ShoppingBag,  label: 'E-commerce' },
  { icon: Utensils,     label: 'Restaurants' },
  { icon: Building2,    label: 'Real Estate' },
  { icon: GraduationCap,label: 'Education' },
  { icon: Briefcase,    label: 'Enterprise' },
  { icon: Rocket,       label: 'Startups' },
  { icon: Sparkles,     label: 'Branding' },
  { icon: Code2,        label: 'Web Apps' },
  { icon: Zap,          label: 'Automation' },
  { icon: Globe,        label: 'SaaS' },
  { icon: Star,         label: 'UI / UX' },
];

/* Duplicate to make seamless loop */
const allItems = [...marqueeItems, ...marqueeItems];

const MarqueeTicker = () => (
  <div style={{
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    /* fade edges */
    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  }}>
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'flex', gap: '0.75rem', width: 'max-content' }}
    >
      {allItems.map(({ icon: Icon, label }, i) => (
        <div
          key={i}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.45rem 1rem',
            borderRadius: '100px',
            border: '1px solid rgba(110,63,40,0.14)',
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            whiteSpace: 'nowrap',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--coffee-dark)',
            boxShadow: '0 2px 10px rgba(62,33,19,0.06)',
            flexShrink: 0,
          }}
        >
          <Icon size={14} style={{ color: 'var(--orange-accent)', flexShrink: 0 }} />
          {label}
        </div>
      ))}
    </motion.div>
  </div>
);

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
const HeroSection = () => {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [3, -3]);
  const rotateY = useTransform(mouseX, [0, 1], [-3, 3]);
  const springX = useSpring(rotateX, { stiffness: 60, damping: 14 });
  const springY = useSpring(rotateY, { stiffness: 60, damping: 14 });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY],
  );

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11 } },
  };
  const item = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <>
      <MagneticCursor />

      <section
        id="home"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '7rem 1rem 0',
          gap: 0,
        }}
      >
        {/* ── BACKGROUND (particle canvas is global, only hero-specific elements below) ── */}
        <MorphBlob size={500} color="rgba(249,115,22,0.05)" delay={0} style={{ top: '-15%', right: '-10%' }} />
        <MorphBlob size={380} color="rgba(110,63,40,0.06)"  delay={2} style={{ bottom: '-10%', left: '-8%' }} />
        <OrbitRing size={280} duration={22} delay={0} style={{ top: '10%', right: '6%', zIndex: 1 }} />
        <OrbitRing size={180} duration={15} delay={3} style={{ bottom: '18%', left: '5%', zIndex: 1 }} />

        {/* ── MAIN CONTENT (3-D tilt wrapper) ── */}
        <motion.div
          style={{
            position: 'relative', zIndex: 4,
            textAlign: 'center',
            width: '100%', maxWidth: 1000,
            margin: '0 auto',
            rotateX: springX, rotateY: springY,
            transformPerspective: 900,
          }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1.1rem',
                background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.28)',
                borderRadius: '100px',
                fontSize: '0.82rem', fontWeight: 600,
                color: '#EA580C', cursor: 'default',
                backdropFilter: 'blur(8px)',
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#F97316', display: 'inline-block' }}
              />
              Digital Agency · Creative Studio · Tech Partner
            </motion.span>
          </motion.div>

          {/* ── HEADLINE ── */}
          <motion.div variants={item} style={{ marginBottom: '1.8rem' }}>
            {/*
             * Outer div is an inline-block so it shrinks to content width,
             * letting the section's textAlign:center still centre it.
             * Each line is a flex row → no overflow, no phantom gaps.
             */}
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
              {/* Line 1 */}
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--coffee-dark)',
              }}>
                We Build Digital
              </div>
              {/* Line 2 — flex so typewriter sits right next to static text */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.3em',
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--coffee-dark)',
                whiteSpace: 'nowrap',
              }}>
                <span>Futures for</span>
                <Typewriter />
              </div>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={item}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.18rem)',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              maxWidth: 600,
              margin: '0 auto 2.5rem',
            }}
          >
            From stunning clinic websites to powerful e-commerce platforms — CafeCanvas turns your
            business vision into a{' '}
            <strong style={{ color: 'var(--coffee-medium)' }}>digital masterpiece</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{
              display: 'flex', gap: '1rem',
              justifyContent: 'center', flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <motion.button
              data-magnetic
              onClick={() => scrollTo('contact')}
              className="btn-primary"
              style={{ gap: '0.5rem' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

            <motion.button
              data-magnetic
              onClick={() => scrollTo('industries')}
              className="btn-secondary"
              style={{ gap: '0.5rem' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Palette size={17} />
              See Our Work
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '2rem',
              border: '1px solid rgba(255,255,255,0.85)',
              boxShadow: '0 8px 40px rgba(62,33,19,0.08)',
              overflow: 'hidden',
              maxWidth: 680, margin: '0 auto',
            }}
          >
            {[
              { icon: Code2,    label: 'Projects Delivered', value: '50+' },
              { icon: Palette,  label: 'Industries',          value: '10+' },
              { icon: Globe,    label: 'Happy Clients',        value: '25+' },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                whileHover={{ background: 'rgba(249,115,22,0.06)' }}
                style={{
                  flex: '1 1 160px',
                  padding: '1.4rem 1rem',
                  textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(110,63,40,0.08)' : 'none',
                  cursor: 'default',
                  transition: 'background 0.3s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.45rem' }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '0.55rem',
                    background: 'linear-gradient(135deg,#F97316,#EA580C)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={15} color="white" />
                  </div>
                </div>
                <div style={{
                  fontSize: '1.55rem', fontWeight: 800,
                  color: 'var(--coffee-dark)', fontFamily: 'Georgia, serif', lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{
                  fontSize: '0.74rem', color: 'var(--text-muted)',
                  fontWeight: 500, marginTop: '0.2rem',
                }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── MARQUEE TICKER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          style={{
            position: 'relative', zIndex: 4,
            width: '100%',
            marginTop: '3rem',
            paddingBottom: '3.5rem',
          }}
        >
          {/* section label */}
          <div style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            opacity: 0.7,
          }}>
            Industries &amp; Services
          </div>
          <MarqueeTicker />
        </motion.div>

        {/* ── SCROLL CUE ── */}
        <motion.div
          onClick={() => scrollTo('industries')}
          style={{
            position: 'absolute', bottom: '1.2rem', left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer', zIndex: 10,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.2 }}
        >
          <span style={{
            fontSize: '0.67rem', fontWeight: 600,
            color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Scroll
          </span>
          <ChevronDown size={20} color="var(--orange-accent)" />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;