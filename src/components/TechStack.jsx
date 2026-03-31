import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Smartphone } from 'lucide-react';

const TechStack = ({ isCinephile }) => {
    const categories = [
        {
            title: "Backend Core",
            icon: <Server className={isCinephile ? "text-accent" : "text-elegant-gold"} size={24} />,
            tools: ["Python", "Django", "SQL", "JAVA", "APEX", "Node.js", "Express", "REST APIs"]
        },
        {
            title: "Frontend & UI",
            icon: <Layout className={isCinephile ? "text-accent" : "text-elegant-gold"} size={24} />,
            tools: ["JavaScript", "HTML/CSS", "UI/UX Design", "React", "Next.js", "Tailwind CSS", "TypeScript"]
        },
        {
            title: "Enterprise & Tools",
            icon: <Database className={isCinephile ? "text-accent" : "text-elegant-gold"} size={24} />,
            tools: ["Salesforce Admin", "Salesforce Dev", "Docker", "Data Analysis", "Git", "PostgreSQL", "Supabase", "MongoDB", "Redis"]
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="stack" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-widest mb-12 sm:mb-24 text-center ${isCinephile ? 'font-comic text-ink comic-stroke' : 'font-serif text-elegant-dark italic text-shimmer-gold'}`}
                style={isCinephile ? { textShadow: '4px 4px 0px #ffde00' } : {}}
            >
                {isCinephile ? 'THE ARSENAL' : 'Technical Proficiency'}
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            >
                {categories.map((category, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={category.title}
                        className={`p-6 sm:p-10 flex flex-col items-center text-center transition-all duration-500 rounded-2xl sm:rounded-3xl group ${isCinephile 
                            ? 'bg-noir border-4 border-ink shadow-comic-hard-cyan hover:-translate-y-2' 
                            : 'glass-elegant shimmer-gold border-white/40 shadow-2xl hover:-translate-y-3 hover:shadow-elegant-gold/20'}`}
                    >
                        <motion.div 
                            animate={!isCinephile ? { y: [0, -10, 0] } : {}}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border-2 transition-all duration-500 ${isCinephile 
                                ? 'bg-slate-800 border-ink shadow-comic-dark' 
                                : 'bg-gradient-to-br from-white/80 to-elegant-gold/10 border-elegant-gold/30 shadow-xl group-hover:scale-110 group-hover:rotate-6'}`}
                        >
                            {category.icon}
                        </motion.div>
                        <h3 className={`text-xl sm:text-2xl md:text-3xl tracking-widest mb-6 sm:mb-8 ${isCinephile ? 'font-comic text-ink' : 'font-serif text-elegant-dark italic'}`}>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {category.tools.map((tool) => (
                                <span 
                                    key={tool} 
                                    className={`px-4 py-1.5 font-black uppercase tracking-[0.2em] text-[10px] border-2 transition-all duration-300 rounded-full ${isCinephile 
                                        ? 'bg-ink text-noir border-ink hover:bg-comic-yellow' 
                                        : 'bg-white/40 text-elegant-gold border-elegant-gold/20 hover:bg-elegant-gold hover:text-white shadow-sm'}`}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechStack;
