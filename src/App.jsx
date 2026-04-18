import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import Loader from './components/Loader';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) return;

        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, [loading]);

    return (
        <main className="antialiased bg-[var(--color-white)] text-black min-h-screen relative overflow-x-hidden">
            <div className="site-vignette" />
            <div className="grain-overlay" />
            
            {loading ? (
                <Loader onComplete={() => setLoading(false)} />
            ) : (
                <>
                    <TopBar />
                    <Navbar />
                    <Hero />

                    {/* Craftsmanship / Intro Section */}
                    <section id="features" className="py-24 px-6 md:px-20 bg-white text-black border-b border-black/5 overflow-hidden">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-gold text-xs font-bold uppercase tracking-widest block mb-4"
                            >
                                Savoir-Faire
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-3xl md:text-5xl font-light mb-8"
                            >
                                Fermentation lente, ingrédients locaux, passion brute.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="text-gray-600 leading-relaxed max-w-2xl mx-auto"
                            >
                                Situés au cœur de Trois-Rivières, nous redéfinissons la boulangerie traditionnelle en y insufflant l'âme de la Guadeloupe. Chaque baguette, chaque viennoiserie raconte une histoire de patience et d'excellence.
                            </motion.p>

                            {/* Animated gold divider */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                style={{ height: '2px', background: '#D4AF37', marginTop: '48px', borderRadius: '999px', transformOrigin: 'center' }}
                            />
                        </div>
                    </section>

                    <ImageCarousel />
                    <Footer />
                </>
            )}
        </main>
    );
}

export default App;

