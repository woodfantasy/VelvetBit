import React from 'react';
import { Instagram, Twitter } from 'lucide-react'; 

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#121212]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex gap-8 text-sm text-white/40 font-sans">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-white/20 font-serif text-lg tracking-widest">
            VELVETBIT
        </div>

        <div className="flex gap-6">
          <a href="#" className="group text-white/60 hover:text-[#E1306C] transition-colors">
            <Instagram strokeWidth={1.5} className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.5)]" />
          </a>
           {/* Custom Pinterest-ish Icon using a simple path if Lucide doesn't have it, or generic Share */}
           <a href="#" className="group text-white/60 hover:text-[#E60023] transition-colors">
             <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(230,0,35,0.5)]"
             >
               <path d="M8 12a4 4 0 1 0 8 0"/>
               <path d="M12 2v2"/>
               <path d="M12 20v2"/>
               <path d="m4.93 4.93 1.41 1.41"/>
               <path d="m17.66 17.66 1.41 1.41"/>
               <path d="M2 12h2"/>
               <path d="M20 12h2"/>
               <path d="m6.34 17.66-1.41 1.41"/>
               <path d="m19.07 4.93-1.41 1.41"/>
             </svg>
          </a>
           {/* TikTok-ish */}
           <a href="#" className="group text-white/60 hover:text-[#00f2ea] transition-colors">
              <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="20" 
               height="20" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="1.5" 
               strokeLinecap="round" 
               strokeLinejoin="round"
               className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(0,242,234,0.5)]"
              >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
           </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-white/20 font-sans">
        &copy; {new Date().getFullYear()} VelvetBit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;