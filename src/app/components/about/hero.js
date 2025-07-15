
"use client";
import React from 'react';
import { motion } from "framer-motion";
import "@/app/globals.css";
import Trust from '../trust';
import ParticlesBg from '../ParticlesBg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0, duration: 0.4, ease: "easeOut" }
  },
};

function Hero() {
  return (
    <div
      className="d-flex flex-column align-items-center vh-50 text-center mt-5 p-5 px-3"
      style={{ background: "var(--background)", color: "var(--foreground)" }}

      >
       {/* Particle background */}
           <div
             style={{
               position: "absolute",
               inset: 0,
               zIndex: 0,
               pointerEvents: "none",
             }}
           >
             <ParticlesBg />
           </div>
             {/* Radial gradient background (light mode only) */}
      <div
        className="hero-radial-bg light-only"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          zIndex: 1,
          pointerEvents: "none",
          borderRadius: "50%",
          background: `radial-gradient(circle at 50%  50%, rgba(164, 122, 255, 0.7), rgba(255, 255, 255, 0.9) 70%)`,    
        }}
      />

      <div className='py-4' style={{zIndex:'2'}}>
        {/* Tagline */}
        <motion.span
          className="badge px-3 py-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          style={{
            padding: "4px 10px",
            fontSize: 12,
            color: "var(--foreground)",
            border: "1px solid var(--foreground)",
            borderRadius: 8,
            width: "fit-content",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          About Us
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          className="mt-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={0.5}
          viewport={{ once: true }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "var(--foreground)",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Helping Businesses Grow
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1}
          viewport={{ once: true }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 680,
            margin: "0 auto",
            color: "var(--muted-text)",
          }}
        >
          DaaS Tech Innovations helps businesses streamline operations and grow faster with Digital Solutions.
        </motion.p>
      </div>
          <div  style={{zIndex:'2'}}>
      {/* Trust Section */}
      <Trust />
          </div>
    </div>
  );
}

export default Hero;
