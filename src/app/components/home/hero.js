"use client";
import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "../ParticlesBg";
import "@/app/globals.css";

const scaleIn = {
  hidden: { scale: 0 },
  visible: (delay = 0) => ({
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 25, delay }
  })
};

export default function Hero() {
  return (
    <section
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
        padding: "0 1rem",
        overflow: "hidden",
      }}
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

      {/* Hero text */}
      <header style={{ position: "relative", zIndex: 2 }}>
        <motion.span
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="badge mb-3"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 1,
          }}
        >
          New
        </motion.span>
        <motion.h1
          variants={scaleIn}
          custom={0.2}
          className="fw-bold hero-title mb-2"
          style={{
            fontWeight: 600,
            fontSize: "2.7rem",
            lineHeight: 1.1,
            color: "var(--foreground)",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          Intelligent Solutions <br/> for Modern Businesses.
        </motion.h1>
        <motion.p
          variants={scaleIn}
          custom={0.4}
          className="mb-4"
          style={{
            fontSize: 15,
            maxWidth: 550,
            margin: "0 auto",
            padding: "0 1rem",
            color: "var(--muted-text)",
          }}
        >
          At DaaS Tech, we blend tech, design, and strategy. Where Problems Meet Possibilities.
        </motion.p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <motion.a
            variants={scaleIn}
            custom={0.6}
            whileHover={{ scale: 1.1 }}
            href="/quote"
            className="btn px-3 py-2"
            style={{
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Get a Quote
          </motion.a>
          <motion.a
            variants={scaleIn}
            custom={0.6}
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
            href="/services"
            className="btn px-3 py-2"
            style={{
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--foreground)",
            }}
          >
            View Services
          </motion.a>
        </div>
      </header>
    </section>
  );
}
