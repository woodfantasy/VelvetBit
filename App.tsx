import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import AppShowcase from './components/AppShowcase';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white selection:bg-purple-500/30 selection:text-purple-100">
      <Background />
      
      <div className="relative z-10 flex flex-col">
        <Hero />
        
        <AppShowcase 
          id="mood-bartender"
          title="Mood Bartender"
          tagline="Alchemy for your emotions."
          copy="Turn your heavy days into intoxicating art. Whether you are doing shadow work or just venting, we turn your feelings into bespoke cocktails. A safe space to unravel."
          imageSrc="https://picsum.photos/400/800?grayscale&blur=2"
          accentColor="#A78BFA" // Neon Lilac
          visualType="phone"
        />

        <AppShowcase 
          id="numi"
          title="Numi"
          tagline="Your glowing companion in the dark."
          copy="A virtual pet soft enough to hold your heart. Inspired by the comfort of plush toys, Numi is here to listen, to be squished, and to keep you company when the world feels too loud."
          imageSrc="https://picsum.photos/800/600?grayscale"
          accentColor="#FDBA74" // Sunset Peach
          isReversed={true}
          visualType="scene"
        />

        <Manifesto />
        
        <Footer />
      </div>
    </main>
  );
};

export default App;