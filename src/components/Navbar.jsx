import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { id: '01', label: 'L\'Atelier', href: '#features' },
    { id: '02', label: 'Univers', href: '#universes' },
    { id: '03', label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    return (
        <motion.nav
            className="fixed top-0 right-0 h-screen w-16 md:w-24 flex flex-col justify-center items-center z-40 bg-transparent mix-blend-difference"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
        >
            <div className="flex flex-col space-y-8">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="group flex flex-col items-center relative"
                    >
                        <div className="w-[1px] h-8 bg-white/20 group-hover:bg-gold transition-colors duration-300"></div>

                        {/* Tooltip-style label appearing on hover? Or just purely abstract numbers. 
                            Let's keep it abstract for now as per "Minimalist" brief, 
                            maybe show label on hover to the left. 
                        */}
                    </a>
                ))}
            </div>

        </motion.nav>
    );
};

export default Navbar;
