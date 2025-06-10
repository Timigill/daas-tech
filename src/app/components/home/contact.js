'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="d-flex flex-column align-items-center justify-content-center" // Added justify-content-center
      style={{
        padding: '80px 20px',
        background: '#0d0d0d',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh',
        width: '100%' // Ensure full width
      }}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div 
        className="text-center"
        variants={item}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: 'auto' 
        }}
      >
        <span
          className="badge mb-3"
          style={{
            background: 'rgba(139,92,246,0.15)',
            color: '#8b5cf6',
            fontWeight: 600,
            fontSize: '15px',
            letterSpacing: '1px',
            padding: '8px 18px',
            borderRadius: '20px',
          }}
        >
          Contact
        </span>
        <motion.h2
          style={{
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}
          variants={item}
        >
          Get in Touch with Us
        </motion.h2>
        <motion.p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#bdbdbd',
            maxWidth: '700px',
            margin: '0 auto',
          }}
          variants={item}
        >
          Have questions or need AI solutions? Let us know by filling out the form, and
          <br />
          we'll be in touch!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;