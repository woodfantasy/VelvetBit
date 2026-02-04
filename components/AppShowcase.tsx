import React from 'react';
import { motion } from 'framer-motion';

interface AppShowcaseProps {
  id: string;
  title: string;
  tagline: string;
  copy: string;
  imageSrc: string;
  isReversed?: boolean;
  accentColor: string;
  downloadUrl: string;
  visualType: 'phone' | 'scene';
}

const AppShowcase: React.FC<AppShowcaseProps> = ({ 
  id, 
  title, 
  tagline, 
  copy, 
  imageSrc, 
  isReversed = false,
  accentColor,
  downloadUrl,
  visualType
}) => {
  return (
    <section id={id} className="relative z-10 py-24 md:py-32 px-6 overflow-hidden">
      <div className={`max-w-6xl mx-auto flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
        
        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          {visualType === 'phone' ? (
            <div className="relative w-72 md:w-80 aspect-[1/2]">
              {/* Glow behind phone */}
              <div 
                className="absolute inset-0 blur-[60px] opacity-40 rounded-full scale-110"
                style={{ backgroundColor: accentColor }} 
              />
              
              {/* Glass Phone Frame */}
              <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 bg-black/80 backdrop-blur-md overflow-hidden shadow-2xl ring-1 ring-white/5">
                  <img src={imageSrc} alt={`${title} screenshot`} className="w-full h-full object-cover" />
                 {/* Shine reflection */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
              </div>
            </div>
          ) : (
             <div className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl">
               {/* Scene container */}
               <div 
                 className="absolute inset-0 opacity-20 blur-[80px]"
                 style={{ backgroundColor: accentColor }}
               />
               <div className="relative w-full h-full bg-[#1E1B24]/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-8 flex items-center justify-center">
                  <img src={imageSrc} alt={`${title} scene`} className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg opacity-90" />
                  
                  {/* Firefly/Dust effects */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-100 rounded-full shadow-[0_0_10px_yellow]" />
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-100 rounded-full shadow-[0_0_12px_yellow] animate-pulse" />
               </div>
             </div>
          )}
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-3 tracking-tight">{title}</h2>
          <p className="font-serif text-2xl md:text-3xl italic text-white/80 mb-6 drop-shadow-lg" style={{ color: accentColor, textShadow: `0 0 20px ${accentColor}40` }}>
            {tagline}
          </p>
          <p className="font-sans text-xl text-slate-300 mb-10 leading-relaxed font-light">
            {copy}
          </p>

          <a 
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] shadow-[0_0_15px_rgba(168,85,247,0.1)]"
          >
             <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 384 512">
               <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 31.4-14.4 61.2-14.4 29.6 0 41.6 14.4 60.2 14.4 41 0 54.1-66.5 82.8-121.4 16.6-31.1 25.1-64.5 27.5-66.7-1.4-1.2-4.5-3.3-21.2-4.6zM222 72.1c16.3-21.9 33.7-49.1 29.8-82.5-30.8 2.9-63.6 23.4-83.3 47.7-17.7 21.6-31 52.8-27.4 82.5 33.7 2.3 64.7-25.2 80.9-47.7z"/>
             </svg>
             <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight text-white/80">Download on the</span>
                <span className="text-lg font-semibold leading-tight text-white tracking-wide">App Store</span>
             </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;