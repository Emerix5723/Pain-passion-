import React from 'react';
import { motion } from 'framer-motion';

const TopBar = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-[100] bg-[var(--color-white)]/80 backdrop-blur-lg border-t-2 border-gold shadow-sm px-6 md:px-12 py-5 flex items-center justify-center transition-all duration-500"
        >
            <div className="flex flex-col items-center">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-1">Artisan Boulanger — Trois-Rivières</span>
                <span className="text-black font-serif italic text-2xl md:text-3xl leading-none">Pain <span className="text-gold">&</span> Passion</span>
            </div>
        </motion.header>
    );
};

export default TopBar;
