import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Advantages } from './components/Advantages';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Events } from './components/Events';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="custom-gradient-bg text-alabaster min-h-screen relative font-sans selection:bg-amber-500/30 selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] bg-noise mix-blend-overlay" />
      
      {/* Ambient Light Spots (Fixed - subtle addition to the CSS gradient) */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-amber-800/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <Header />
      <Hero />
      <div id="about"><About /></div>
      <Intro />
      <Advantages />
      <Menu />
      <Gallery />
      <Events />
      <Reservation />
      <div id="contacts"><Footer /></div>
    </div>
  );
}

export default App;