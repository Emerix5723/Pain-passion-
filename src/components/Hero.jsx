import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring, useVelocity } from 'framer-motion';

const frameCount = 192; 

const Hero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Create a smoothed version of the scroll progress for "liquid" feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map the SMOOTHED scroll progress (0 to 1) to frame index (0 to 191)
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

    // Track velocity for motion blur effect
    const scrollVelocity = useVelocity(smoothProgress);
    const blurValue = useTransform(scrollVelocity, [-1.5, 0, 1.5], [8, 0, 8]);
    const blurStyle = useTransform(blurValue, (v) => `blur(${v}px)`);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                const src = `/sequence/sequence_${String(i).padStart(3, '0')}.jpg`;
                img.src = src;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Render to canvas
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const render = (index) => {
            const img = images[Math.round(index)];
            if (img) {
                const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
                const x = (canvas.width - img.width * ratio) / 2;
                const y = (canvas.height - img.height * ratio) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
            }
        };

        render(0);

        const unsubscribe = frameIndex.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(frameIndex.get());
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [isLoaded, images, frameIndex]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[var(--color-white)]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                
                {/* 3D Animation Layer */}
                <motion.canvas 
                    ref={canvasRef} 
                    style={{ filter: blurStyle }}
                    className="w-full h-full block z-0 relative" 
                />

                {/* Top Title Banner Layer (Full Width) */}
                <motion.div
                    className="hero-banner pointer-events-none"
                    style={{ 
                        opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                        y: useTransform(scrollYProgress, [0, 0.2], [0, -30])
                    }}
                >
                    <div className="max-w-7xl mx-auto flex flex-col items-center">
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="hero-subtitle"
                        >
                            — Depuis 2026 —
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hero-title"
                        >
                            Pain <span className="text-gold">&</span> Passion
                        </motion.h1>
                    </div>
                </motion.div>

                {/* Bottom Fade Overlay for "Fondu" effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[var(--color-white)] opacity-60" />
            </div>
        </section>
    );
};

export default Hero;
