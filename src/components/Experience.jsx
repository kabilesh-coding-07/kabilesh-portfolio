import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Experience = ({ isCinephile }) => {
    const experiences = [
        {
            id: 'vol-0',
            title: 'BSc. IT STUDENT',
            location: 'SRI KRISHNA ADITHYA COLLEGE',
            period: '2020 - 2023',
            dialogue: "The origin point. Mastered the fundamentals of computer science and IT systems.",
            actionText: "*KNOWLEDGE ACQUIRED*",
            bgColor: 'bg-noir',
        },
        {
            id: 'vol-1',
            title: 'MOBILE APP INTERN',
            location: 'STARTUP WARS',
            period: '2022 - 2023',
            dialogue: "Coordinated with QA, participated in code reviews, and assisted in creating wireframes and mockups.",
            actionText: "*UI DEPLOYED*",
            bgColor: 'bg-ink',
        },
        {
            id: 'vol-2',
            title: 'JUNIOR PYTHON DJANGO DEV',
            location: 'TECH HQ',
            period: '2023 - 2025',
            dialogue: "Optimized RESTful API endpoints with Django Rest Framework and ensured quality through unit testing.",
            actionText: "*SYSTEM OPTIMIZED*",
            bgColor: 'bg-noir',
        }
    ];

    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!isCinephile || !containerRef.current || !scrollRef.current || window.innerWidth < 768) return;

        const containerWidth = containerRef.current.offsetWidth;
        const scrollWidth = scrollRef.current.scrollWidth;
        const maxScroll = scrollWidth - containerWidth;

        if (maxScroll <= 0) return;

        const xPercentage = e.clientX / window.innerWidth;
        const targetScroll = maxScroll * xPercentage;
        scrollRef.current.style.transform = `translateX(-${targetScroll}px)`;
    };

    if (!isCinephile) {
        return (
            <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-elegant-dark italic mb-4">Professional Chronicle</h2>
                    <p className="text-elegant-gold tracking-[0.2em] uppercase text-sm font-bold">A journey through development and design</p>
                </motion.div>

                <div className="space-y-12 sm:space-y-20 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-elegant-gold/40 before:to-transparent before:animate-pulse">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Floating Marker */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute left-[12px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-elegant-gold shadow-[0_0_15px_rgba(197,160,89,0.5)] z-10 border-2 border-white"
                            />

                            <motion.div 
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                className={`flex-1 w-full glass-elegant shimmer-gold p-5 sm:p-10 rounded-2xl sm:rounded-3xl ml-8 md:ml-0 transition-all duration-500 hover:shadow-2xl hover:shadow-elegant-gold/10 ${i % 2 === 0 ? 'md:text-right' : 'text-left'}`}
                            >
                                <motion.span 
                                    className="text-elegant-gold font-black tracking-[0.3em] text-[10px] uppercase mb-4 block"
                                >
                                    {exp.period}
                                </motion.span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-elegant-dark italic mb-2 tracking-tight">{exp.title}</h3>
                                <p className="text-elegant-gold/60 text-xs font-black uppercase tracking-[0.4em] mb-6">{exp.location}</p>
                                <div className="h-px w-20 bg-elegant-gold/10 mb-6 inline-block" />
                                <p className="text-slate-600 leading-relaxed font-serif italic text-lg">"{exp.dialogue}"</p>
                            </motion.div>
                            <div className="flex-1 hidden md:block relative">
                                <motion.span 
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    className={`absolute top-1/2 -translate-y-1/2 text-[120px] font-serif font-black text-elegant-gold/5 pointer-events-none select-none ${i % 2 === 0 ? 'left-0' : 'right-0'}`}
                                >
                                    0{i + 1}
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section
            id="experience"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="py-24 overflow-hidden relative border-y-4 border-ink bg-noir"
        >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center mb-16 px-6"
            >
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-comic tracking-widest text-ink text-center comic-stroke" style={{ textShadow: '4px 4px 0px #00f0ff' }}>
                    THE ORIGIN STORY
                </h2>
                <p className="mt-4 font-comic text-base sm:text-xl text-comic-yellow animate-pulse tracking-widest">
                    {"< MOVE CURSOR TO EXPLORE >"}
                </p>
            </motion.div>

            <div className="w-full overflow-x-auto md:overflow-hidden hide-scrollbar px-6 md:px-12 py-8 pb-16">
                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-12 w-max pl-4 items-center focus:outline-none md:transition-transform duration-300 ease-out"
                >
                    <div className="w-[85vw] md:w-[400px] snap-center flex-shrink-0 flex items-center justify-center relative border-4 border-ink bg-comic-yellow shadow-comic-hard-cyan overflow-hidden group py-16 sm:py-24 md:py-32">
                        <div className="absolute inset-0 bg-[repeating-conic-gradient(#ff003c_0_15deg,transparent_15deg_30deg)] opacity-20 md:group-hover:rotate-12 transition-transform duration-700"></div>

                        <div className="relative z-10 flex flex-col items-center justify-center transform -rotate-12 md:group-hover:scale-110 transition-transform duration-300">
                            <span className="font-bold uppercase tracking-widest text-lg text-ink comic-stroke px-4 py-1 bg-white border-4 border-ink mb-4 transform rotate-6">
                                VOL. 1
                            </span>
                            <h3 className="text-3xl sm:text-6xl md:text-8xl font-comic tracking-tighter text-white text-center comic-stroke leading-none" style={{ textShadow: '6px 6px 0px #00f0ff, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000' }}>
                                THE<br />BEGINNING
                            </h3>
                        </div>

                        <div className="absolute inset-0 border-[12px] border-transparent md:group-hover:border-white transition-colors duration-300 pointer-events-none mix-blend-overlay"></div>
                    </div>

                    {experiences.map((exp, i) => (
                        <div key={exp.id} className={`w-[85vw] md:w-[600px] flex-shrink-0 flex flex-col relative group`}>
                            <div className={`flex-1 border-4 ${exp.bgColor === 'bg-ink' ? 'border-noir bg-ink' : 'border-ink bg-noir'} shadow-comic-hard-yellow flex flex-col justify-between overflow-hidden md:group-hover:-translate-y-2 md:group-hover:-translate-x-2 transition-transform duration-300 relative`}>

                                <div className={`border-b-4 ${exp.bgColor === 'bg-ink' ? 'border-noir bg-comic-yellow' : 'border-ink bg-comic-red'} p-3 flex justify-between items-center`}>
                                    <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-ink comic-stroke px-2 py-1 bg-noir border-2 border-ink md:group-hover:bg-comic-cyan transition-colors">
                                        SCENE {i + 1}
                                    </span>
                                    <span className={`font-comic tracking-wider text-xl ${exp.bgColor === 'bg-ink' ? 'text-noir' : 'text-ink'}`}>
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
                                    <h3 className={`text-2xl sm:text-4xl md:text-6xl font-comic tracking-wider mb-4 sm:mb-6 leading-none ${exp.bgColor === 'bg-ink' ? 'text-noir' : 'text-ink'}`}>
                                        {exp.title}
                                    </h3>

                                    <div className={`mt-auto border-4 ${exp.bgColor === 'bg-ink' ? 'border-noir bg-white' : 'border-ink bg-comic-yellow'} p-3 md:p-4 shadow-comic-dark transform rotate-1 md:group-hover:-rotate-1 transition-transform`}>
                                        <p className="font-comic text-base md:text-xl leading-snug text-slate-800">
                                            "{exp.dialogue}"
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute top-1/3 -right-6 md:-right-12 transform rotate-90 opacity-20 md:group-hover:opacity-100 transition-opacity pointer-events-none z-0">
                                    <span className={`font-comic text-5xl md:text-9xl ${exp.bgColor === 'bg-ink' ? 'text-comic-red' : 'text-comic-cyan'} comic-stroke whitespace-nowrap`}>
                                        {exp.actionText}
                                    </span>
                                </div>

                                <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-comic-yellow pointer-events-none mix-blend-difference"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-comic-yellow pointer-events-none mix-blend-difference"></div>
                            </div>
                        </div>
                    ))}

                    <div className="w-[40vw] md:w-[300px] flex-shrink-0 relative border-4 border-ink bg-noir flex items-center justify-center opacity-50 border-dashed py-16 sm:py-24 md:py-32">
                        <span className="font-comic text-3xl text-ink tracking-widest animate-pulse text-center">TO BE<br />CONTINUED...</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
