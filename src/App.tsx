import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveDemo from './components/LiveDemo';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Support from './components/Support';
import Community from './components/Community';
import Footer from './components/Footer';
import MusicVisualizer from './components/MusicVisualizer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <MusicVisualizer />
      <Header />
      <Hero />
      <LiveDemo />
      <Features />
      <HowItWorks /> 
      <SocialProof />
      <Download />
      <Community /> 
      <Support />
      <Footer />
    </div>
  );
}

export default App;