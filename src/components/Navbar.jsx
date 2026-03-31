import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isCinephile, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Magnetic Hover Logic for Satellite Toggle
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const springConfig = { damping: 20, stiffness: 150 };
    const magneticX = useSpring(mouseX, springConfig);
    const magneticY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const target = e.currentTarget.getBoundingClientRect();
        const centerX = target.left + target.width / 2;
        const centerY = target.top + target.height / 2;
        
        mouseX.set((clientX - centerX) * 0.15);
        mouseY.set((clientY - centerY) * 0.15);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const navLinks = [
        { name: 'Origins', href: '#experience' },
        { name: 'Work', href: '#projects' },
        { name: 'Stack', href: '#stack' },
        { name: 'Cinephile', href: '#cinephile' },
    ];

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="fixed top-6 left-0 w-full z-50 px-4 md:px-0 flex justify-center items-center gap-3 pointer-events-none"
        >
            {/* The Main Navbar Container (Central Elite Command) */}
            <nav className={`transition-all duration-300 px-4 py-3 flex items-center justify-between w-full max-w-2xl pointer-events-auto border-2 ${isCinephile 
                ? 'bg-noir border-ink shadow-comic-hard-yellow' 
                : 'glass-elegant shimmer-gold border-elegant-gold/30 rounded-full'}`}>
                {/* Initials Logo */}
                <motion.a 
                    whileHover={!isCinephile ? { scale: 1.1, rotate: 5 } : {}}
                    href="#" 
                    className={`w-14 h-14 ml-2 flex items-center justify-center transition-all duration-300 ${isCinephile 
                        ? 'font-comic text-3xl -rotate-3 hover:rotate-3 shadow-comic-dark bg-comic-cyan text-noir border-4 border-ink shadow-[4px_4px_0px_#000]' 
                        : 'font-serif text-2xl bg-gradient-to-br from-elegant-gold to-[#ead7b5] text-white rounded-full shadow-lg shadow-elegant-gold/20'}`}
                >
                    KM
                </motion.a>

                {/* Centered Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold uppercase tracking-widest transition-colors ${isCinephile ? 'text-slate-300 hover:text-comic-yellow' : 'text-slate-600 hover:text-elegant-gold'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop CTA (In Touch) */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className={`hidden md:flex px-6 py-2 border-2 text-base transition-all duration-500 ${isCinephile 
                            ? 'font-comic tracking-wider shadow-comic-dark -rotate-2 hover:rotate-0 bg-comic-red border-ink text-ink hover:bg-comic-yellow hover:text-noir' 
                            : 'font-sans font-black uppercase tracking-[0.3em] text-[12px] bg-elegant-dark border-elegant-gold text-elegant-gold rounded-full hover:bg-elegant-gold hover:text-white shadow-xl shadow-elegant-gold/20 posh-shimmer-subtle'}`}
                    >
                        {isCinephile ? "Director's Cut" : "In Touch"}
                    </motion.a>

                    {/* Mobile Menu Icon */}
                    <button
                        className={`md:hidden mr-2 p-2 transition-colors ${isCinephile ? 'text-ink hover:text-comic-cyan' : 'text-elegant-dark hover:text-elegant-gold'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* The "Satellite Command" Toggle (Posh Gold Restoration) */}
            <div className="hidden md:flex items-center gap-2 group pointer-events-auto relative">
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ x: magneticX, y: magneticY }}
                    onClick={toggleTheme}
                    className={`relative w-20 h-10 flex items-center cursor-pointer p-1 rounded-full border-2 transition-all duration-700 overflow-hidden ${
                        isCinephile 
                        ? 'bg-[#0f1012] border-comic-cyan/20 shadow-comic-dark' 
                        : 'bg-gradient-to-br from-[#c5a059] via-[#8e6e3c] to-[#c5a059] border-[#5a4626] shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]'
                    }`}
                >
                    {/* Sonar Ping (Notice Me Visual Hook) */}
                    <motion.div 
                        animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 5 }}
                        className={`absolute inset-0 rounded-full border-2 ${isCinephile ? 'border-comic-cyan/40' : 'border-elegant-gold/40'}`}
                    />

                    {/* Posh Landscape Scenery (Option 1 vision) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <AnimatePresence mode="wait">
                            {isCinephile ? (
                                <motion.div 
                                    key="posh-noir-scenery"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full h-full relative"
                                >
                                    {/* Recording Indicator */}
                                    <div className="absolute top-2 left-6 flex items-center gap-1 scale-[0.6] opacity-80">
                                        <motion.div 
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_red]"
                                        />
                                        <span className="text-[10px] font-comic font-black text-white tracking-widest">REC</span>
                                    </div>

                                    {/* Scanning Film Line */}
                                    <motion.div 
                                        animate={{ top: ['-10%', '110%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[1px] bg-comic-cyan/30 shadow-[0_0_5px_#22d3ee]"
                                    />
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="posh-elegant-scenery"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full h-full relative"
                                >
                                    {/* Puffy Clouds (Left side cluster) */}
                                    <div className="absolute top-1.5 left-4 opacity-100 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                                        <svg width="22" height="14" viewBox="0 0 24 16" fill="white">
                                            <path d="M17,16H7a5,5,0,0,1,0-10,4.8,4.8,0,0,1,2.83,1,7,7,0,0,1,13,2,6,6,0,0,1-5.83,7Z" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-5 left-10 opacity-70">
                                        <svg width="18" height="11" viewBox="0 0 24 16" fill="white">
                                            <path d="M17,16H7a5,5,0,0,1,0-10,4.8,4.8,0,0,1,2.83,1,7,7,0,0,1,13,2,6,6,0,0,1-5.83,7Z" />
                                        </svg>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Damped Weighted Knob (Sun Right, Moon Left) */}
                    <motion.div
                        animate={{ x: isCinephile ? 0 : 38 }}
                        transition={{ type: "spring", stiffness: 180, damping: 28, mass: 1.2 }}
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 z-10 group-hover:scale-105 shadow-xl ${
                            isCinephile 
                            ? 'bg-[#0f172a] shadow-[0_0_15px_#22d3ee] border border-comic-cyan/20' 
                            : 'bg-[#fff] shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-elegant-gold/20'
                        }`}
                    >
                        <AnimatePresence mode="wait">
                            {isCinephile ? (
                                <motion.div
                                    key="half-moon"
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    {/* Sharp Cyan Crescent Half-Moon */}
                                    <div className="relative w-5.5 h-5.5 flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee,inset_-2px_-1px_4px_black]" />
                                        <div className="absolute top-0 right-0 w-5 h-5 bg-[#0f172a] rounded-full translate-x-1.5 -translate-y-1.5" />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="volumetric-sun"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-6 h-6 rounded-full shadow-[0_0_20px_#ffbb00,inset_0_0_12px_white]"
                                    style={{ 
                                        background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #ff8800 100%)'
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Ultra-Subtle Lens Glint */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                        <div className="absolute top-1 left-2 w-2.5 h-1.5 bg-white/40 blur-[1px] rounded-full rotate-[35deg] pointer-events-none" />
                    </motion.div>
                </motion.div>

                {/* Theme Suggestion Bubble (Ad-style Pop-up) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: -20 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: 0,
                        y: [0, -4, 0],
                    }}
                    transition={{ 
                        opacity: { delay: 1.5, duration: 0.5 },
                        scale: { delay: 1.5, type: "spring", stiffness: 260, damping: 20 },
                        x: { delay: 1.5, duration: 0.5 },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    onClick={toggleTheme}
                    className={`absolute left-full ml-1 whitespace-nowrap hidden md:block z-50 cursor-pointer group/bubble`}
                >
                    <div className={`relative px-4 py-2 rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl ${
                        isCinephile 
                        ? 'bg-comic-yellow border-4 border-ink shadow-comic-dark font-comic text-ink font-bold text-sm -rotate-2 hover:rotate-0' 
                        : 'glass-elegant border border-elegant-gold/30 shadow-elegant-gold/20 font-serif italic text-elegant-gold text-[11px] lowercase tracking-wider hover:border-elegant-gold/60'
                    }`}>
                        {/* Bubble Pointer (Tail) */}
                        <div className={`absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rotate-45 transition-all duration-500 ${
                            isCinephile 
                            ? 'bg-comic-yellow border-l-4 border-b-4 border-ink' 
                            : 'glass-elegant border-l border-b border-elegant-gold/30'
                        }`}></div>
                        
                        <div className="flex items-center gap-2">
                            {isCinephile ? "HEY! CHECK THIS THEME TOO" : "explore the other atmosphere"}
                            <motion.span 
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className={`w-1.5 h-1.5 rounded-full ${isCinephile ? 'bg-ink' : 'bg-elegant-gold'}`}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Boutique Label (Visual context) */}
                <span className={`text-[8px] writing-mode-vertical-rl rotate-180 uppercase tracking-[0.5em] font-black opacity-40 transition-opacity duration-700 group-hover:opacity-100 ${
                    isCinephile ? 'text-comic-cyan' : 'text-elegant-gold'
                }`}>
                    MODE
                </span>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`md:hidden absolute top-24 left-4 right-4 transition-all duration-300 origin-top overflow-hidden pointer-events-auto border-4 ${isCinephile 
                    ? 'bg-noir border-ink shadow-comic-hard-cyan opacity-100 scale-y-100' 
                    : 'bg-elegant-ivory border-elegant-gold shadow-elegant'
                } ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
            >
                <div className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`font-bold uppercase tracking-wider block transition-colors border-b pb-2 ${isCinephile 
                                ? 'text-slate-300 hover:text-comic-yellow border-slate-800' 
                                : 'text-slate-600 hover:text-elegant-gold border-elegant-gold/10'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex justify-between items-center px-2 py-4 border-t border-elegant-gold/10">
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isCinephile ? 'text-comic-cyan' : 'text-elegant-gold'}`}>
                            Switch Atmosphere
                        </span>
                        <div 
                            onClick={toggleTheme}
                            className={`w-12 h-6 flex items-center cursor-pointer p-0.5 rounded-full border ${isCinephile ? 'bg-noir border-comic-cyan/40' : 'bg-[#fffbf0] border-elegant-gold/40'}`}
                        >
                            <motion.div 
                                animate={{ x: isCinephile ? 0 : 24 }}
                                className={`w-4.5 h-4.5 rounded-full ${isCinephile ? 'bg-comic-cyan' : 'bg-elegant-gold'}`}
                            />
                        </div>
                    </div>
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-center px-6 py-3 border-2 shadow-comic-dark mt-4 transition-all ${isCinephile 
                            ? 'font-comic text-xl bg-comic-red text-ink border-ink' 
                            : 'font-sans text-sm font-bold uppercase tracking-[0.2em] bg-elegant-dark text-elegant-gold border-elegant-gold hover:bg-elegant-gold hover:text-white'}`}
                    >
                        {isCinephile ? "Director's Cut" : "In Touch"}
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
