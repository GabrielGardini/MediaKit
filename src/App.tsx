import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramStats from './components/InstagramStats';
import TopReels from './components/TopReels';
import TikTokStats from './components/TikTokStats';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <InstagramStats />
        <TopReels />
        <TikTokStats />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;