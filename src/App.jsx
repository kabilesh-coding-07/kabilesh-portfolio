import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Cinephile from './components/Cinephile';
import Contact from './components/Contact';
import ElegantBackground from './components/ElegantBackground';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const MagneticCursor = ({ mouseX, mouseY, isCinephile }) => {
  const [hovered, setHovered] = useState(false);
  
  // ULTRA-FAST SPRING for zero perceived lag while maintaining mathematical smoothness
  const springConfig = { damping: 40, stiffness: 1500, mass: 0.1, restDelta: 0.001 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkHover = (e) => {
      const target = e.target;
      const isHoverable = target.closest('a, button, .glass-elegant, .group, [role="button"]');
      setHovered(!!isHoverable);
    };
    window.addEventListener('mouseover', checkHover);
    return () => window.removeEventListener('mouseover', checkHover);
  }, []);

  return (
    <motion.div 
      style={{ x: cursorXSpring, y: cursorYSpring, willChange: 'transform' }}
      className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
    >
      {isCinephile ? (
        /* PRECISION VIEWFINDER CURSOR */
        <motion.div
           animate={{
             scale: hovered ? 1.05 : 1,
           }}
           transition={{ type: "spring", stiffness: 400, damping: 60 }}
           className="absolute flex items-center justify-center pointer-events-none top-0 left-0"
           style={{ translateX: '-50%', translateY: '-50%' }}
        >
          {/* CORNER BRACKETS (Hairline Thin) */}
          <motion.div 
            animate={{ 
                width: hovered ? '20px' : '32px', 
                height: hovered ? '20px' : '32px' 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 45 }}
            className="absolute flex items-center justify-center"
          >
             <div className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-white/60" />
             <div className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-white/60" />
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-white/60" />
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-white/60" />
          </motion.div>

          {/* CENTRAL PRECISION DOT */}
          <motion.div 
            animate={{ 
               backgroundColor: hovered ? '#00f0ff' : '#ffffff',
               boxShadow: hovered ? '0 0 8px #00f0ff' : '0 0 4px #ffffff'
            }}
            className="w-1 h-1 bg-white rounded-full z-10" 
          />
          
          {/* AMBIENT RADIAL FOCUS (Cyan) */}
          <motion.div 
             animate={{ 
                scale: hovered ? 1.8 : 1.2, 
                opacity: hovered ? 0.2 : 0.05 
             }}
             className="absolute w-24 h-24 rounded-full bg-comic-cyan/20 blur-2xl -z-10"
             style={{
                background: 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, transparent 70%)'
             }}
          />
        </motion.div>
      ) : (
        /* ELEGANT JEWELED POINTER */
        <motion.div
          animate={{
            scale: hovered ? 1.2 : 1,
            rotate: hovered ? -5 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 50 }}
          className="jeweled-pointer absolute top-0 left-0"
          style={{ translateX: '-50%', translateY: '-50%' }}
        >
          <div className="jeweled-facet" />
          <div className="ruby-heart-pointer" />
  
          {/* TIP GLINT */}
          <motion.div 
             animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="absolute top-0 left-0 w-2 h-2 bg-white blur-[1px] rounded-full z-20"
          />
        </motion.div>
      )}

      {/* DANCING STAR SPARKLES (Only for Elegant) */}
      {!isCinephile && [...Array(3)].map((_, i) => (
        <motion.div
            key={i}
            className="star-sparkle"
            animate={{
               x: [0, 15, -15, 0],
               y: [0, -20, -10, 0],
               scale: [0, 1, 0],
               rotate: [0, 180, 360],
               opacity: [0, 1, 0]
            }}
            transition={{
                duration: 2.5 + i,
                repeat: Infinity,
                delay: i * 0.4,
            }}
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0,
                translateX: '-50%', 
                translateY: '-50%'
            }}
        />
      ))}

      {/* AMBIENT GLOW */}
      <motion.div
        animate={{
          scale: hovered ? 3 : (isCinephile ? 1.5 : 2),
          opacity: hovered ? 0.35 : 0.15,
        }}
        style={{ 
            translateX: '-50%', translateY: '-50%', 
            position: 'absolute', top: 0, left: 0,
            background: isCinephile 
                ? (hovered 
                    ? 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, transparent 70%)' 
                    : 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%)')
                : (hovered 
                    ? 'radial-gradient(circle, rgba(255,0,60,0.2) 0%, transparent 70%)' 
                    : 'radial-gradient(circle, rgba(197,160,89,0.1) 0%, transparent 70%)'),
        }}
        className={`${isCinephile ? 'w-48 h-48' : 'w-32 h-32'} rounded-full blur-2xl`}
      />
    </motion.div>
  );
};


const PrototypeLoader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // Cinematic delay for the initialization feel
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] bg-elegant-dark flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="text-elegant-gold/40 font-black tracking-[1em] uppercase text-[9px] sm:text-[10px] mb-4 block">Initialization</span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white italic tracking-tighter mb-6 sm:mb-8 transition-all">
            KM.<span className="text-elegant-gold">01</span>
        </h1>
        <div className="w-48 sm:w-64 h-px bg-white/10 relative overflow-hidden mx-auto">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-elegant-gold"
          />
        </div>
      </motion.div>
      
      {/* Decorative Shimmer Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-elegant-gold/20 rounded-full blur-[2px]"
          />
        ))}
      </div>
    </motion.div>
  );
};

function App() {
  const [isCinephile, setIsCinephile] = useState(false);
  const [loading, setLoading] = useState(true);

  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const toggleTheme = () => setIsCinephile(!isCinephile);
  
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Update body background based on theme
    document.body.style.backgroundColor = isCinephile ? '#111827' : '#fdfcf0';
    document.body.className = isCinephile ? 'theme-cinephile' : 'theme-elegant';
  }, [isCinephile]);

  return (
    <div className={`min-h-screen md:cursor-none transition-colors duration-500 ${isCinephile ? 'text-ink selection:bg-comic-cyan selection:text-noir bg-noir' : 'text-elegant-dark selection:bg-elegant-gold selection:text-white bg-transparent relative z-10'}`}>
      <AnimatePresence>
        {loading && <PrototypeLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <MagneticCursor mouseX={mouseX} mouseY={mouseY} isCinephile={isCinephile} />
      {!isCinephile && <ElegantBackground />}
      
      <Navbar isCinephile={isCinephile} toggleTheme={toggleTheme} />
      <main className={`relative z-10 ${isCinephile ? '' : 'font-serif'}`}>
        <motion.div
           initial={!isCinephile ? { opacity: 0 } : {}}
           animate={!isCinephile ? { opacity: 1 } : {}}
           transition={{ duration: 1, delay: 0.5 }}
        >
          <Hero isCinephile={isCinephile} />
          <TechStack isCinephile={isCinephile} />
          <Experience isCinephile={isCinephile} />
          <Projects isCinephile={isCinephile} />
          <Cinephile isCinephile={isCinephile} />
          <Contact isCinephile={isCinephile} />
        </motion.div>
      </main>

      <footer className={`py-8 sm:py-12 text-center transition-colors duration-500 px-4 ${isCinephile ? 'text-slate-500 border-t border-slate-200/50 bg-white/5' : 'text-slate-400 border-t border-elegant-gold/20 bg-elegant-ivory'}`}>
        <p className="font-bold tracking-widest uppercase text-xs sm:text-sm">© {new Date().getFullYear()} Kabilesh Manokaran. All rights reserved.</p>
        <p className={`text-[10px] sm:text-xs mt-2 uppercase tracking-tighter ${isCinephile ? 'text-comic-cyan' : 'text-elegant-gold'}`}>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
