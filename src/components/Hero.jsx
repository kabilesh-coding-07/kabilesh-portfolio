import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
        >
            <div className="w-full grid md:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Typography Side (Spans 7 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-7"
                >
                    <h1 className="text-7xl md:text-9xl font-comic tracking-wider text-comic-yellow comic-stroke mb-4 leading-none" style={{ textShadow: '6px 6px 0px #ff003c' }}>
                        KABILESH
                        <br />
                        <span className="text-comic-cyan" style={{ textShadow: '6px 6px 0px #ffffff' }}>MANOKARAN.</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-slate-300 mb-10 max-w-xl leading-relaxed mt-8 space-y-4 font-medium uppercase tracking-wide">
                        <p className="border-l-4 border-comic-red pl-4">
                            A Python & Django Developer crafting <span className="text-comic-yellow">blockbuster web experiences</span>.
                        </p>
                        <p className="border-l-4 border-comic-cyan pl-4">
                            I storyboard, design, and direct code.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16"
                    >
                        <ArrowDownRight className="text-slate-400 animate-bounce" size={32} />
                    </motion.div>
                </motion.div>

                {/* Right Visual Side (Spans 5 cols) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                    className="md:col-span-5 relative hidden md:flex justify-center items-center h-[500px]"
                >

                    {/* Main Polaroid Image / Comic Panel */}
                    <div className="bg-noir border-4 border-ink p-4 pb-12 shadow-comic-hard-cyan transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20 w-80 relative group">

                        {/* Film Strip Holes Decoration */}
                        <div className="absolute top-2 left-[-16px] bottom-2 w-4 flex flex-col justify-between hidden">
                            {[...Array(6)].map((_, i) => <div key={i} className="w-3 h-4 bg-noir border border-ink"></div>)}
                        </div>

                        <div className="w-full aspect-[4/5] bg-slate-800 border-2 border-ink overflow-hidden transition-all duration-700">
                            {/* Generated anime cinephile developer persona */}
                            <img
                                src="/avatar.png"
                                alt="Profile"
                                className="w-full h-full object-cover transition-all duration-300"
                            />
                        </div>
                        <div className="absolute bottom-1 left-0 right-0 text-center font-comic tracking-widest text-2xl text-ink uppercase">
                            SCENE 01
                        </div>
                    </div>

                    {/* Sticky Note -> Action Burst */}
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

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
