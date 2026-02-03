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
  downloadLink?: string;
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
            <div className="relative w-64 md:w-80 aspect-[9/19.5]">
              {/* Glow behind phone */}
              <div 
                className="absolute inset-0 blur-[40px] opacity-40 rounded-full scale-110"
                style={{ backgroundColor: accentColor }} 
              />
              
              {/* Glass Phone Frame */}
              <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl ring-1 ring-white/5">
                <div className="absolute top-0 w-full h-full opacity-80 mix-blend-overlay">
                    <img src={imageSrc} alt={`${title} screenshot`} className="w-full h-full object-cover" />
                </div>
                 {/* Shine reflection */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
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
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">{title}</h2>
          <p className="font-serif text-xl md:text-2xl italic text-white/70 mb-6" style={{ color: accentColor }}>
            {tagline}
          </p>
          <p className="font-sans text-lg text-white/60 mb-8 leading-relaxed">
            {copy}
          </p>

          <button className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-filter backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white" aria-hidden="true">
              <path d="M12.026 2C6.51 2 2.035 6.475 2.035 11.99c0 4.414 2.864 8.167 6.84 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112.026 6a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482 3.975-1.325 6.838-5.078 6.838-9.49C22.017 6.475 17.543 2 12.026 2z" />
            </svg> 
             {/* Using Github icon path as placeholder for Apple icon since I cannot easily import brand icons without FontAwesome or similar. In a real project, use actual Apple SVG */}
             {/* Replacing with Apple-like SVG path for visual accuracy */}
             <span className="absolute left-6 top-3 bg-white w-6 h-6 flex items-center justify-center bg-transparent">
                 <svg className="w-5 h-5 fill-white" viewBox="0 0 384 512">
                   <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 31.4-14.4 61.2-14.4 29.6 0 41.6 14.4 60.2 14.4 41 0 54.1-66.5 82.8-121.4 16.6-31.1 25.1-64.5 27.5-66.7-1.4-1.2-4.5-3.3-21.2-4.6zM222 72.1c16.3-21.9 33.7-49.1 29.8-82.5-30.8 2.9-63.6 23.4-83.3 47.7-17.7 21.6-31 52.8-27.4 82.5 33.7 2.3 64.7-25.2 80.9-47.7z"/>
                 </svg>
             </span>
             <div className="flex flex-col items-start ml-8">
                <span className="text-[10px] leading-none text-white/70 uppercase">Download on the</span>
                <span className="text-sm font-semibold leading-none text-white text-shadow-glow">App Store</span>
             </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;