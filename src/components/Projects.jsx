import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Terminal, ChevronRight, Play, RefreshCcw, Minus, Square } from 'lucide-react';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 'noirstream',
            title: 'NOIRSTREAM API GATEWAY',
            period: 'PROFESSIONAL PRODUCTION',
            badge: 'Backend Architecture',
            description: 'A high-performance Django REST Framework gateway for a fictional cinematic streaming engine. Features JWT auth, PostgreSQL optimization, and auto-generated documentation.',
            image: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-noir',
        },
        {
            id: 'cinelens',
            title: 'CINELENS ANALYTICS',
            period: 'DATA ENGINEERING',
            badge: 'Insight Engine',
            description: 'Python-driven data visualization engine consuming TMDB API to track global cinematic trends. Built with Pandas and custom React-integrated analytics.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-slate-900',
        },
        {
            id: 'scriptgpt',
            title: 'SCRIPT-GPT ENGINE',
            period: 'AI / LLM INTEGRATION',
            badge: 'Future Tech',
            description: 'An AI script supervisor powered by Gemini/OpenAI models. Real-time semantic analysis and character arc critique for professional screenplays.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
            bgColor: 'bg-black',
        }
    ];

    // NOIRSTREAM API SIMULATION
    const NoirStreamSim = () => {
        const [requests, setRequests] = useState([
            { method: 'GET', path: '/api/v1/movies/', status: 200, time: '12ms' },
            { method: 'POST', path: '/api/v1/auth/login/', status: 201, time: '45ms' }
        ]);

        const fireRequest = () => {
            const methods = ['GET', 'POST', 'PATCH', 'DELETE'];
            const paths = ['/users/', '/scripts/', '/genres/', '/production/'];
            const newReq = {
                method: methods[Math.floor(Math.random() * methods.length)],
                path: `/api/v1${paths[Math.floor(Math.random() * paths.length)]}`,
                status: 200,
                time: `${Math.floor(Math.random() * 50) + 5}ms`
            };
            setRequests([newReq, ...requests].slice(0, 5));
        };

        return (
            <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-comic-cyan font-bold">API STATUS: OPERATIONAL</span>
                    <button onClick={fireRequest} className="bg-white text-black px-2 py-0.5 font-bold hover:bg-comic-cyan transition-colors">TEST_ENDPOINT</button>
                </div>
                <div className="space-y-1">
                    {requests.map((r, i) => (
                        <div key={i} className="flex gap-4 p-2 bg-white/5 border-l-2 border-comic-cyan animate-in slide-in-from-left-2 transition-all">
                            <span className={`font-black ${r.method === 'GET' ? 'text-green-400' : 'text-yellow-400'}`}>{r.method}</span>
                            <span className="text-slate-400">{r.path}</span>
                            <span className="ml-auto text-comic-cyan">{r.status}</span>
                            <span className="text-slate-500 w-10 text-right">{r.time}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-3 bg-black/50 border border-white/5 opacity-50">
                    <p className="text-[10px] text-slate-500 mb-1 tracking-widest uppercase">Schema Preview (Swagger):</p>
                    <p className="text-white">{"{ 'jwt': '********', 'scope': 'READ_WRITE', 'role': 'ARCHITECT' }"}</p>
                </div>
            </div>
        );
    };

    // CINELENS ANALYTICS SIMULATION
    const CineLensSim = () => {
        const [activeTrend, setActiveTrend] = useState('Genre');
        const data = [45, 80, 60, 95, 40, 70];

        return (
            <div className="space-y-6">
                <div className="flex gap-4 border-b border-white/10 pb-2">
                    {['Genre', 'Production', 'ROI'].map(t => (
                        <button
                            key={t}
                            onClick={() => setActiveTrend(t)}
                            className={`text-xs font-bold tracking-widest transition-colors ${activeTrend === t ? 'text-comic-cyan border-b-2 border-comic-cyan' : 'text-slate-500 hover:text-white'}`}
                        >
                            {t.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="flex items-end gap-2 h-40 pt-4">
                    {data.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className={`flex-1 ${i === 3 ? 'bg-comic-cyan' : 'bg-white/20'} relative group`}
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                {h}%
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 border border-white/10">
                        <p className="text-[10px] text-slate-500 uppercase font-mono mb-1 tracking-tighter">Correlations</p>
                        <p className="text-xl font-bold font-mono">0.892</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10">
                        <p className="text-[10px] text-slate-500 uppercase font-mono mb-1 tracking-tighter">Variance</p>
                        <p className="text-xl font-bold font-mono text-comic-cyan">0.04</p>
                    </div>
                </div>
            </div>
        );
    };

    // SCRIPT-GPT ENGINE SIMULATION
    const ScriptGPTSim = () => {
        const [messages, setMessages] = useState([
            { role: 'SYSTEM', content: 'SCRIPT_ENGINE LOADED. UPLOAD SCREENPLAY SNIPPET.' }
        ]);
        const [input, setInput] = useState('');
        const [isThinking, setIsThinking] = useState(false);

        const sendMessage = (e) => {
            e.preventDefault();
            if (!input.trim() || isThinking) return;

            const userMsg = { role: 'USER', content: input };
            setMessages([...messages, userMsg]);
            setInput('');
            setIsThinking(true);

            setTimeout(() => {
                const responses = [
                    "Analysis complete: Tone is consistently Noir. Recommendation: Increase subtext in Act II.",
                    "Character Arc Evaluation: protagonist motivation lacks clear conflict. Semantic score: 8.4/10.",
                    "Pacing Scan: Scene 14 is elongated. Suggest cutting dialogue by 20% for urgency."
                ];
                const aiMsg = { role: 'AI', content: responses[Math.floor(Math.random() * responses.length)] };
                setMessages(prev => [...prev, aiMsg]);
                setIsThinking(false);
            }, 1500);
        };

        return (
            <div className="flex flex-col h-full space-y-4">
                <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2 min-h-0">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex flex-col ${m.role === 'USER' ? 'items-end' : 'items-start'}`}>
                            <span className="text-[8px] font-mono opacity-30 mb-1">{m.role}</span>
                            <div className={`p-3 text-xs font-mono max-w-[80%] ${m.role === 'USER' ? 'bg-comic-cyan text-noir font-bold' : 'bg-white/5 border border-white/10 text-white'}`}>
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {isThinking && <p className="text-[10px] font-mono animate-pulse text-comic-cyan italic tracking-widest flex items-center gap-2">
                        <RefreshCcw size={10} className="animate-spin" /> THINKING...
                    </p>}
                </div>
                <form onSubmit={sendMessage} className="relative mt-auto">
                    <input
                        autoFocus
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="INPUT SCRIPT METADATA..."
                        className="w-full bg-noir border-2 border-white/10 p-3 pl-4 pr-12 text-xs font-mono outline-none focus:border-comic-cyan transition-colors"
                    />
                    <button disabled={isThinking} className="absolute right-3 top-1/2 -translate-y-1/2 text-comic-cyan">
                        <ChevronRight size={18} />
                    </button>
                </form>
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

            {/* PROFESSIONAL PROJECT OVERLAY */}
            <AnimatePresence mode="wait">
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-noir border-2 border-white/10 w-full max-w-4xl h-[650px] flex flex-col relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
                        >
                            {/* Pro Header */}
                            <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-comic-cyan shadow-[0_0_10px_#00f0ff]"></div>
                                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">{activeProject.title} // V.4.0</span>
                                </div>
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Simulation Content */}
                            <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-black/30">
                                {activeProject.id === 'noirstream' && <NoirStreamSim />}
                                {activeProject.id === 'cinelens' && <CineLensSim />}
                                {activeProject.id === 'scriptgpt' && <ScriptGPTSim />}
                            </div>

                            {/* Pro Footer */}
                            <div className="p-4 bg-white/[0.02] border-t border-white/10 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-600">
                                <span>SESSION_ACTIVE // ENCRYPTION_SHA256</span>
                                <span className="text-comic-cyan">K_PROTO_X_09</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
