import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home', section: 'home' },
  // About removed because it leads nowhere
  { href: '#portfolio', label: 'Portfolio', section: 'portfolio' },
  { href: '#contact', label: 'Contact', section: 'contact' },
];

const Cabecalho: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      // Header appearance change on scroll
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }      // Active section detection
      // Only use sections that exist on the page
      const sections = ['home', 'portfolio', 'contact'];
      let currentSection = '';
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeSection]);
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-primary-violet/50 shadow-lg shadow-primary-violet/20 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <motion.span 
          className="text-2xl font-extrabold tracking-tight"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient animate-gradient-move">temp.dev</span>
        </motion.span>
        <ul className="flex space-x-3 md:space-x-8">
          {links.map((link, index) => {
            const isActive = activeSection === link.section;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <motion.a
                  href={link.href}
                  className={`px-3 py-2 rounded-md font-semibold transition-all duration-300 relative focus:outline-none group
                    ${isActive
                      ? 'text-gradient animate-gradient-move'
                      : 'text-light-gray hover:text-gradient hover:animate-gradient-move'}
                  `}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-0.5 transition-all duration-300
                      ${isActive ? 'bg-gradient-to-r from-primary-violet to-accent-violet' : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary-violet group-hover:to-accent-violet'}`}
                  />
                </motion.a>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Cabecalho;