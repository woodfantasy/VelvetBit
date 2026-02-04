import React from 'react';

interface FooterProps {
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#121212]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex gap-8 text-sm text-white/40 font-sans">
          <button onClick={onPrivacyClick} className="hover:text-white transition-colors">Privacy Policy</button>
          <a href="mailto:woodfantasy@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-white/20 font-sans text-xs tracking-wider">
           &copy; {new Date().getFullYear()} VelvetBit.
        </div>
      </div>
    </footer>
  );
};

export default Footer;