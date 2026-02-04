import React, { useState } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import AppShowcase from './components/AppShowcase';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import Privacy from './components/Privacy';

type View = 'home' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const handlePrivacyClick = () => {
    setView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#121212] text-white selection:bg-purple-500/30 selection:text-purple-100">
      <Background />
      
      {view === 'home' ? (
        <div className="relative z-10 flex flex-col">
          <Hero />
          
          <AppShowcase 
            id="mood-bartender"
            title="Mood Bartender"
            tagline="Alchemy for your emotions."
            copy="Turn your heavy days into intoxicating art. Whether you are doing shadow work or just venting, we turn your feelings into bespoke cocktails. A safe space to unravel."
            imageSrc="https://raw.githubusercontent.com/woodfantasy/VelvetBit/refs/heads/main/IMG_6660.jpg"
            accentColor="#A78BFA" // Neon Lilac
            downloadUrl="https://apps.apple.com/app/id6757968626"
            visualType="phone"
          />

          <AppShowcase 
            id="numi"
            title="Numi"
            tagline="Your glowing companion in the dark."
            copy="A virtual pet soft enough to hold your heart. Inspired by the comfort of plush toys, Numi is here to listen, to be squished, and to keep you company when the world feels too loud."
            imageSrc="https://raw.githubusercontent.com/woodfantasy/VelvetBit/refs/heads/main/IMG_6663.jpg"
            accentColor="#FFD28E" // Brighter Glowing Peach/Gold
            downloadUrl="https://apps.apple.com/app/id6758260608"
            isReversed={true}
            visualType="phone"
          />

          <Manifesto />
          
          <Footer onPrivacyClick={handlePrivacyClick} />
        </div>
      ) : (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Privacy onBack={handleBackToHome} />
          <div className="mt-auto">
             <Footer onPrivacyClick={handlePrivacyClick} />
          </div>
        </div>
      )}
    </main>
  );
};

export default App;