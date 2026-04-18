import React from 'react';
import { motion } from 'framer-motion';

const gold = '#D4AF37';

const cardStyle = {
    border: `4px solid ${gold}`,
    borderRadius: '24px',
    background: 'white',
    boxShadow: '0 8px 40px rgba(212,175,55,0.12)',
    padding: '32px',
};

const hourRowStyle = {
    border: `2px solid ${gold}`,
    borderRadius: '16px',
    background: '#FFF9ED',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
};

const closedRowStyle = {
    ...hourRowStyle,
    background: '#F5F5F5',
    border: '2px solid #E0E0E0',
    opacity: 0.6,
};

const Footer = () => {
    return (
        <footer
            id="contact"
            style={{
                background: '#F7F9FC',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                padding: '80px 40px',
            }}
        >
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '48px' }}
                >
                    <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>
                        Informations
                    </h2>
                    <p style={{ color: '#888', fontSize: '14px' }}>Détails pratiques et réseaux sociaux</p>
                </motion.div>

                {/* Grid layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

                    {/* ===== RECTANGLE 1 : HORAIRES ===== */}
                    <motion.div
                        style={cardStyle}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -4, boxShadow: '0 16px 50px rgba(212,175,55,0.2)' }}
                    >
                        <h3 style={{
                            fontSize: '13px', fontWeight: '800', textTransform: 'uppercase',
                            letterSpacing: '0.15em', color: gold, marginBottom: '20px',
                            paddingBottom: '16px', borderBottom: `2px solid ${gold}22`, textAlign: 'center',
                        }}>
                            Heures d'ouverture
                        </h3>

                        <motion.div style={hourRowStyle}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a', margin: 0 }}>Mardi — Samedi</p>
                                <p style={{ fontSize: '12px', color: '#888', margin: '2px 0 0' }}>Service continu</p>
                            </div>
                            <span style={{ fontWeight: '800', color: gold, fontSize: '15px' }}>06:00 — 19:00</span>
                        </motion.div>

                        <motion.div style={hourRowStyle}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a', margin: 0 }}>Dimanche</p>
                                <p style={{ fontSize: '12px', color: '#888', margin: '2px 0 0' }}>Fermeture à midi</p>
                            </div>
                            <span style={{ fontWeight: '800', color: gold, fontSize: '15px' }}>06:30 — 12:00</span>
                        </motion.div>

                        <motion.div style={closedRowStyle}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }}>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '15px', color: '#666', margin: 0 }}>Lundi</p>
                                <p style={{ fontSize: '12px', color: '#aaa', margin: '2px 0 0' }}>Jour de repos</p>
                            </div>
                            <span style={{ fontWeight: '800', color: '#aaa', fontSize: '15px' }}>Fermé</span>
                        </motion.div>
                    </motion.div>

                    {/* ===== COLONNE DROITE ===== */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* ===== RECTANGLE 2 : INSTAGRAM ===== */}
                        <motion.a
                            href="https://www.instagram.com/boulangeriepainsetpassion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                border: `4px solid ${gold}`,
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)',
                                boxShadow: '0 8px 40px rgba(221,42,123,0.2)',
                                padding: '28px 32px',
                                color: 'white',
                                textDecoration: 'none',
                                display: 'block',
                            }}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(221,42,123,0.35)' }}
                        >
                            <p style={{ fontSize: '12px', fontWeight: '600', opacity: 0.8, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 6px' }}>
                                Suivez-nous sur
                            </p>
                            <p style={{ fontSize: '26px', fontWeight: '900', margin: '0 0 6px' }}>Instagram</p>
                            <p style={{ fontSize: '12px', opacity: 0.7, margin: '0 0 20px' }}>Découvrez nos coulisses et nouveautés</p>
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(255,255,255,0.2)',
                                border: `2px solid ${gold}`,
                                borderRadius: '12px',
                                padding: '8px 18px',
                                fontSize: '13px',
                                fontWeight: '700',
                            }}>
                                @boulangeriepainsetpassion
                            </div>
                        </motion.a>

                        {/* ===== RECTANGLE 3 : LOCALISATION ===== */}
                        <motion.div
                            style={{ ...cardStyle, flex: 1 }}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            whileHover={{ y: -4, boxShadow: '0 16px 50px rgba(212,175,55,0.2)' }}
                        >
                            <h3 style={{
                                fontSize: '13px', fontWeight: '800', textTransform: 'uppercase',
                                letterSpacing: '0.15em', color: gold, marginBottom: '20px',
                                paddingBottom: '16px', borderBottom: `2px solid ${gold}22`, textAlign: 'center',
                            }}>
                                Nous Trouver
                            </h3>
                            <a href="tel:+590690058880"
                                style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>
                                +590 690 05 88 80
                            </a>
                            <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.8', margin: 0 }}>
                                23 rue Général Delacroix,<br />
                                Trois-Rivières 97114,<br />
                                Guadeloupe
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div
                    style={{ marginTop: '40px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div style={{
                        border: `4px solid ${gold}`,
                        borderRadius: '999px',
                        background: 'white',
                        padding: '14px 40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#888',
                        boxShadow: '0 4px 20px rgba(212,175,55,0.1)',
                    }}>
                        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Pain et Passion.</p>
                        <p style={{ margin: 0 }}>Artisan Créateur — Guadeloupe</p>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
};

export default Footer;
