import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Origins', href: '#experience' },
        { name: 'Work', href: '#projects' },
        { name: 'Stack', href: '#stack' },
        { name: 'Cinephile', href: '#cinephile' },
    ];

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="fixed top-6 left-0 w-full z-50 px-4 md:px-0 flex justify-center pointer-events-none"
        >
            <nav className="bg-noir border-4 border-ink shadow-comic-hard-yellow px-4 py-3 flex items-center justify-between w-full max-w-2xl pointer-events-auto transition-all duration-300">
                {/* Logo / Initials */}
                <a href="#" className="w-12 h-12 ml-2 flex items-center justify-center font-comic text-2xl bg-comic-cyan text-noir border-2 border-transparent hover:border-ink hover:bg-comic-yellow transition-colors -rotate-3 hover:rotate-3 shadow-comic-dark">
                    KM
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6 mx-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-comic-yellow transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="hidden md:flex px-6 py-2 border-2 border-ink text-base font-comic tracking-wider bg-comic-red text-ink hover:bg-comic-yellow hover:text-noir transition-colors shadow-comic-dark -rotate-2 hover:rotate-0"
                >
                    Director's Cut
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden mr-2 p-2 text-ink hover:text-comic-cyan"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Nav Dropdown */}
            <div
                className={`md:hidden absolute top-24 left-4 right-4 bg-noir border-4 border-ink shadow-comic-hard-cyan transition-all duration-300 origin-top overflow-hidden pointer-events-auto ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}
            >
                <div className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-slate-300 hover:text-comic-yellow font-bold uppercase tracking-wider block transition-colors border-b border-slate-800 pb-2"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-center px-6 py-3 font-comic text-xl bg-comic-red text-ink border-2 border-ink shadow-comic-dark mt-4"
                    >
                        Director's Cut
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
