import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = ({ isCinephile }) => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const projects = [
        {
            title: 'Siddha Wellness',
            period: 'Mar 2026',
            badge: isCinephile ? 'Ancient wisdom' : 'Healing Arts',
            description: 'A premium digital ecosystem for traditional Siddha medicine, featuring integrated practitioner workflows, authentic herbal repositories, and holistic patient care paths.',
            image: '/projects/siddha-wellness/thumbnail.png',
            bgColor: 'bg-[#0d2a1f]',
            demoUrl: '/projects/siddha-wellness/index.html',
        },
        {
            title: 'Fork & Knife',
            period: 'Mar 2026',
            badge: isCinephile ? 'Fine Dining' : 'Hospitality',
            description: 'A premium restaurant web application featuring a dark culinary aesthetic, dynamic menus, and interactive reservations.',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-slate-900',
            demoUrl: '/projects/fork-and-knife/index.html',
        },
        {
            title: 'Ride Infinity',
            period: 'Mar 2026',
            badge: isCinephile ? 'Adrenaline' : 'Mobility',
            description: 'High-end motorcycle rental platform with a sleek sports-focused dark theme and booking system.',
            image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-cyan-950',
            demoUrl: '/projects/ride-infinity/index.html',
        },
        {
            title: 'Agrozy Foods',
            period: 'Mar 2026',
            badge: isCinephile ? 'Pure Gold' : 'E-Commerce',
            description: 'Premium saffron e-commerce featuring opulent gold-on-dark aesthetics and local currency pricing.',
            image: '/projects/agrozy-foods/thumbnail.png',
            bgColor: 'bg-yellow-950',
            demoUrl: '/projects/agrozy-foods/index.html',
        },
        {
            title: 'Farm Pick',
            period: 'Mar 2026',
            badge: isCinephile ? 'Fresh Roots' : 'Agriculture',
            description: 'Organic produce marketplace connecting local farms with families, wrapped in a vibrant green theme.',
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-emerald-950',
            demoUrl: '/projects/farm-pick/index.html',
        },
        {
            title: 'FiberFlow',
            period: 'Mar 2026',
            badge: isCinephile ? 'Hyper Speed' : 'Telecom',
            description: 'A next-generation ISP platform designed for maximum performance, latency optimization, and transparent tiered plans.',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-blue-950',
            demoUrl: '/projects/fiberflow/index.html',
        },
        {
            title: 'Dot Decimals',
            period: 'Mar 2026',
            badge: isCinephile ? 'The Matrix' : 'Enterprise',
            description: 'Professional IT Infrastructure and Cloud migration services featuring an authoritative violet dark theme.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-violet-950',
            demoUrl: '/projects/dot-decimals/index.html',
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center mb-16"
            >
                <h2 className={`text-6xl md:text-7xl tracking-widest mb-6 ${isCinephile ? 'font-comic text-ink comic-stroke' : 'font-serif text-elegant-dark italic'}`} style={isCinephile ? { textShadow: '4px 4px 0px #00f0ff' } : {}}>
                    {isCinephile ? 'BLOCKBUSTERS.' : 'Selected Works'}
                </h2>
                <div className={`flex gap-8 text-lg font-bold uppercase tracking-wider ${isCinephile ? 'text-slate-400' : 'text-slate-500 font-serif lowercase italic'}`}>
                    <a href="#about" className={`transition-colors ${isCinephile ? 'hover:text-comic-yellow' : 'hover:text-elegant-gold'}`}>Origins</a>
                    <span className={isCinephile ? 'text-ink comic-stroke' : 'text-elegant-gold not-italic font-bold uppercase tracking-widest'} style={isCinephile ? { textShadow: '2px 2px 0px #ff003c' } : {}}>Features</span>
                    <a href="#stack" className={`transition-colors ${isCinephile ? 'hover:text-comic-cyan' : 'hover:text-elegant-gold'}`}>Arsenal</a>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
                <AnimatePresence mode='popLayout'>
                    {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col"
                        >

                        {/* Project Card Area */}
                        <motion.div 
                            onMouseEnter={() => !isCinephile && setHoveredProject(index)}
                            onMouseLeave={() => !isCinephile && setHoveredProject(null)}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={!isCinephile ? { y: -10, transition: { duration: 0.4 } } : "hover"}
                            animate="rest"
                            className={`w-full transition-all duration-700 relative group p-5 md:p-6 min-h-[460px] flex flex-col justify-end ${isCinephile ? 'border-x-[1.5px] border-b-[1.5px] border-t-0 rounded-b-xl border-ink bg-noir shadow-comic-hard-yellow mt-10' : 'border-[0.5px] rounded-xl glass-elegant border-white/30 shadow-xl shadow-elegant-gold/5 overflow-hidden mt-6'}`}
                        >
                            {/* Clapperboard Full Assembly (Cinephile Only) */}
                            {isCinephile && (
                                <>
                                    {/* Top Swinger Stick (Slimmer & Integrated) */}
                                    <motion.div 
                                        className="absolute -top-[16px] -left-[1.5px] -right-[1.5px] h-4 bg-noir border-[1.5px] border-ink origin-bottom-left rounded-t-lg z-[60] shadow-comic-dark pointer-events-none flex"
                                        variants={{
                                            rest: { 
                                                rotate: -8, 
                                                transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 } 
                                            },
                                            hover: { 
                                                rotate: 0, 
                                                transition: { type: "tween", duration: 0.15, ease: "easeOut" } 
                                            }
                                        }}
                                    >
                                        {/* Left Hinge Bracket */}
                                        <div className="w-16 h-full bg-noir border-r-[1.5px] border-ink flex items-center justify-center gap-2 relative z-20">
                                            <div className="w-2 h-2 rounded-full bg-slate-300 border-[1.5px] border-ink"></div>
                                            <div className="w-2 h-2 rounded-full bg-slate-300 border-[1.5px] border-ink"></div>
                                        </div>
                                        {/* Chevron Stripes Paint (Tighter Interval) */}
                                        <div className="flex-1 h-[calc(100%-4px)] mt-[2px] mr-[2px] clapper-top-stripes rounded-tr-md border-[1.5px] border-noir"></div>
                                    </motion.div>
                                    
                                    {/* Bottom Fixed Stick & Production Slate (Higher Fidelity) */}
                                    <div className="absolute top-0 -left-[1.5px] -right-[1.5px] z-50 pointer-events-none flex flex-col">
                                        <div className="w-full h-4 bg-noir border-[1.5px] border-ink relative z-10 shadow-comic-dark flex">
                                            {/* Left Hinge Bracket Base */}
                                            <div className="w-16 h-full bg-noir border-r-[1.5px] border-ink flex items-center justify-center gap-2 z-20">
                                                <div className="w-2 h-2 rounded-full bg-slate-300 border-[1.5px] border-ink"></div>
                                                <div className="w-2 h-2 rounded-full bg-slate-300 border-[1.5px] border-ink"></div>
                                            </div>
                                            {/* Chevron Stripes Paint */}
                                            <div className="flex-1 h-[calc(100%-4px)] mt-[2px] mr-[2px] clapper-bottom-stripes border-[1.5px] border-noir"></div>
                                        </div>
                                        
                                        {/* Slate Info Header (Smaller Padding & Fonts) */}
                                        <div className="w-[calc(100%-3px)] mx-[1.5px] bg-noir border-x-[1.5px] border-b-[1.5px] border-ink px-3 py-1.5 flex justify-between items-center relative z-0 mt-[-1.5px]">
                                            <div className="flex flex-col">
                                                <span className="text-[7px] text-slate-500 font-bold tracking-[0.2em] font-sans leading-none mb-0.5">PROD.</span>
                                                <span className="text-[10px] font-comic text-white tracking-widest leading-none">CASE_0{index + 1}</span>
                                            </div>
                                            <div className="hidden md:flex flex-col items-center px-3 border-l-[1.5px] border-slate-800">
                                                <span className="text-[7px] text-slate-500 font-bold tracking-[0.2em] font-sans leading-none mb-0.5">SCENE</span>
                                                <span className="text-sm font-comic text-comic-yellow tracking-widest leading-none pt-0.5">01</span>
                                            </div>
                                            <div className="hidden md:flex flex-col items-center px-3 border-l-[1.5px] border-slate-800">
                                                <span className="text-[7px] text-slate-500 font-bold tracking-[0.2em] font-sans leading-none mb-0.5">TAKE</span>
                                                <span className="text-sm font-comic text-comic-cyan tracking-widest leading-none pt-0.5">01</span>
                                            </div>
                                            <div className="flex flex-col text-right pl-3 border-l-[1.5px] border-slate-800">
                                                <span className="text-[7px] text-slate-500 font-bold tracking-[0.2em] font-sans leading-none mb-0.5">DIRECTOR</span>
                                                <span className="text-xs md:text-sm font-comic text-white tracking-[0.1em] leading-none text-right">KM.</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Integrated Poster Header (Cinephile - Refined Scale) */}
                                    <div className="absolute top-12 left-4 right-4 z-[45] pointer-events-none">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[8px] font-comic text-comic-yellow tracking-[0.4em] uppercase">CASE_STUDY_0{index + 1}</span>
                                            <h3 className="text-3xl md:text-4xl font-comic text-white drop-shadow-[3px_3px_0px_#000] tracking-tight">{project.title}</h3>
                                            <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 bg-comic-cyan text-noir font-comic text-[9px] rounded border-[1.5px] border-ink w-fit">
                                                <div className="w-1 h-1 rounded-full bg-ink animate-pulse" />
                                                {project.badge}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Elegant Theme Header (Refined Type) */}
                            {!isCinephile && (
                                <div className="absolute top-5 left-5 z-[45] pointer-events-none">
                                    <span className="text-[9px] font-black text-elegant-gold/80 tracking-[0.3em] uppercase mb-1.5 block border-b border-elegant-gold/20 w-fit">SELECTED_COLLECTION_0{index + 1}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white italic drop-shadow-md tracking-tighter">{project.title}</h3>
                                </div>
                            )}

                            <div className={`absolute inset-0 w-full h-full opacity-100 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none ${isCinephile ? 'rounded-b-2xl' : 'rounded-2xl'}`}>
                                <motion.img
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover object-top transition-all duration-700 elegant-image-reveal ${isCinephile ? 'opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-70' : 'opacity-[0.8] grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-95'}`}
                                />
                                
                                {!isCinephile && (
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-elegant-gold/40 to-transparent z-40 shimmer-gold" />
                                )}

                                <div className={`absolute inset-0 transition-all duration-1000 ${isCinephile ? 'bg-gradient-to-t from-black via-transparent to-transparent' : 'bg-gradient-to-t from-elegant-dark/50 via-transparent to-transparent group-hover:from-elegant-dark/70'}`}></div>
                            </div>

                            <div className="relative z-10 max-w-xl transform transition-transform duration-700 group-hover:translate-y-[-10px]">
                                <motion.p 
                                    className={`text-sm md:text-base font-serif italic mb-5 leading-relaxed ${isCinephile ? 'text-ink bg-noir border-[3px] border-ink shadow-comic-dark p-3.5' : 'text-white/90 drop-shadow-md'}`}
                                >
                                    {project.description}
                                </motion.p>

                                <div className="flex gap-4">
                                    <motion.a 
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.demoUrl} 
                                        className={`flex items-center gap-2.5 px-5 py-2.5 border-[1.5px] transition-all duration-500 rounded-full cursor-none relative z-50 ${isCinephile 
                                            ? 'border-ink bg-comic-red font-comic text-lg tracking-wider text-ink shadow-comic-dark -rotate-1 hover:rotate-0 hover:bg-comic-yellow' 
                                            : 'glass-elegant shimmer-gold border-white/20 text-white font-sans font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-elegant-dark'}`}
                                    >
                                        {isCinephile ? 'PREMIERE' : 'Explore_Now'} <ExternalLink size={14} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* See More Toggle (Refined Scale) */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-16 flex justify-center pb-8"
            >
                <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowAll(!showAll)}
                    className={`flex items-center gap-3 px-8 py-4 border-[1.5px] transition-all duration-500 rounded-full group pointer-events-auto ${isCinephile 
                        ? 'border-ink bg-comic-cyan font-comic text-xl tracking-widest text-ink shadow-comic-dark' 
                        : 'glass-elegant shimmer-gold border-white/20 text-elegant-gold font-sans font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-elegant-dark shadow-lg'}`}
                >
                    {showAll ? (
                        <>MINIMIZE_VAULT <ChevronUp size={16} className="animate-bounce" /></>
                    ) : (
                        <>EXPLORE_THE_VAULT <ChevronDown size={16} className="animate-bounce" /></>
                    )}
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Projects;
