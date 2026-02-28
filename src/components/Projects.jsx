import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Terminal, ChevronRight, Play, RefreshCcw } from 'lucide-react';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 'ranker',
            title: 'MOVIE RANKER v1.0',
            period: 'COLLEGE ERA',
            badge: 'Feature Presentation',
            description: 'A classic CLI script for sorting and ranking cinematic masterpieces. My first foray into user-driven data structures.',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-slate-900',
        },
        {
            id: 'todo',
            title: 'CINE-TODO CHECKLIST',
            period: 'COLLEGE ERA',
            badge: 'Origin Story',
            description: 'The mission-critical checklist for every aspiring director. A simple yet effective Python task manager.',
            image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-indigo-950',
        },
        {
            id: 'analyzer',
            title: 'SCRIPT ANALYSER',
            period: 'COLLEGE ERA',
            badge: 'Director\'s Cut',
            description: 'Semantic inspector for film scripts. Analyzes word frequency and detects "Noir" thematic elements.',
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-noir',
        }
    ];

    // MOVIE RANKER SIMULATION
    const MovieRankerSim = () => {
        const [movies, setMovies] = useState([]);
        const [input, setInput] = useState('');

        const addMovie = (e) => {
            e.preventDefault();
            if (input.trim()) {
                setMovies([...movies, input.trim()]);
                setInput('');
            }
        };

        return (
            <div className="space-y-4">
                <p className="text-comic-yellow font-mono">{"> --- MOVIE RANKER v1.0 ---"}</p>
                <form onSubmit={addMovie} className="flex gap-2">
                    <span className="text-comic-cyan">$</span>
                    <input
                        autoFocus
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="ENTER TITLE..."
                        className="bg-transparent border-none outline-none text-white font-mono w-full"
                    />
                </form>
                <div className="mt-4 p-4 border border-comic-cyan/30 bg-noir/50">
                    <p className="text-xs text-slate-500 mb-2 font-mono tracking-widest uppercase">Official Selection:</p>
                    {movies.map((m, i) => (
                        <p key={i} className="font-mono text-white animate-in slide-in-from-left-2 duration-300">
                            {i + 1}. {m.toUpperCase()}
                        </p>
                    ))}
                    {movies.length === 0 && <p className="text-slate-600 font-mono italic">Waiting for input...</p>}
                </div>
            </div>
        );
    };

    // CINE-TODO SIMULATION
    const CineTodoSim = () => {
        const [tasks, setTasks] = useState([
            { text: "Script Analysis", done: true },
            { text: "Location Scouting", done: false },
            { text: "Final Edit Review", done: false }
        ]);

        const toggle = (idx) => {
            const newTasks = [...tasks];
            newTasks[idx].done = !newTasks[idx].done;
            setTasks(newTasks);
        };

        return (
            <div className="space-y-4">
                <p className="text-comic-yellow font-mono">{"> --- CINE-TODO TERMINAL ---"}</p>
                <div className="space-y-2">
                    {tasks.map((t, i) => (
                        <div key={i} onClick={() => toggle(i)} className="flex items-center gap-3 cursor-pointer group">
                            <span className={`text-xl font-mono ${t.done ? 'text-comic-green' : 'text-comic-red'}`}>
                                {t.done ? '[x]' : '[ ]'}
                            </span>
                            <span className={`font-mono ${t.done ? 'text-slate-500 line-through' : 'text-white'} group-hover:text-comic-cyan transition-colors`}>
                                {t.text}
                            </span>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-comic-cyan mt-6 font-mono animate-pulse">{"> STATUS: ACTIVE"}</p>
            </div>
        );
    };

    // SCRIPT ANALYZER SIMULATION
    const ScriptAnalyzerSim = () => {
        const [text, setText] = useState('');
        const [results, setResults] = useState(null);
        const [isScanning, setIsScanning] = useState(false);

        const analyze = () => {
            setIsScanning(true);
            setTimeout(() => {
                const words = text.trim().split(/\s+/).filter(w => w.length > 0);
                setResults({
                    total: words.length,
                    unique: new Set(words.map(w => w.toLowerCase())).size,
                    noir: text.toLowerCase().includes('noir')
                });
                setIsScanning(false);
            }, 1000);
        };

        return (
            <div className="space-y-4">
                <p className="text-comic-yellow font-mono">{"> --- SCRIPT ANALYSER ENGINE ---"}</p>
                <textarea
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="PASTE SCRIPT SNIPPET HERE..."
                    className="w-full h-32 bg-noir/50 border border-ink p-3 text-white font-mono text-sm outline-none focus:border-comic-cyan transition-colors resize-none"
                />
                <button
                    onClick={analyze}
                    disabled={!text || isScanning}
                    className="px-6 py-2 bg-comic-cyan text-noir font-bold font-mono hover:bg-white transition-colors disabled:opacity-50"
                >
                    {isScanning ? 'SCANNING...' : 'EXEC_ANALYSIS'}
                </button>

                {results && !isScanning && (
                    <div className="mt-4 p-4 border-2 border-ink bg-noir/80 animate-in fade-in zoom-in duration-300">
                        <p className="text-comic-cyan font-mono mb-2">SCAN COMPLETE:</p>
                        <p className="text-white font-mono text-sm">TOTAL WORDS: {results.total}</p>
                        <p className="text-white font-mono text-sm">UNIQUE CONTEXTS: {results.unique}</p>
                        <div className={`mt-2 p-2 font-mono text-xs inline-block ${results.noir ? 'bg-comic-red text-white' : 'bg-slate-800 text-slate-400'}`}>
                            {results.noir ? 'GENRE: NEO-NOIR DETECTED' : 'GENRE: UNKNOWN'}
                        </div>
                    </div>
                )}
            </div>
        );
    };

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
                                    <button
                                        onClick={() => setActiveProject(project)}
                                        className="flex items-center gap-2 px-6 py-3 border-4 border-ink bg-comic-red text-ink font-comic text-2xl tracking-wider hover:bg-comic-yellow transition-colors shadow-comic-dark -rotate-2 hover:rotate-0"
                                    >
                                        PREMIERE <Play size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* INTERACTIVE HACKER CONSOLE OVERLAY */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
                    >
                        {/* CRT Effect Layers */}
                        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden opacity-20">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
                            <div className="absolute inset-0 animate-pulse bg-white/5"></div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-noir border-4 border-comic-cyan w-full max-w-4xl h-[600px] flex flex-col relative shadow-[0_0_50px_rgba(0,240,255,0.3)]"
                        >
                            {/* Terminal Header */}
                            <div className="bg-comic-cyan p-3 flex justify-between items-center border-b-4 border-ink">
                                <div className="flex items-center gap-2 font-mono text-noir font-bold uppercase tracking-tighter">
                                    <Terminal size={20} />
                                    <span>{activeProject.title} // MISSION_ID: {activeProject.id.toUpperCase()}</span>
                                </div>
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="p-1 hover:bg-comic-red transition-colors text-noir"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Terminal Window Content */}
                            <div className="flex-1 p-6 font-mono overflow-y-auto custom-scrollbar relative">
                                {/* Boot Sequence UI */}
                                <div className="mb-6 opacity-60 text-[10px] space-y-1">
                                    <p className="text-comic-cyan">SYSTEM BOOT... OK</p>
                                    <p className="text-comic-cyan">DECRYPTING ASSETS... 100%</p>
                                    <p className="text-comic-cyan">ESTABLISHING SECURE CONNECTION...</p>
                                    <p className="text-comic-cyan tracking-widest">{">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"}</p>
                                </div>

                                {activeProject.id === 'ranker' && <MovieRankerSim />}
                                {activeProject.id === 'todo' && <CineTodoSim />}
                                {activeProject.id === 'analyzer' && <ScriptAnalyzerSim />}

                                {/* Bottom Status Bar */}
                                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center pt-4 border-t border-comic-cyan/20 opacity-40">
                                    <div className="flex items-center gap-2 text-[10px] text-comic-cyan italic">
                                        <RefreshCcw size={10} className="animate-spin" />
                                        SYNCING WITH NEURAL_NET...
                                    </div>
                                    <p className="text-[10px] text-white">V_2049.0.1</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
