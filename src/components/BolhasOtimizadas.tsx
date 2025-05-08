import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 16;
const COLORS = [
  'rgba(167,139,250,0.18)', // lilás
  'rgba(139,92,246,0.18)', // violeta
  'rgba(124,58,237,0.18)', // roxo
  'rgba(192,132,252,0.18)', // lavanda
  'rgba(109,40,217,0.18)', // roxo escuro
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const BolhasOtimizadas: React.FC = () => {
  const [particles, setParticles] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : 16;
    const arr = Array.from({ length: count }).map((_, i) => {
      const size = randomBetween(10, isMobile ? 18 : 24);
      return {
        id: i,
        size,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        top: randomBetween(5, 90),
        left: randomBetween(5, 90),
        duration: randomBetween(8, 18),
        delay: randomBetween(0, 6),
        direction: Math.random() > 0.5 ? 1 : -1,
      };
    });
    setParticles(arr);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'visible',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            opacity: 0.7,
          }}
          animate={{
            y: [0, p.direction * randomBetween(18, 32), 0],
            x: [0, p.direction * randomBetween(-12, 12), 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BolhasOtimizadas;
