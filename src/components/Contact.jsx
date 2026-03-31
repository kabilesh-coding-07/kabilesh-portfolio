import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Mail, Github, MapPin, Terminal } from 'lucide-react';

const Contact = ({ isCinephile }) => {
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
    };

    return (
        <section id="contact" className={`py-12 md:py-16 px-6 max-w-3xl mx-auto text-center relative transition-colors duration-500 ${isCinephile ? 'bg-noir' : 'bg-elegant-ivory'}`}>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`text-3xl sm:text-5xl md:text-7xl tracking-widest mb-4 sm:mb-6 ${isCinephile ? 'font-comic text-ink comic-stroke sm:text-4xl md:text-6xl lg:text-8xl' : 'font-serif text-elegant-dark italic'}`} style={isCinephile ? { textShadow: '4px 4px 0px #ff003c' } : {}}>
                {isCinephile ? 'DIRECT ACTION.' : 'A Shared Vision.'}
            </motion.h2>
            <p className={`text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide mb-6 sm:mb-8 max-w-2xl mx-auto ${isCinephile ? 'text-slate-400' : 'text-slate-500 font-serif lowercase italic'}`}>
                {isCinephile
                    ? "Got a sequel in mind, or just want to collaborate? The studio is always open for pitches."
                    : "I am always open to discussing new projects, creative ideas or opportunities to be part of your vision."
                }
            </p>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`transition-all duration-700 p-6 sm:p-8 md:p-12 border-2 text-left relative overflow-hidden group/container rounded-2xl sm:rounded-[3rem] ${isCinephile 
                    ? 'bg-noir border-ink shadow-comic-hard-cyan' 
                    : 'glass-elegant shimmer-gold border-white/40 shadow-elegant'}`}
            >

                {/* MATRIX x CINEPHILE BACKGROUND PATTERN (Cinephile Only) */}
                {isCinephile && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-[#00FF41] font-mono text-[10px] md:text-xs select-none opacity-20" style={{ textShadow: '0 0 5px currentColor' }}>
                        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.8)_0%,rgba(17,24,39,0.2)_100%)]"></div>
                        {Array.from({ length: 45 }).map((_, i) => {
                            const maxOp = Math.random() > 0.5 ? 0.3 : 0.15;
                            const words = ['CINEPHILE', 'DEV_ENV', 'ACTION', 'CUT', 'LIGHTS', 'CAMERA', 'ROLLING', 'SYS_ADMIN', 'NODE', 'TERMINAL', 'HACK', '10110', '01001', 'ROOT', 'BUILD'];
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
                                    {words[Math.floor(Math.random() * words.length)]}
                                </span>
                            );
                        })}
                    </div>
                )}

                {/* Direct Comms Only */}
                <div className="flex flex-col items-center justify-center relative z-20 py-4">
                    <p className={`font-black uppercase tracking-[0.4em] mb-8 text-sm ${isCinephile ? 'text-comic-cyan comic-stroke text-2xl' : 'text-elegant-gold'}`}>
                        {isCinephile ? 'Encrypted Channels' : 'Formal Correspondence'}
                    </p>
                    <div className="space-y-10 flex flex-col items-center">
                        <motion.a 
                            whileHover={{ scale: 1.05, x: 10 }}
                            href="mailto:kabileshcoding07@gmail.com" 
                            className={`flex items-center gap-3 sm:gap-6 transition-all duration-300 break-all sm:break-normal ${isCinephile ? 'text-slate-300 hover:text-comic-yellow text-base sm:text-xl' : 'text-elegant-dark hover:text-elegant-gold italic font-serif text-lg sm:text-2xl md:text-4xl tracking-tighter'}`}
                        >
                            {!isCinephile && <Mail size={32} className="text-elegant-gold/40" />}
                            {isCinephile && <Mail size={28} className="text-comic-red" />}
                            kabileshcoding07@gmail.com
                        </motion.a>
                        
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12">
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                href="https://github.com/kabilesh-coding-07" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`flex items-center gap-4 transition-all duration-300 ${isCinephile ? 'text-slate-300 hover:text-comic-yellow' : 'text-slate-600 hover:text-elegant-gold font-black uppercase tracking-[0.2em] text-xs'}`}
                            >
                                <Github size={24} className={isCinephile ? "text-comic-red" : "text-elegant-gold"} />
                                GITHUB_STUDIO
                            </motion.a>

                            <div className={`flex items-center gap-4 ${isCinephile ? 'text-slate-400' : 'text-slate-500 font-black uppercase tracking-[0.2em] text-xs'}`}>
                                <MapPin size={24} className={isCinephile ? "text-comic-red" : "text-elegant-gold"} />
                                TAMIL NADU, IN
                            </div>
                        </div>

                        {/* Interactive Status Terminal */}
                        <motion.div 
                            initial={{ y: 0, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`mt-8 w-full max-w-sm border-2 p-6 relative group transition-all duration-700 overflow-hidden text-left rounded-2xl shadow-2xl ${isCinephile ? 'bg-slate-900 border-slate-700 hover:border-comic-cyan' : 'glass-elegant border-white/40 shadow-elegant'}`}>
                            <div className={`absolute top-0 left-0 w-full h-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out ${isCinephile ? 'bg-comic-cyan' : 'bg-elegant-gold'}`}></div>
                            <div className={`flex items-center gap-3 mb-3 sm:mb-4 ${isCinephile ? 'text-comic-yellow' : 'text-elegant-gold'}`}>
                                <Terminal size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <span className="font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px]">{isCinephile ? 'System Terminal_' : 'Access_Protocol_'}</span>
                            </div>
                            <p className={`font-mono text-[10px] sm:text-xs leading-relaxed ${isCinephile ? 'text-slate-400' : 'text-elegant-dark/60'}`}>
                                &gt; {isCinephile ? 'TRACING CONNECTION...' : 'VERIFYING SIGNATURE...'} <br />
                                &gt; {isCinephile ? 'FIREWALL BYPASSED.' : 'IDENTITY CONFIRMED.'}<br />
                                &gt; STATUS: <span className={`transition-colors group-hover:animate-pulse font-bold ${isCinephile ? 'text-white group-hover:text-comic-cyan' : 'text-elegant-dark'}`}>{isCinephile ? 'READY FOR MISSIONS' : 'READY FOR COLLABORATION'}</span><span className={`animate-pulse inline-block ml-1 font-bold ${isCinephile ? 'text-comic-cyan' : 'text-elegant-gold'}`}>_</span>
                            </p>
                            
                            {/* Signature Verified Pulse (Elegant Only) */}
                            {!isCinephile && (
                                <motion.div 
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-elegant-gold/20 rounded-full blur-2xl pointer-events-none"
                                />
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Transmit Button Repurposed */}
                <div className="w-full max-w-xs mx-auto pb-4 relative z-20 mt-8">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleTransmit}
                        disabled={status === 'loading' || status === 'success'}
                        className={`w-full py-5 border-2 transition-all duration-500 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-2xl rounded-full ${isCinephile
                                ? 'border-ink font-comic text-2xl tracking-widest text-ink bg-comic-red hover:bg-comic-yellow shadow-comic-dark'
                                : 'bg-elegant-dark border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-white uppercase font-black tracking-[0.4em] text-[12px] shadow-elegant-gold/20'
                            }`}
                    >
                        {status === 'idle' && <>{isCinephile ? 'TRANSMIT' : 'Open Inquiry'} <Send size={20} /></>}
                        {status === 'loading' && <>{isCinephile ? 'UPLOADING' : 'ESTABLISHING'} <Loader2 size={20} className="animate-spin" /></>}
                        {status === 'success' && <>{isCinephile ? 'RECEIVED' : 'SENT'} <CheckCircle2 size={20} /></>}
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
