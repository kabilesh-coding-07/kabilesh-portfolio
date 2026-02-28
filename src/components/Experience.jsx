import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 'vol-0',
            title: 'BSc. IT STUDENT',
            location: 'COIMBATORE',
            period: '2020 - 2023',
            dialogue: "The origin point. Mastered the fundamentals of computer science at Sri Krishna Adithya College.",
            actionText: "*KNOWLEDGE ACQUIRED*",
            bgColor: 'bg-noir',
        },
        {
            id: 'vol-1',
            title: 'MOBILE APP INTERN',
            location: 'STARTUP WARS',
            period: 'Previous Era',
            dialogue: "Code reviews, QA coordination, and wireframes. We translated raw requirements into visual reality.",
            actionText: "*UI DEPLOYED*",
            bgColor: 'bg-ink',
        },
        {
            id: 'vol-2',
            title: 'JUNIOR PYTHON DJANGO DEV',
            location: 'TECH HQ',
            period: '2023 - 2025',
            dialogue: "We needed to scale. RESTful API endpoints, Django Rest Framework... unit testing was non-negotiable.",
            actionText: "*SYSTEM OPTIMIZED*",
            bgColor: 'bg-noir',
        }
    ];

    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current || !scrollRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const scrollWidth = scrollRef.current.scrollWidth;
        const maxScroll = scrollWidth - containerWidth;

        if (maxScroll <= 0) return;

        // Calculate cursor position as a percentage of the screen width
        const xPercentage = e.clientX / window.innerWidth;

        // Map the percentage to the scroll position
        const targetScroll = maxScroll * xPercentage;

        // Apply scroll immediately (smooth behavior is handled by CSS)
        scrollRef.current.style.transform = `translateX(-${targetScroll}px)`;
    };

    return (
        <section
            id="experience"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="py-24 overflow-hidden relative border-y-4 border-ink bg-noir"
        >
            {/* Background Halftone for the strip */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center mb-16 px-6"
            >
                <h2 className="text-6xl md:text-7xl font-comic tracking-widest text-ink text-center comic-stroke" style={{ textShadow: '4px 4px 0px #00f0ff' }}>
                    THE ORIGIN STORY
                </h2>
                <p className="mt-4 font-comic text-xl text-comic-yellow animate-pulse tracking-widest">
                    {"< MOVE CURSOR TO EXPLORE >"}
                </p>
            </motion.div>

            {/* Cursor-Tracked Scroll Strip Container */}
            <div className="w-full overflow-hidden px-6 md:px-12 py-8 pb-16">
                <div
                    ref={scrollRef}
                    className="flex gap-8 md:gap-12 w-max pl-4 items-center transition-transform duration-300 ease-out"
                >
                    {/* The Beginning Graphic Cover */}
                    <div className="w-[85vw] md:w-[400px] snap-center flex-shrink-0 flex items-center justify-center relative border-4 border-ink bg-comic-yellow shadow-comic-hard-cyan overflow-hidden group py-24 md:py-32">
                        {/* Dramatic sunburst background */}
                        <div className="absolute inset-0 bg-[repeating-conic-gradient(#ff003c_0_15deg,transparent_15deg_30deg)] opacity-20 group-hover:rotate-12 transition-transform duration-700"></div>

                        {/* Huge Comic Text Acting as the Image */}
                        <div className="relative z-10 flex flex-col items-center justify-center transform -rotate-12 group-hover:scale-110 transition-transform duration-300">
                            <span className="font-bold uppercase tracking-widest text-lg text-ink comic-stroke px-4 py-1 bg-white border-4 border-ink mb-4 transform rotate-6">
                                VOL. 1
                            </span>
                            <h3 className="text-6xl md:text-8xl font-comic tracking-tighter text-white text-center comic-stroke leading-none" style={{ textShadow: '6px 6px 0px #00f0ff, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000' }}>
                                THE<br />BEGINNING
                            </h3>
                        </div>

                        {/* Action Lines Overlay */}
                        <div className="absolute inset-0 border-8 border-transparent group-hover:border-white transition-colors duration-300 pointer-events-none mix-blend-overlay"></div>
                    </div>

                    {experiences.map((exp, i) => (
                        <div key={exp.id} className={`w-[85vw] md:w-[600px] flex-shrink-0 flex flex-col md:flex-row relative group`}>
                            {/* Panel Outline */}
                            <div className={`flex-1 border-4 ${exp.bgColor === 'bg-ink' ? 'border-noir bg-ink' : 'border-ink bg-noir'} shadow-comic-hard-yellow flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300 relative`}>

                                {/* Header / Scene Info */}
                                <div className={`border-b-4 ${exp.bgColor === 'bg-ink' ? 'border-noir bg-comic-yellow' : 'border-ink bg-comic-red'} p-3 flex justify-between items-center`}>
                                    <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-ink comic-stroke px-2 py-1 bg-noir border-2 border-ink group-hover:bg-comic-cyan transition-colors">
                                        SCENE {i + 1}
                                    </span>
                                    <span className={`font-comic tracking-wider text-xl ${exp.bgColor === 'bg-ink' ? 'text-noir' : 'text-ink'}`}>
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Main Action Area */}
                                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
                                    <h3 className={`text-4xl md:text-6xl font-comic tracking-wider mb-6 leading-none ${exp.bgColor === 'bg-ink' ? 'text-noir' : 'text-ink'}`}>
                                        {exp.title}
                                    </h3>

                                    {/* Narration Box */}
                                    <div className={`mt-auto border-4 ${exp.bgColor === 'bg-ink' ? 'border-noir bg-white' : 'border-ink bg-comic-yellow'} p-4 shadow-comic-dark transform rotate-1 group-hover:-rotate-1 transition-transform`}>
                                        <p className="font-comic text-xl leading-snug text-slate-800">
                                            "{exp.dialogue}"
                                        </p>
                                    </div>
                                </div>

                                {/* SFX Text */}
                                <div className="absolute top-1/3 -right-6 md:-right-12 transform rotate-90 opacity-20 group-hover:opacity-100 transition-opacity pointer-events-none z-0">
                                    <span className={`font-comic text-6xl md:text-9xl ${exp.bgColor === 'bg-ink' ? 'text-comic-red' : 'text-comic-cyan'} comic-stroke whitespace-nowrap`}>
                                        {exp.actionText}
                                    </span>
                                </div>

                                {/* Frame marks */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-comic-yellow pointer-events-none mix-blend-difference"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-comic-yellow pointer-events-none mix-blend-difference"></div>
                            </div>
                        </div>
                    ))}

                    {/* Fake extra panel to imply continuation */}
                    <div className="w-[40vw] md:w-[300px] flex-shrink-0 relative border-4 border-ink bg-noir flex items-center justify-center opacity-50 border-dashed py-24 md:py-32">
                        <span className="font-comic text-3xl text-ink tracking-widest animate-pulse text-center">TO BE<br />CONTINUED...</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
