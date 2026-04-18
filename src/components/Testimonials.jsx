import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section className="py-32 px-6 md:px-20 bg-white text-black flex items-center justify-center relative overflow-hidden">

            {/* Decorative Gold Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/20 rounded-full opacity-50" />

            <div className="max-w-3xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-6xl text-gold font-serif block mb-8">“</span>
                    <p className="text-2xl md:text-4xl font-light leading-relaxed mb-12">
                        Le meilleur pain de la région. Une texture incroyable, un goût authentique. C'est plus qu'une boulangerie, c'est une expérience.
                    </p>
                    <div className="flex flex-col items-center">
                        <span className="uppercase tracking-widest text-sm font-bold text-black">Marie L.</span>
                        <span className="text-gold text-xs mt-1">Client Fidèle</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
