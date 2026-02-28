import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Film, Popcorn, Ticket } from 'lucide-react';

const Cinephile = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    const movies = [
        { title: "Interstellar", dir: "Christopher Nolan", icon: <Film className="text-accent mb-4" size={32} /> },
        { title: "The Matrix", dir: "The Wachowskis", icon: <Ticket className="text-accent mb-4" size={32} /> },
        { title: "Dune", dir: "Denis Villeneuve", icon: <Popcorn className="text-accent mb-4" size={32} /> },
        { title: "Her", dir: "Spike Jonze", icon: <Clapperboard className="text-accent mb-4" size={32} /> },
    ];

    return (
        <section id="cinephile" className="py-24 px-6 md:px-12 max-w-7xl mx-auto mt-12 relative">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16 text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border-2 border-ink bg-comic-cyan text-noir font-bold uppercase tracking-wider text-sm mb-6 shadow-comic-dark -rotate-2">
                    <Clapperboard size={16} /> Cinephile Focus
                </div>
                <h2 className="text-6xl md:text-7xl font-comic tracking-widest text-ink mb-6 comic-stroke" style={{ textShadow: '4px 4px 0px #00f0ff' }}>
                    SIDE QUEST: <span className="text-comic-yellow">FILM CRITIC</span>
                </h2>

                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                    Debugging code by day, dissecting plot holes by night. I appreciate a well-structured script,
                    whether it's written in <span className="text-comic-red font-bold">JavaScript</span> or directed by <span className="text-comic-cyan font-bold">Nolan</span>.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {movies.map((movie, index) => {
                    const shadows = ['shadow-comic-hard-cyan', 'shadow-comic-hard-red', 'shadow-comic-hard-yellow', 'shadow-comic-dark'];
                    return (
                        <motion.div
                            key={movie.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2 }}
                            className={`bg-noir border-4 border-ink p-8 flex flex-col items-center text-center group cursor-crosshair relative overflow-hidden transition-all ${shadows[index % 4]}`}
                        >
                            {/* Film grain effect overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

                            {movie.icon}
                            <h3 className="text-3xl font-comic tracking-wider text-ink mb-2 group-hover:text-comic-cyan transition-colors">{movie.title}</h3>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Dir. {movie.dir}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Cinephile;
