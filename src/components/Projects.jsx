import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'MOVIE RANKER v1.0',
            period: 'COLLEGE ERA',
            badge: 'Feature Presentation',
            description: 'A classic CLI script for sorting and ranking cinematic masterpieces. My first foray into user-driven data structures.',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-slate-900',
            demoUrl: 'https://raw.githubusercontent.com/kabilesh-coding-07/movie-ranker/main/main.py',
        },
        {
            title: 'CINE-TODO CHECKLIST',
            period: 'COLLEGE ERA',
            badge: 'Origin Story',
            description: 'The mission-critical checklist for every aspiring director. A simple yet effective Python task manager.',
            image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-indigo-950',
            demoUrl: 'https://raw.githubusercontent.com/kabilesh-coding-07/cine-todo/main/main.py',
        },
        {
            title: 'SCRIPT ANALYSER',
            period: 'COLLEGE ERA',
            badge: 'Director\'s Cut',
            description: 'Semantic inspector for film scripts. Analyzes word frequency and detects "Noir" thematic elements.',
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-noir',
            demoUrl: 'https://raw.githubusercontent.com/kabilesh-coding-07/script-analyzer/main/main.py',
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
                className="flex flex-col items-center justify-center mb-20"
            >
                <h2 className="text-6xl md:text-7xl font-comic tracking-widest text-ink mb-6 comic-stroke" style={{ textShadow: '4px 4px 0px #00f0ff' }}>
                    BLOCKBUSTERS.
                </h2>
                <div className="flex gap-8 text-lg font-bold uppercase tracking-wider text-slate-400">
                    <a href="#about" className="hover:text-comic-yellow transition-colors">Origins</a>
                    <span className="text-ink comic-stroke" style={{ textShadow: '2px 2px 0px #ff003c' }}>Features</span>
                    <a href="#stack" className="hover:text-comic-cyan transition-colors">Arsenal</a>
                </div>
            </motion.div>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col"
                    >

                        {/* Project Header Info */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 px-4 relative z-10">
                            <div className="flex items-center gap-4 flex-wrap">
                                <h3 className="text-4xl md:text-5xl font-comic tracking-wider text-ink">{project.title}</h3>
                                <div className="px-4 py-2 border-2 border-ink bg-comic-cyan text-noir text-sm font-bold uppercase tracking-widest flex items-center gap-2 shadow-comic-dark -rotate-2">
                                    <span className="w-2 h-2 rounded-none bg-ink animate-pulse"></span>
                                    {project.badge}
                                </div>
                            </div>
                            <div className="text-slate-400 font-bold uppercase tracking-widest bg-noir border-2 border-ink px-3 py-1 shadow-comic-dark">
                                {project.period}
                            </div>
                        </div>

                        {/* Huge Project Card Area */}
                        <div className={`w-full rounded-none border-4 border-ink shadow-comic-hard-yellow relative group p-8 md:p-12 min-h-[500px] flex flex-col justify-end bg-noir overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2`}>

                            {/* The actual product mockup image */}
                            <div className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                />
                                {/* Gradient overlay for text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>

                            {/* Inner Info Overlay */}
                            <div className="relative z-10 max-w-2xl">
                                <p className="text-ink text-lg md:text-xl font-bold mb-6 leading-relaxed bg-noir border-2 border-ink p-4 shadow-comic-dark inline-block">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a href={project.demoUrl} className="flex items-center gap-2 px-6 py-3 border-4 border-ink bg-comic-red text-ink font-comic text-2xl tracking-wider hover:bg-comic-yellow transition-colors shadow-comic-dark -rotate-2 hover:rotate-0">
                                        PREMIERE <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
