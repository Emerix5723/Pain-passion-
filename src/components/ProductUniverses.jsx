import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
    {
        id: '01',
        title: 'Savoir-faire',
        subtitle: 'Boulangerie Traditionnelle',
        description: 'Le goût authentique du pétrissage, des pains croustillants et des brioches moelleuses au quotidien.',
    },
    {
        id: '02',
        title: 'Gourmandise',
        subtitle: 'Pâtisserie Fine',
        description: 'Une célébration de textures et de douceur. Entremets raffinés et spécialités locales.',
    },
    {
        id: '03',
        title: 'Pause Salée',
        subtitle: 'Wraps & Snacking',
        description: 'Des options fraîches et généreuses, préparées chaque matin pour votre pause douceur.',
    },
    {
        id: '04',
        title: 'Creole Fusion',
        subtitle: 'Sandwichs & Traiteur',
        description: 'La rencontre de la baguette traditionnelle française et des saveurs caraïbéennes.',
    }
];

const ProductUniverses = () => {
    return (
        <section id="universes" className="py-32 px-6 md:px-20 bg-white text-black overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <header className="mb-20 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-bold uppercase tracking-widest mb-4 text-gold"
                    >
                        Notre Carte
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-7xl font-light tracking-tight text-gold italic font-serif"
                    >
                        Univers <span className="font-sans font-medium text-black not-italic">Gourmands</span>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="mb-6 flex items-center space-x-4">
                                <span className="text-gold font-serif italic text-xl">{product.id}</span>
                                <div className="h-[1px] w-12 bg-gold/30"></div>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tighter group-hover:text-gold transition-colors duration-300">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-md">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductUniverses;
