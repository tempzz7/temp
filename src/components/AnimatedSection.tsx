import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0.1
}) => {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
