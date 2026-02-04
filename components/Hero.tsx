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
      {/* Pulsing Velvet Heart */}
      <motion.div 
        className="relative w-64 h-64 md:w-96 md:h-96 mb-12"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow behind heart */}
        <div className="absolute inset-0 bg-rose-500/20 blur-[80px] rounded-full" />
        
        {/* Abstract 3D Heart Shape using SVG */}
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
          <defs>
            <radialGradient id="velvetGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#9f1239" /> {/* Rose 800 */}
              <stop offset="60%" stopColor="#4c0519" /> {/* Rose 950 */}
              <stop offset="100%" stopColor="#2a0a18" /> {/* Darker */}
            </radialGradient>
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" />
              <feBlend mode="multiply" in2="SourceGraphic" />
            </filter>
            <filter id="innerGlow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                <feOffset dx="0" dy="2" result="offsetBlur"/>
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lightingColor="#ff99aa" result="specOut">
                    <fePointLight x="-5000" y="-10000" z="20000"/>
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
            </filter>
          </defs>
          <path 
            d="M100 180 C 20 100, 0 50, 50 20 C 80 5, 100 30, 100 30 C 100 30, 120 5, 150 20 C 200 50, 180 100, 100 180 Z" 
            fill="url(#velvetGradient)"
            filter="url(#innerGlow)"
            className="drop-shadow-lg"
          />
        </svg>
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