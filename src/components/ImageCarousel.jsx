import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { id: '1', src: '/images/wraps-maison.jpg',       alt: 'Nos Créations' },
    { id: '2', src: '/images/sandwiches-kreyol.jpg',  alt: 'Sandwichs Kréyol' },
    { id: '3', src: '/images/4-wraps.jpg',            alt: 'Wraps Frais' },
    { id: '4', src: '/images/3-sandwiches.jpg',       alt: 'Nos Sandwichs' },
    { id: '5', src: '/images/2-entremets.jpg',        alt: 'Entremets & Douceurs' },
];

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const swipeConfidenceThreshold = 8000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const ImageCarousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            zIndex: 0,
            x: dir < 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    return (
        <section style={{ padding: '96px 0', background: 'var(--color-white)', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <p style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold, #b8922a)',
                        marginBottom: '12px'
                    }}>
                        Notre Vitrine
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 52px)',
                        fontWeight: 300,
                        letterSpacing: '-1px',
                        color: 'var(--color-gold, #b8922a)',
                        fontStyle: 'italic',
                        fontFamily: 'Georgia, serif',
                        margin: 0,
                    }}>
                        En <span style={{ fontFamily: 'inherit', fontStyle: 'normal', fontWeight: 600, color: '#111' }}>Images</span>
                    </h2>
                </motion.header>

                {/* Carousel wrapper — position:relative for arrow positioning */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{ position: 'relative' }}
                >
                    {/* Image frame */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: 'clamp(320px, 55vw, 620px)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background: '#f0ede8',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                    }}>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={page}
                                src={images[imageIndex].src}
                                alt={images[imageIndex].alt}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 280, damping: 32 },
                                    opacity: { duration: 0.25 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.8}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) paginate(1);
                                    else if (swipe > swipeConfidenceThreshold) paginate(-1);
                                }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    cursor: 'grab',
                                    userSelect: 'none',
                                }}
                            />
                        </AnimatePresence>



                        {/* ← Arrow left — superposée sur le bord gauche */}
                        <button
                            onClick={() => paginate(-1)}
                            aria-label="Image précédente"
                            style={{
                                position: 'absolute',
                                left: '16px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                width: '52px',
                                height: '52px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.92)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                transition: 'transform 0.2s, background 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={2.5} stroke="#111" width="22" height="22">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        {/* → Arrow right — superposée sur le bord droit */}
                        <button
                            onClick={() => paginate(1)}
                            aria-label="Image suivante"
                            style={{
                                position: 'absolute',
                                right: '16px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                width: '52px',
                                height: '52px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.92)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                transition: 'transform 0.2s, background 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={2.5} stroke="#111" width="22" height="22">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots pagination */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: '28px',
                    }}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    const newDir = index > imageIndex ? 1 : -1;
                                    setPage([page + (index - imageIndex), newDir]);
                                }}
                                aria-label={`Aller à l'image ${index + 1}`}
                                style={{
                                    height: '8px',
                                    width: index === imageIndex ? '32px' : '8px',
                                    borderRadius: '99px',
                                    background: index === imageIndex ? 'var(--color-gold, #b8922a)' : '#ccc',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageCarousel;
