import React from 'react';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center bg-dark relative overflow-hidden">
      {/* Background effects - blobs, grid, spotlight, partículas */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blobs multicoloridos animados - ajustados para responsividade */}
        <motion.div
          className="absolute w-[60vw] h-[60vw] min-w-[300px] min-h-[300px] sm:min-w-[400px] sm:min-h-[400px] md:min-w-[600px] md:min-h-[600px] max-w-[1200px] max-h-[1200px] rounded-full blur-[80px]"
          style={{ top: '-18%', left: '-18%', background: 'radial-gradient(circle at 30% 30%, #a78bfa55 0%, #7c3aed22 60%, transparent 100%)' }}
          animate={{
            x: [0, 120, 0, -120, 0],
            y: [0, 100, 200, 100, 0],
            scale: [1, 1.18, 1, 0.92, 1],
            opacity: [0.28, 0.38, 0.28, 0.32, 0.28]
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[50vw] h-[50vw] min-w-[250px] min-h-[250px] sm:min-w-[300px] sm:min-h-[300px] md:min-w-[400px] md:min-h-[400px] max-w-[900px] max-h-[900px] rounded-full blur-[80px]"
          style={{ bottom: '-15%', right: '-15%', background: 'radial-gradient(circle at 70% 70%, #7c3aed33 0%, #a78bfa18 60%, transparent 100%)' }}
          animate={{
            x: [0, -140, 0, 140, 0],
            y: [0, -120, -240, -120, 0],
            scale: [1, 0.95, 1.12, 1, 1],
            opacity: [0.18, 0.28, 0.18, 0.22, 0.18]
          }}
          transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Partículas animadas - reduzidas em dispositivos móveis */}
        {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary-violet/40"
            style={{
              top: `${10 + Math.sin(i) * 35}%`,
              left: `${10 + Math.cos(i) * 40}%`,
              filter: 'blur(1.5px)'
            }}
            animate={{
              y: [0, Math.sin(i) * 12, 0],
              x: [0, Math.cos(i) * 12, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
          />
        ))}
        {/* Spotlight radial focado na foto de perfil - ajustado para responsividade */}
        <div className="absolute z-10 left-1/2 top-[38%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, #a78bfa22 0%, #0d0d0d 80%)',
          opacity: 0.45,
          filter: 'blur(24px)'
        }} />
        {/* Grid com glow sutil */}
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(90deg,rgba(124,58,237,0.04) 0 1px,transparent 1px 60px),repeating-linear-gradient(180deg,rgba(124,58,237,0.04) 0 1px,transparent 1px 60px)`,
          boxShadow: '0 0 80px 10px #a78bfa11 inset'
        }} />
        {/* Overlay escurecedor */}
        <div className="absolute inset-0 bg-gradient-radial from-dark/98 via-dark/92 to-dark/98 opacity-98"></div>
      </div>
      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-8 md:gap-10 lg:gap-20">
          {/* Foto de perfil com glassmorphism e glow animado refinados - ajustada para responsividade */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative flex-shrink-0 flex justify-center items-center group w-full md:w-auto"
            style={{
              overflow: 'visible', // Garante que nada seja cortado
              padding: '1.5rem', // Espaço extra para evitar corte em telas pequenas
              boxSizing: 'border-box',
              minWidth: '180px',
              minHeight: '180px',
              maxWidth: '100vw',
              maxHeight: '100vw',
            }}
          >
            {/* Glassmorphism circular ainda mais sutil - ajustado para responsividade */}
            <div className="absolute -inset-4 rounded-full bg-white/2 backdrop-blur-sm border border-primary-violet/5 shadow shadow-primary-violet/5 z-0" style={{overflow: 'visible'}} />
            {/* Glow animado mais suave */}
            <motion.div
              initial={{ opacity: 0.35, scale: 0.97 }}
              animate={{ opacity: [0.35, 0.5, 0.35], scale: [0.97, 1.04, 0.97] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary-violet/40 via-accent-violet/20 to-transparent blur-sm group-hover:scale-105 group-hover:blur transition-all duration-500 z-0"
              style={{overflow: 'visible'}}
            />
            {/* SVG arco animado */}
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" className="absolute -left-8 -top-8 z-0 hidden md:block animate-spin-slow" style={{overflow: 'visible'}}>
              <motion.path
                d="M210 110c0 55.228-44.772 100-100 100"
                stroke="#a78bfa"
                strokeWidth="10"
                strokeLinecap="round"
                strokeOpacity="0.25"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
              />
            </svg>
            <motion.img
              src={require('./Captura de tela 2025-05-07 173903.png')}
              alt="Thiago Costa Queiroz"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary-violet shadow-xl shadow-primary-violet/30 bg-dark-gray relative z-10 group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: 'center top', objectFit: 'cover', display: 'block', margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}
              whileHover={{ scale: 1.07 }}
            />
          </motion.div>
          {/* Conteúdo textual e botões animados */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="uppercase tracking-widest text-sm text-medium-gray font-semibold mb-1"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-2 flex items-center gap-2"
            >
              <span className="text-gradient animate-gradient-move font-mono" style={{letterSpacing: '0.04em', display: 'inline-block'}}>
                <span className="typing-animation-full">Thiago Queiroz</span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg md:text-2xl text-primary-violet font-semibold mb-1"
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-base md:text-lg text-medium-gray max-w-xl mb-4"
            >
              Passionate about <span className="text-accent-violet font-semibold">clean UI</span> and <span className="text-accent-violet font-semibold">scalable backends</span>. <br className="hidden md:inline" />React • Tailwind CSS • Django • Node.js
            </motion.p>
            <span className="block text-xs text-medium-gray mt-1 mb-2 tracking-wide" style={{fontSize: '0.72rem', letterSpacing: '0.04em'}}>
              Computer Science student at CESAR School • 4th semester
            </span>
      {/* Typing animation CSS */}
      <style>{`
        .typing-animation-full {
          display: inline-block;
          border-right: 2px solid #a78bfa;
          white-space: nowrap;
          overflow: hidden;
          animation: typing-full 2.2s steps(14, end), blink-caret 0.7s step-end infinite;
        }
        @keyframes typing-full {
          from { width: 0 }
          to { width: 14ch }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #a78bfa; }
        }
      `}</style>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 #a78bfa44' }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-primary-violet to-accent-violet text-light-gray px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary-violet/30 transition-all duration-300 hover:brightness-110 hover:-translate-y-1"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 #a78bfa44' }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-primary-violet bg-dark/80 text-primary-violet px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary-violet hover:text-light-gray hover:shadow-lg hover:shadow-primary-violet/30"
              >
                Contact
              </motion.a>
            </div>
            {/* Social icons animados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex gap-3 mt-4 justify-center md:justify-start"
            >
              <motion.a href="https://www.linkedin.com/in/thiago-costa-queiroz-4a1213282/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, rotate: -5 }} className="bg-white/10 border border-primary-violet/20 rounded-lg p-2 hover:bg-primary-violet/10 transition-colors">
                <svg className="w-6 h-6 text-primary-violet" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
              <motion.a href="https://github.com/tempzz7" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, rotate: 5 }} className="bg-white/10 border border-primary-violet/20 rounded-lg p-2 hover:bg-primary-violet/10 transition-colors">
                <svg className="w-6 h-6 text-primary-violet" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </motion.a>
              <motion.a href="mailto:sleqqqueiroz@gmail.com" whileHover={{ scale: 1.15, rotate: 8 }} className="bg-white/10 border border-primary-violet/20 rounded-lg p-2 hover:bg-primary-violet/10 transition-colors">
                <svg className="w-6 h-6 text-primary-violet" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 6.99 8-6.99V20H4z"/></svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-primary-violet/50 rounded-full flex justify-center pt-2 bg-dark/60 backdrop-blur-sm"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-violet" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
