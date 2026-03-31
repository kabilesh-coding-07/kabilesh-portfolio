import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = ({ isCinephile }) => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
        >
            <div className="w-full grid md:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Typography Side (Spans 7 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-7"
                >
                    {isCinephile ? (
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-comic tracking-wider text-comic-yellow comic-stroke mb-4 leading-none" style={{ textShadow: '4px 4px 0px #ff003c' }}>
                            KABILESH
                            <br />
                            <span className="text-comic-cyan" style={{ textShadow: '6px 6px 0px #ffffff' }}>MANOKARAN.</span>
                        </h1>
                    ) : (
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight text-elegant-dark mb-4 leading-tight">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="block"
                            >Kabilesh</motion.span>
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-elegant-gold via-[#ead7b5] to-elegant-gold bg-[length:200%_auto] animate-shimmer italic font-light tracking-[-0.02em]"
                            >Manokaran.</motion.span>
                        </h1>
                    )}

                    <div className={`text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 max-w-xl leading-relaxed mt-4 sm:mt-8 space-y-3 sm:space-y-4 font-medium uppercase tracking-wide ${isCinephile ? 'text-slate-300' : 'text-slate-600'}`}>
                        <p className={`border-l-4 pl-4 ${isCinephile ? 'border-comic-red' : 'border-elegant-gold'}`}>
                            A Python & Django Developer crafting <span className={isCinephile ? 'text-comic-yellow' : 'text-elegant-gold'}>blockbuster web experiences</span>.
                        </p>
                        <p className={`border-l-4 pl-4 ${isCinephile ? 'border-comic-cyan' : 'border-elegant-gold/50'}`}>
                            I storyboard, design, and direct code.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 sm:mt-16"
                    >
                        <ArrowDownRight className={isCinephile ? 'text-slate-400 animate-bounce' : 'text-elegant-gold animate-bounce'} size={32} />
                    </motion.div>
                </motion.div>

                {/* Right Visual Side (Spans 5 cols) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                    className="md:col-span-5 relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px]"
                >

                    {/* Main Polaroid Image / Comic Panel */}
                    <motion.div 
                        whileHover={!isCinephile ? { y: -10, rotateY: 5 } : {}}
                        className={`transition-all duration-500 p-3 sm:p-4 pb-10 sm:pb-12 z-20 w-56 sm:w-72 md:w-80 relative group ${isCinephile 
                            ? 'bg-noir border-4 border-ink shadow-comic-hard-cyan transform rotate-3 hover:rotate-0' 
                            : 'glass-elegant rounded-xl p-2 border-white/40 shadow-2xl overflow-hidden posh-shimmer-subtle'}`}
                    >
                        {!isCinephile && (
                            <div className="absolute inset-0 bg-gradient-to-tr from-elegant-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                        <div className={`w-full aspect-[4/5] overflow-hidden transition-all duration-700 ${isCinephile ? 'bg-slate-800 border-2 border-ink' : 'rounded-lg'}`}>
                            <img
                                src={isCinephile ? "/avatar.png" : "/elegant_monogram.png"}
                                alt="Profile"
                                className={`w-full h-full object-cover transition-all duration-700 ${isCinephile ? '' : 'scale-110 group-hover:scale-100'}`}
                            />
                        </div>
                        <div className={`absolute bottom-2 sm:bottom-3 left-0 right-0 text-center tracking-[0.3em] sm:tracking-[0.4em] uppercase ${isCinephile ? 'font-comic text-lg sm:text-2xl text-ink' : 'font-sans text-[8px] sm:text-[9px] font-black text-elegant-gold/80'}`}>
                            {isCinephile ? 'SCENE 01' : 'Collection 0.1'}
                        </div>
                    </motion.div>

                    {/* Posh Floating Elements (Elegant Only) */}
                    {!isCinephile && (
                        <>
                            <motion.div 
                                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-16 sm:w-24 h-16 sm:h-24 glass-elegant rounded-full shimmer-gold hidden sm:block"
                            />
                            <motion.div 
                                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 glass-elegant rounded-full flex items-center justify-center hidden sm:block"
                            >
                                <div className="w-24 h-24 border border-elegant-gold/20 rounded-full animate-spin-slow" />
                            </motion.div>
                        </>
                    )}

                    {/* Sticky Note -> Action Burst */}
                    {isCinephile && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                            className="absolute -top-4 -left-12 bg-comic-yellow border-4 border-ink shadow-comic-dark transform -rotate-12 z-30 px-6 py-4 flex items-center justify-center clip-path-polygon"
                        >
                            <p className="font-comic text-4xl text-ink comic-stroke transform rotate-6">
                                ACTION!
                            </p>
                        </motion.div>
                    )}

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
