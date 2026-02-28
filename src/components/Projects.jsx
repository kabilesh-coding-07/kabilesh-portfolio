import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lock, Cpu, Eye } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-noir relative overflow-hidden">
            {/* Background Narrative Grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-comic-cyan/10 border border-comic-cyan/30 text-comic-cyan text-[10px] font-bold tracking-[0.3em] uppercase">
                        <Terminal size={12} />
                        Classified: Project Archive
                    </div>

                    <h2 className="text-5xl md:text-7xl font-comic text-ink shadow-comic-hard-cyan tracking-tighter -rotate-1">
                        THE BLOCKBUSTERS
                    </h2>

                    <div className="max-w-2xl bg-white/5 border-2 border-ink p-8 shadow-comic-hard-yellow relative group">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-comic-red border-2 border-ink flex items-center justify-center -rotate-12 shadow-comic-dark group-hover:rotate-0 transition-transform">
                            <Lock className="text-noir" size={24} />
                        </div>

                        <div className="space-y-6 text-left">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="w-12 h-12 bg-comic-cyan flex items-center justify-center border-2 border-ink shadow-comic-dark">
                                    <Cpu className="text-noir" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-widest">PROJECTS UNDER REVIEW</h3>
                                    <p className="text-xs text-slate-500 uppercase font-mono">Status: Declassified but Redacted</p>
                                </div>
                            </div>

                            <p className="text-slate-400 font-serif text-lg leading-relaxed italic">
                                "The files are currently being scrubbed of all student-level remnants. We are preparing to declassify real-world productions shortly. The portfolio is evolving."
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-black/40 border border-white/5 space-y-2">
                                    <div className="w-full h-1 bg-white/10 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                            className="absolute inset-0 bg-comic-cyan w-1/3"
                                        />
                                    </div>
                                    <p className="text-[10px] font-mono text-slate-500">OPTIMIZING_ARCHITECTURE.PY</p>
                                </div>
                                <div className="p-4 bg-black/40 border border-white/5 space-y-2">
                                    <div className="w-full h-1 bg-white/10 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                            className="absolute inset-0 bg-comic-yellow w-1/3"
                                        />
                                    </div>
                                    <p className="text-[10px] font-mono text-slate-500">CLEANING_DATABASE.SQL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-4 text-slate-500 font-mono text-xs">
                            <span className="w-2 h-2 rounded-full bg-comic-cyan animate-pulse"></span>
                            Awaiting Real-World Production Data
                        </div>
                        <button className="px-8 py-3 bg-white/5 border border-white/20 text-slate-400 font-bold uppercase tracking-widest text-sm hover:bg-comic-cyan hover:text-noir hover:border-ink transition-all flex items-center gap-2">
                            <Eye size={16} />
                            Request Early Access
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] opacity-60"></div>
        </section>
    );
};

export default Projects;
