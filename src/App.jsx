import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Cinephile from './components/Cinephile';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-ink selection:bg-comic-cyan selection:text-noir bg-noir relative">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Cinephile />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-200/50 bg-white/50">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
