import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section className="relative z-10 py-32 md:py-40 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.blockquote 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl leading-tight text-white/90"
        >
          <span className="text-white/40">"</span>
          We believe technology should feel like velvet, not steel. 
          In a binary world of 0s and 1s, we are here for the 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"> infinite gray </span> 
          in between.
          <span className="text-white/40">"</span>
        </motion.blockquote>
        <motion.cite 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="block mt-8 font-sans text-sm uppercase tracking-[0.2em] text-white/50 not-italic"
        >
          — VelvetBit
        </motion.cite>
      </div>
    </section>
  );
};

export default Manifesto;