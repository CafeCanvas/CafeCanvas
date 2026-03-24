import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Everything here is portaled straight into
   document.body so it escapes ALL stacking
   contexts created by .App or any section.
   z-index: -1 places it behind all page content
   but above the body background colour.
───────────────────────────────────────────── */

/* ─── Particle network canvas ─── */
const GlobalCanvas = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const ptRef     = useRef([]);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const COLORS = ['#F97316', '#6E3F28', '#A66844', '#3E2113', '#D4845A'];
    const make = () => {
      const COUNT = Math.min(Math.floor((W * H) / 11000), 110);
      return Array.from({ length: COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 2.2 + 0.4,
        vx:    (Math.random() - 0.5) * 0.35,
        vy:    (Math.random() - 0.5) * 0.35,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.45 + 0.08,
      }));
    };

    ptRef.current = make();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const pts = ptRef.current;
      const mx  = mouseRef.current.x;
      const my  = mouseRef.current.y;

      pts.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) { p.vx += (dx / d) * 0.25; p.vy += (dy / d) * 0.25; }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x  += p.vx;  p.y  += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle   = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249,115,22,${(1 - dist / 115) * 0.18})`;
            ctx.lineWidth   = 0.55;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      ptRef.current = make();
    };
    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };

    window.addEventListener('resize',    onResize);
    window.addEventListener('mousemove', onMouse);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize',    onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         '100vw',
        height:        '100vh',
        pointerEvents: 'none',
        zIndex:        -1,   /* behind ALL page content */
        opacity:       0.6,
      }}
    />
  );
};

/* ─── Slow-drifting ambient gradient orbs ─── */
const orbData = [
  { w: 520, h: 520, top:  '3%', left: '68%', color: 'rgba(249,115,22,0.06)',  dur: 18, delay: 0 },
  { w: 400, h: 400, top: '38%', left:  '1%', color: 'rgba(110,63,40,0.06)',   dur: 22, delay: 4 },
  { w: 340, h: 340, top: '72%', left: '62%', color: 'rgba(166,104,68,0.05)',  dur: 20, delay: 8 },
  { w: 280, h: 280, top: '18%', left: '28%', color: 'rgba(249,115,22,0.04)',  dur: 25, delay: 2 },
  { w: 220, h: 220, top: '58%', left: '83%', color: 'rgba(62,33,19,0.045)',   dur: 16, delay: 6 },
  { w: 300, h: 300, top: '85%', left: '15%', color: 'rgba(249,115,22,0.04)',  dur: 21, delay: 10 },
  { w: 250, h: 250, top: '50%', left: '45%', color: 'rgba(110,63,40,0.035)', dur: 28, delay: 5 },
];

const OrbLayer = () => (
  <>
    {orbData.map((o, i) => (
      <motion.div
        key={i}
        aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7], y: [0, 18, 0] }}
        transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut', delay: o.delay }}
        style={{
          position:      'fixed',
          top:           o.top,
          left:          o.left,
          width:         o.w,
          height:        o.h,
          borderRadius:  '50%',
          background:    `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex:        -1,   /* same layer as canvas — behind all content */
          filter:        'blur(2px)',
        }}
      />
    ))}
  </>
);

/* ─── Portal wrapper — mounts inside document.body ─── */
const GlobalBackground = () =>
  ReactDOM.createPortal(
    <>
      <GlobalCanvas />
      <OrbLayer />
    </>,
    document.body,
  );

export default GlobalBackground;
