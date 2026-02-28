import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Smartphone } from 'lucide-react';

const TechStack = () => {
    const categories = [
        {
            title: "Backend Core",
            icon: <Server className="text-accent" size={24} />,
            tools: ["Python", "Django", "SQL", "JAVA", "APEX", "Node.js", "Express", "REST APIs"]
        },
        {
            title: "Frontend & UI",
            icon: <Layout className="text-accent" size={24} />,
            tools: ["JavaScript", "HTML/CSS", "UI/UX Design", "React", "Next.js", "Tailwind CSS", "TypeScript"]
        },
        {
            title: "Enterprise & Tools",
            icon: <Database className="text-accent" size={24} />,
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
        <section id="stack" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl font-comic tracking-widest text-ink mb-16 text-center comic-stroke"
                style={{ textShadow: '4px 4px 0px #ffde00' }}
            >
                THE ARSENAL
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-3 gap-8"
            >
                {categories.map((category, index) => {
                    const shadowColors = ['shadow-comic-hard-cyan', 'shadow-comic-hard-red', 'shadow-comic-hard-yellow'];
                    const hoverShadow = shadowColors[index % 3];

                    return (
                        <motion.div
                            variants={itemVariants}
                            key={category.title}
                            className={`bg-noir border-4 border-ink p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 ${hoverShadow}`}
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-ink flex items-center justify-center mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-3xl font-comic tracking-wider text-ink mb-6">{category.title}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {category.tools.map((tool) => (
                                    <span key={tool} className="px-3 py-1 bg-ink text-noir font-bold uppercase tracking-wide text-xs border border-ink hover:bg-comic-yellow transition-colors">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default TechStack;
