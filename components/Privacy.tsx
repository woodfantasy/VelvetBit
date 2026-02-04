import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  return (
    <div className="relative z-20 pt-24 pb-20 px-6 max-w-4xl mx-auto text-slate-300 font-sans">
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-velvet-accent mb-12 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-8">Privacy Policy</h1>
        <p className="text-white/60 mb-12 italic">Last updated: February 2025</p>

        <div className="space-y-12 leading-relaxed">
          <section>
            <h2 className="text-2xl text-white mb-4 font-serif">1. Overview</h2>
            <p>
              At VelvetBit, we believe your emotions and digital companions are private sanctuaries. 
              This policy applies to our applications <strong>Mood Bartender</strong> and <strong>Numi</strong>. 
              We operate on a principle of "data minimalism"—we do not want your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4 font-serif">2. Data Collection & Usage</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-white/90 mb-2 font-medium">Mood Bartender</h3>
                <p>
                  Mood Bartender is designed to be a private space for self-reflection. 
                  All journal entries, mood logs, and generated "cocktails" are stored locally on your device 
                  or synced securely via your personal iCloud account. We (VelvetBit) do not have access to your entries.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-white/90 mb-2 font-medium">Numi</h3>
                <p>
                  Interactions with Numi are processed to provide the companion experience. 
                  Data regarding your pet's state is stored locally or via iCloud. 
                  We do not sell or harvest your interaction data for advertising.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4 font-serif">3. Third-Party Services</h2>
            <p>
              Our applications are distributed via the Apple App Store. We may use standard Apple APIs 
              (such as StoreKit for purchases) which are subject to Apple's Privacy Policy. 
              We do not integrate third-party analytics SDKs that track you across other apps and websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4 font-serif">4. Contact Us</h2>
            <p>
              If you have specific questions about where your data goes (spoiler: it stays with you), 
              please contact us at:
            </p>
            <a href="mailto:woodfantasy@gmail.com" className="inline-block mt-4 text-velvet-accent hover:text-white border-b border-velvet-accent/30 hover:border-white transition-colors">
              woodfantasy@gmail.com
            </a>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;