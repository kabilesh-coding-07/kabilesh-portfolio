import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Film, Popcorn, Ticket } from 'lucide-react';

const Cinephile = ({ isCinephile }) => {
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
        { title: "Interstellar", dir: "Christopher Nolan", icon: <Film className={isCinephile ? "text-accent mb-4" : "text-elegant-gold mb-4"} size={32} /> },
        { title: "The Matrix", dir: "The Wachowskis", icon: <Ticket className={isCinephile ? "text-accent mb-4" : "text-elegant-gold mb-4"} size={32} /> },
        { title: "Dune", dir: "Denis Villeneuve", icon: <Popcorn className={isCinephile ? "text-accent mb-4" : "text-elegant-gold mb-4"} size={32} /> },
        { title: "Her", dir: "Spike Jonze", icon: <Clapperboard className={isCinephile ? "text-accent mb-4" : "text-elegant-gold mb-4"} size={32} /> },
    ];

    return (
        <section id="cinephile" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mt-6 sm:mt-12 relative">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16 text-center"
            >
                <div className={`inline-flex items-center gap-2 px-4 py-2 border-2 font-bold uppercase tracking-wider text-sm mb-6 -rotate-2 ${isCinephile ? 'border-ink bg-comic-cyan text-noir shadow-comic-dark' : 'border-elegant-gold/20 bg-elegant-ivory text-elegant-gold shadow-elegant'}`}>
                    <Clapperboard size={16} /> {isCinephile ? 'Cinephile Focus' : 'Artistic Direction'}
                </div>
                <h2 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4 sm:mb-6 ${isCinephile ? 'font-comic text-ink comic-stroke' : 'font-serif text-elegant-dark italic'}`} style={isCinephile ? { textShadow: '4px 4px 0px #00f0ff' } : {}}>
                    {isCinephile ? <>SIDE QUEST: <span className="text-comic-yellow">FILM CRITIC</span></> : 'A Cinematic Lens'}
                </h2>

                <p className={`text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-medium ${isCinephile ? 'text-slate-300' : 'text-slate-600 font-serif lowercase italic'}`}>
                    {isCinephile
                        ? <>Debugging code by day, dissecting plot holes by night. I appreciate a well-structured script, whether it's written in <span className="text-comic-red font-bold">JavaScript</span> or directed by <span className="text-comic-cyan font-bold">Nolan</span>.</>
                        : "Software architecture is the cinematography of the digital world. I seek the rhythm in every frame of code and the narrative in every user journey."
                    }
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
                {movies.map((movie, index) => {
                    const shadows = ['shadow-comic-hard-cyan', 'shadow-comic-hard-red', 'shadow-comic-hard-yellow', 'shadow-comic-dark'];
                    const hoverShadow = isCinephile ? shadows[index % 4] : 'shadow-elegant';

                    return (
                        <motion.div
                            key={movie.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2 }}
                            className={`border-2 sm:border-4 p-4 sm:p-8 flex flex-col items-center text-center group cursor-crosshair relative overflow-hidden transition-all ${isCinephile ? 'bg-noir border-ink' : 'bg-white border-elegant-gold/10'} ${hoverShadow}`}
                        >
                            {/* Film grain effect overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

                            {movie.icon}
                            <h3 className={`text-xl sm:text-2xl md:text-3xl tracking-wider mb-2 transition-colors ${isCinephile ? 'font-comic text-ink group-hover:text-comic-cyan' : 'font-serif text-elegant-dark group-hover:text-elegant-gold'}`}>{movie.title}</h3>
                            <p className={`font-bold uppercase tracking-widest text-xs sm:text-sm ${isCinephile ? 'text-slate-400' : 'text-slate-500'}`}>Dir. {movie.dir}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Cinephile;
