import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Terminal, ChevronRight, Play, RefreshCcw, Minus, Square } from 'lucide-react';

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

    // --- UNIQUE UI WRAPPERS ---

    const RetroWin95Wrapper = ({ title, children, onClose }) => (
        <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] shadow-[2px_2px_0px_#000] p-1 w-full max-w-2xl h-[500px] flex flex-col font-sans select-none overflow-hidden">
            {/* Title Bar */}
            <div className="bg-[#000080] text-white p-1 flex justify-between items-center text-xs px-2 font-bold mb-1">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#c0c0c0] border border-white"></div>
                    <span className="tracking-tighter">{title}</span>
                </div>
                <div className="flex gap-1">
                    <button className="w-4 h-4 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080] text-[#000] flex items-center justify-center text-[10px]"><Minus size={10} /></button>
                    <button className="w-4 h-4 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080] text-[#000] flex items-center justify-center text-[10px]"><Square size={8} /></button>
                    <button onClick={onClose} className="w-4 h-4 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080] text-[#000] flex items-center justify-center text-[10px] font-bold">X</button>
                </div>
            </div>
            {/* Menu Bar */}
            <div className="flex gap-4 text-xs text-[#000] mb-1 px-1 border-b border-[#808080] pb-1 font-normal">
                <span>File</span><span>Edit</span><span>Search</span><span>Help</span>
            </div>
            {/* Content Area */}
            <div className="flex-1 bg-white border-t border-l border-[#808080] border-b border-r border-white p-4 overflow-y-auto text-[#000] custom-scrollbar-win95">
                {children}
            </div>
            {/* Status Bar */}
            <div className="mt-1 border-t border-white border-l border-white border-b border-[#808080] border-r border-[#808080] px-2 py-0.5 text-[10px] text-[#000] flex justify-between bg-[#c0c0c0]">
                <span>Status: READY</span>
                <span className="border-l border-[#808080] pl-2">C:\COLLEGE\PY\</span>
            </div>
        </div>
    );

    const LegalPadWrapper = ({ children, onClose }) => (
        <div className="bg-[#fff9c4] border-l-[30px] border-[#ef5350] shadow-[10px_10px_30px_rgba(0,0,0,0.2)] w-full max-w-2xl h-[600px] flex flex-col relative rotate-1 group p-8 pt-4">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#ef5350] hover:scale-110 transition-transform p-2 z-10"
            >
                <X size={32} strokeWidth={3} />
            </button>
            <div className="absolute top-0 left-[-30px] right-0 h-1 bg-[#8d1c1c] opacity-10"></div>
            {/* Ruled Lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ backgroundImage: 'linear-gradient(#90caf9 1px, transparent 1px)', backgroundSize: '100% 28px', marginTop: '40px' }}></div>

            <div className="flex-1 relative z-10 font-serif text-[#37474f] leading-[28px]">
                {children}
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-20 pointer-events-none">
                <p className="text-xs font-serif italic text-slate-800 tracking-widest uppercase">Property of Student 07 // Internal Use Only</p>
            </div>
        </div>
    );

    const BIOSWrapper = ({ title, children, onClose }) => (
        <div className="bg-[#000000] border-4 border-[#00ff00] w-full max-w-3xl h-[550px] flex flex-col p-6 font-mono text-[#00ff00] relative shadow-[0_0_20px_rgba(0,255,0,0.2)] overflow-hidden">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#00ff00] hover:bg-[#003300] p-1 border border-[#00ff00]"
            >
                <X size={20} />
            </button>
            <div className="mb-6 opacity-80 text-[10px]">
                <p>ROM BIOS VERSION 1.0.4 - COPYRIGHT (C) 2007</p>
                <p>CPU: PYTHON INTERPRETER v2.7 ENABLED</p>
                <p>MEMORY TEST: 640K OK</p>
                <p>BOOT DEVICE: DISKETTE 1 [LOADING...]</p>
                <p className="mt-2 tracking-widest">----------------------------------------------------</p>
            </div>
            <h2 className="text-sm font-bold border-b border-[#00ff00] pb-2 mb-4 tracking-[0.2em]">{title}</h2>
            <div className="flex-1 overflow-y-auto custom-scrollbar-bios text-sm leading-relaxed">
                {children}
            </div>
            <div className="mt-4 text-[10px] animate-pulse">
                _ SYSTEM READY | CURSOR_LOCK ACTIVE
            </div>
            {/* Subtle crt line overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(0,255,0,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-20"></div>
        </div>
    );

    // --- RE-CODED SIMULATIONS WITH THEME-NEUTRAL LOGIC ---

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
            <div className="space-y-4 text-black font-sans">
                <p className="font-bold underline text-sm border-b border-black pb-1 mb-4">MOVIE_RANKER.EXE - COLLEGIATE EDITION</p>
                <p className="text-xs italic text-slate-600 mb-4">Input movie titles to finalize the end-of-year selection.</p>

                <form onSubmit={addMovie} className="space-y-2">
                    <label className="text-xs font-bold uppercase block">Add Entry:</label>
                    <div className="flex gap-2">
                        <input
                            autoFocus
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-white border-2 border-[#808080] border-t-black border-l-black px-2 py-1 text-sm outline-none"
                        />
                        <button type="submit" className="bg-[#c0c0c0] border-2 border-white border-b-[#808080] border-r-[#808080] px-4 py-1 text-xs font-bold active:border-[#808080] active:border-b-white active:border-r-white transition-all">
                            ADD
                        </button>
                    </div>
                </form>

                <div className="mt-6 border-2 border-[#808080] border-t-black border-l-black p-3 bg-white h-48 overflow-y-auto shadow-inner">
                    <table className="w-full text-xs text-left">
                        <thead>
                            <tr className="bg-[#000080] text-white">
                                <th className="px-1 border-r border-[#c0c0c0]">#</th>
                                <th className="px-2">MOVIE_TITLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((m, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-[#f0f0f0]' : 'bg-white'}>
                                    <td className="px-1 border-r border-slate-200">{i + 1}</td>
                                    <td className="px-2">{m.toUpperCase()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {movies.length === 0 && <p className="text-slate-400 p-2 text-[10px]">No entries found in database.</p>}
                </div>
            </div>
        );
    };

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
            <div className="space-y-8 text-[#37474f]">
                <h3 className="text-4xl font-serif font-bold underline decoration-[#ef5350] underline-offset-8 decoration-4">Project Milestones</h3>
                <div className="space-y-3 mt-8">
                    {tasks.map((t, i) => (
                        <div key={i} onClick={() => toggle(i)} className="flex items-center gap-4 cursor-pointer group">
                            <div className={`w-8 h-8 border-2 border-[#546e7a]/40 rounded-sm flex items-center justify-center transition-colors ${t.done ? 'bg-[#546e7a]/20' : 'bg-transparent'}`}>
                                {t.done && <X size={24} color="#ef5350" strokeWidth={3} className="rotate-12" />}
                            </div>
                            <span className={`text-2xl font-serif tracking-tight ${t.done ? 'opacity-40 italic' : 'text-[#263238]'} group-hover:text-black transition-colors`}>
                                {t.text}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-10 relative">
                    <div className="absolute top-0 left-0 w-24 h-0.5 bg-blue-200"></div>
                    <p className="text-red-600 font-serif italic text-2xl font-black transform -rotate-3 border-4 border-red-600 px-4 py-2 inline-block">FINAL SUBMISSION: MAR_30</p>
                </div>
            </div>
        );
    };

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
            <div className="space-y-4 font-mono">
                <p className="text-[#00ff00] blink">{"> SYSTEM_INIT_READY..."}</p>
                <div className="relative group">
                    <textarea
                        autoFocus
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="[INPUT_SCRIPT_DATA_HERE]"
                        className="w-full h-32 bg-[#001100] border-2 border-[#00ff00] p-4 text-[#00ff00] text-sm outline-none resize-none placeholder:text-[#00ff00]/20 focus:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all"
                    />
                    <div className="absolute bottom-2 right-2 text-[8px] opacity-30 text-[#00ff00]">64kb Free</div>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={analyze}
                        disabled={!text || isScanning}
                        className="flex-1 py-3 border-2 border-[#00ff00] text-[#00ff00] font-bold hover:bg-[#00ff00] hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        <span className="relative z-10">{isScanning ? '[PROCESSING_DATA...]' : '[EXECUTE_ANALYSIS]'}</span>
                    </button>
                    <button
                        onClick={() => { setText(''); setResults(null); }}
                        className="px-4 py-3 border-2 border-[#00ff00]/30 text-[#00ff00]/30 hover:text-[#00ff00] hover:border-[#00ff00] transition-all"
                    >
                        [CLR]
                    </button>
                </div>

                {results && !isScanning && (
                    <div className="mt-8 border-2 border-[#00ff00] p-6 bg-[#001100] shadow-[inset_0_0_20px_rgba(0,255,0,0.2)]">
                        <div className="flex justify-between items-center mb-6">
                            <span className="bg-[#00ff00] text-black px-2 py-0.5 text-[10px] font-bold">REPORT_0x4F2</span>
                            <span className="text-[10px] opacity-50">SYNC_OK</span>
                        </div>
                        <div className="space-y-2 text-xs">
                            <p><span className="opacity-50 tracking-widest">METRIC_ONE:</span> TOTAL_WORD_COUNT......[{results.total}]</p>
                            <p><span className="opacity-50 tracking-widest">METRIC_TWO:</span> UNIQUE_NODES........[{results.unique}]</p>
                            <div className="h-px bg-[#00ff00]/30 my-4"></div>
                            <p className="text-sm font-bold flex items-center gap-4">
                                NOIR_CONTEXT:
                                <span className={results.noir ? 'text-black bg-[#00ff00] px-4 font-black' : 'opacity-40'}>
                                    {results.noir ? 'TRUE' : 'FALSE_NOT_FOUND'}
                                </span>
                            </p>
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

            {/* INTERACTIVE PROJECT OVERLAYS (UNIQUE SKINS) */}
            <AnimatePresence mode="wait">
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-4xl flex items-center justify-center"
                        >
                            {activeProject.id === 'ranker' && (
                                <RetroWin95Wrapper title="MOVIE RANKER v1.0" onClose={() => setActiveProject(null)}>
                                    <MovieRankerSim />
                                </RetroWin95Wrapper>
                            )}

                            {activeProject.id === 'todo' && (
                                <LegalPadWrapper onClose={() => setActiveProject(null)}>
                                    <CineTodoSim />
                                </LegalPadWrapper>
                            )}

                            {activeProject.id === 'analyzer' && (
                                <BIOSWrapper title="SCRIPT_ANALYZER_CORE.EXE" onClose={() => setActiveProject(null)}>
                                    <ScriptAnalyzerSim />
                                </BIOSWrapper>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
