import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isCinephile, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
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
            className="fixed top-3 sm:top-6 left-0 w-full z-50 px-2 sm:px-4 md:px-8 flex justify-center items-center gap-6 sm:gap-12 pointer-events-none"
        >
            {/* The Main Navbar Container (Central Elite Command) */}
            <nav className={`transition-all duration-300 px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between w-full max-w-2xl pointer-events-auto border-2 ${isCinephile 
                ? 'bg-noir border-ink shadow-comic-hard-yellow' 
                : 'glass-elegant shimmer-gold border-elegant-gold/30 rounded-full'}`}>
                {/* Initials Logo */}
                <motion.a 
                    whileHover={!isCinephile ? { scale: 1.1, rotate: 5 } : {}}
                    href="#" 
                    className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isCinephile 
                        ? 'font-comic text-xl sm:text-3xl -rotate-3 hover:rotate-3 shadow-comic-dark bg-comic-cyan text-noir border-[3px] sm:border-4 border-ink shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]' 
                        : 'font-serif text-lg sm:text-2xl bg-gradient-to-br from-elegant-gold to-[#ead7b5] text-white rounded-full shadow-lg shadow-elegant-gold/20'}`}
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

            {/* The "Satellite Command" Toggle (Layout Swap: MODE on Left) */}
            <div className="hidden md:flex flex-shrink-0 items-center gap-6 group pointer-events-auto relative">
                {/* Vertical Boutique Label (Now on the Left) */}
                <span className={`text-[8px] writing-mode-vertical-rl rotate-180 uppercase tracking-[0.5em] font-black opacity-40 transition-opacity duration-700 group-hover:opacity-100 ${
                    isCinephile ? 'text-comic-cyan' : 'text-elegant-gold'
                }`}>
                    MODE
                </span>

                <div className="relative w-20 h-10 flex items-center justify-center">
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        onClick={toggleTheme}
                        className="relative w-20 h-10 flex items-center justify-center translate-x-0"
                    >
                        {/* Toggle Track (Visual) */}
                        <div className={`relative w-20 h-10 flex items-center cursor-pointer p-1 rounded-full border-2 transition-all duration-700 ${
                            isCinephile 
                            ? 'bg-[#0f1012] border-comic-cyan/20 shadow-comic-dark' 
                            : 'bg-gradient-to-br from-[#c5a059] via-[#8e6e3c] to-[#c5a059] border-[#5a4626] shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]'
                        }`}>
                            {/* Internal Scenery Mask */}
                            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                                <motion.div 
                                    animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 5 }}
                                    className={`absolute inset-0 rounded-full border-2 ${isCinephile ? 'border-comic-cyan/40' : 'border-elegant-gold/40'}`}
                                />
                                <div className="absolute inset-0">
                                    <AnimatePresence mode="wait">
                                        {isCinephile ? (
                                            <motion.div 
                                                key="posh-noir-scenery"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="w-full h-full relative"
                                            >
                                                <div className="absolute top-2 left-6 flex items-center gap-1 scale-[0.6] opacity-80">
                                                    <motion.div 
                                                        animate={{ opacity: [1, 0, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_red]"
                                                    />
                                                    <span className="text-[10px] font-comic font-black text-white tracking-widest">REC</span>
                                                </div>
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
                            </div>

                            {/* Toggle Knob */}
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
                                        <motion.div key="half-moon" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="relative w-full h-full flex items-center justify-center">
                                            <div className="relative w-5.5 h-5.5 flex items-center justify-center">
                                                <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee,inset_-2px_-1px_4px_black]" />
                                                <div className="absolute top-0 right-0 w-5 h-5 bg-[#0f172a] rounded-full translate-x-1.5 -translate-y-1.5" />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="volumetric-sun" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-6 h-6 rounded-full shadow-[0_0_20px_#ffbb00,inset_0_0_12px_white]" style={{ background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #ff8800 100%)' }} />
                                    )}
                                </AnimatePresence>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                                <div className="absolute top-1 left-2 w-2.5 h-1.5 bg-white/40 blur-[1px] rounded-full rotate-[35deg] pointer-events-none" />
                            </motion.div>
                        </div>

                    </motion.div>
                    
                    {/* Theme Suggestion Bubble (Now Hierarchically Isolated & Spaced) */}
                    <div className="absolute top-[160%] left-[calc(50%+40px)] -translate-x-1/2 whitespace-nowrap hidden md:block z-[60] cursor-default group/bubble pointer-events-none">
                        <div className="pointer-events-auto">
                            <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className={`absolute inset-0 rounded-[24px] blur-md ${isCinephile ? 'bg-comic-yellow/40' : 'bg-elegant-gold/10'}`} />
                            <div className={`relative px-6 py-2.5 rounded-[22px] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${
                                isCinephile 
                                ? 'bg-[#FFDE00] border-[4px] border-black shadow-comic-dark font-sans font-black text-black text-sm uppercase' 
                                : 'bg-[#fdfcf0] border border-elegant-gold/40 shadow-xl font-serif italic text-elegant-gold text-[12px] font-bold tracking-wider'
                            }`}>
                                {/* SVG Tail */}
                                <div className="absolute -top-[11px] left-[calc(50%-64px)] -translate-x-1/2 w-6 h-3 flex justify-center overflow-hidden">
                                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                                        <path d="M12 0L24 12H0L12 0Z" className={`${isCinephile ? 'fill-[#FFDE00]' : 'fill-[#fdfcf0]'}`} />
                                        {isCinephile && <path d="M0 12L12 0L24 12" stroke="black" strokeWidth="6" fill="none" />}
                                        {!isCinephile && <path d="M0 12L12 0L24 12" stroke="rgba(197, 160, 89, 0.3)" strokeWidth="1" fill="none" />}
                                    </svg>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex space-x-1.5 grayscale-[0.8]">
                                        <motion.span animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className={`w-1.5 h-1.5 rounded-full ${isCinephile ? 'bg-black' : 'bg-elegant-gold/40'}`} />
                                        <motion.span animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className={`w-1.5 h-1.5 rounded-full ${isCinephile ? 'bg-black' : 'bg-elegant-gold/60'}`} />
                                        <motion.span animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className={`w-1.5 h-1.5 rounded-full ${isCinephile ? 'bg-black' : 'bg-elegant-gold/80'}`} />
                                    </div>
                                    {isCinephile ? (
                                        <span className="tracking-tighter">Flip it! See the magic? 🎬</span>
                                    ) : (
                                        <span className="lowercase text-elegant-gold font-bold">venture into the noir... ✨</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`md:hidden absolute top-24 left-4 right-4 transition-all duration-300 origin-top overflow-hidden pointer-events-auto border-4 ${isCinephile 
                    ? 'bg-noir border-ink shadow-comic-hard-cyan' 
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
                            className={`w-10 h-6 flex items-center cursor-pointer p-0.5 rounded-full border ${isCinephile ? 'bg-noir border-comic-cyan/40' : 'bg-[#fffbf0] border-elegant-gold/40'}`}
                        >
                            <motion.div 
                                animate={{ x: isCinephile ? 0 : 16 }}
                                className={`w-4 h-4 rounded-full ${isCinephile ? 'bg-comic-cyan' : 'bg-elegant-gold'}`}
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
