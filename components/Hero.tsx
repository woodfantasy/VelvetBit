import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('mood-bartender');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
      {/* Living Velvet Heart */}
      <motion.div 
        className="relative mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img 
          src="https://raw.githubusercontent.com/woodfantasy/VelvetBit/refs/heads/main/logo.png"
          alt="VelvetBit Heart"
          className="w-64 md:w-96 h-auto object-contain mix-blend-screen"
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 30px rgba(220, 20, 60, 0.5))", // Resting state: softer, deeper red
              "drop-shadow(0 0 60px rgba(255, 50, 80, 0.8))", // Inhale state: brighter, intense glow
              "drop-shadow(0 0 30px rgba(220, 20, 60, 0.5))"  // Return to rest
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-lg mb-6"
      >
        Embrace Your Shadows.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-sans text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
      >
        VelvetBit creates digital sanctuaries for the modern soul. <br className="hidden md:block"/>
        Soft tech, deep feelings, and a little bit of magic.
      </motion.p>

      <motion.button 
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="group flex flex-col items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors"
      >
        Explore Our World
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
           <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;