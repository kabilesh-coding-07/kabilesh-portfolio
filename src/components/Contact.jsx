import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Mail, Github, MapPin, Terminal } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handleTransmit = () => {
        setStatus('loading');
        setTimeout(() => {
            window.location.href = 'mailto:kabileshcoding07@gmail.com';
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }, 1000);
    }; return (
        <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative">
            <h2 className="text-6xl md:text-8xl font-comic tracking-widest text-ink mb-6 comic-stroke" style={{ textShadow: '4px 4px 0px #ff003c' }}>
                DIRECT ACTION.
            </h2>
            <p className="text-xl font-bold uppercase tracking-wide text-slate-400 mb-12 max-w-2xl mx-auto">
                Got a sequel in mind, or just want to collaborate? The studio is always open for pitches.
            </p>

            <div className="bg-noir p-8 md:p-12 border-4 border-ink shadow-comic-hard-cyan text-left relative overflow-hidden group/container">
                {/* MATRIX x CINEPHILE BACKGROUND PATTERN */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-[#00FF41] font-mono text-[10px] md:text-xs select-none" style={{ textShadow: '0 0 5px currentColor' }}>
                    {/* Add a vignette overlay so the center text is always readable */}
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.8)_0%,rgba(17,24,39,0.2)_100%)]"></div>

                    {Array.from({ length: 40 }).map((_, i) => {
                        const maxOp = Math.random() > 0.5 ? 0.25 : 0.1;
                        return (
                            <span
                                key={i}
                                className="absolute inline-block animate-matrix"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${Math.random() * 7 + 8}s`,
                                    '--max-opacity': maxOp,
                                    writingMode: Math.random() > 0.5 ? 'vertical-rl' : 'horizontal-tb'
                                }}
                            >
                                {Math.random() > 0.8 ? 'CINEPHILE' : Math.random() > 0.6 ? 'DEV_ENV' : Math.random() > 0.4 ? 'ACTION' : Math.random() > 0.2 ? 'CUT' : Math.random() > 0.5 ? '10110' : '01001'}
                            </span>
                        );
                    })}
                </div>

                {/* Decorative Comic Burst */}
                <div className="hidden md:flex absolute -top-8 -right-8 bg-comic-yellow border-4 border-ink shadow-comic-dark transform rotate-12 z-10 w-32 h-32 items-center justify-center filter drop-shadow-lg transition-transform duration-500 group-hover/container:rotate-45">
                    <p className="font-comic text-2xl text-ink text-center leading-tight transform -rotate-6 comic-stroke">
                        CAST <br /> ME!
                    </p>
                </div>

                {/* Direct Comms Only */}
                <div className="flex flex-col items-center justify-center relative z-20 py-8">
                    <p className="font-bold uppercase tracking-widest text-comic-cyan mb-8 text-2xl comic-stroke">Encrypted Channels</p>
                    <div className="text-slate-300 font-medium space-y-6 text-lg md:text-xl flex flex-col items-center">
                        <a href="mailto:kabileshcoding07@gmail.com" className="flex items-center gap-4 hover:text-comic-yellow transition-colors hover:scale-105 transform duration-200">
                            <Mail size={28} className="text-comic-red" />
                            kabileshcoding07@gmail.com
                        </a>
                        <a href="https://github.com/kabilesh-coding-07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-comic-yellow transition-colors hover:scale-105 transform duration-200">
                            <Github size={28} className="text-comic-red" />
                            github.com/kabilesh-coding-07
                        </a>

                        <div className="flex items-center gap-4 text-slate-400">
                            <MapPin size={28} className="text-comic-red" />
                            Tiruppur, Tamil Nadu, INDIA
                        </div>

                        {/* Interactive Status Terminal */}
                        <div className="mt-8 w-full max-w-sm bg-slate-900 border-2 border-slate-700 border-dashed p-4 relative group hover:border-comic-cyan transition-colors overflow-hidden text-left cursor-crosshair shadow-lg bg-opacity-90 backdrop-blur-sm">
                            <div className="absolute top-0 left-0 w-full h-1 bg-comic-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>
                            <div className="flex items-center gap-3 text-comic-yellow mb-3">
                                <Terminal size={18} />
                                <span className="font-bold uppercase tracking-widest text-xs">System Terminal_</span>
                            </div>
                            <p className="text-slate-400 font-mono text-sm leading-relaxed">
                                &gt; TRACING CONNECTION... <br />
                                &gt; FIREWALL BYPASSED.<br />
                                &gt; AGENT STATUS: <span className="text-white group-hover:text-comic-cyan transition-colors group-hover:animate-pulse">READY FOR MISSIONS</span><span className="animate-pulse text-comic-cyan inline-block ml-1 font-bold">_</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Transmit Button Repurposed */}
                <div className="w-full max-w-md mx-auto pb-8 relative z-20">
                    <button
                        onClick={handleTransmit}
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full py-4 border-4 border-ink font-comic text-2xl tracking-widest text-ink bg-comic-red hover:bg-comic-yellow transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-comic-dark hover:-translate-y-1 hover:shadow-[6px_8px_0px_0px_#000000]"
                    >
                        {status === 'idle' && <>TRANSMIT <Send size={24} /></>}
                        {status === 'loading' && <>UPLOADING <Loader2 size={24} className="animate-spin" /></>}
                        {status === 'success' && <>RECEIVED <CheckCircle2 size={24} /></>}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
