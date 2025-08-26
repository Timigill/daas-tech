
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
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative px-3 py-5"
      style={{
        minHeight: "80vh",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
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

      {/* Radial gradient background */}
      <div
        className="hero-radial-bg light-only"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "50vh",
          maxWidth: "700px",
          // maxHeight: "700px",
          zIndex: 1,
          pointerEvents: "none",
          borderRadius: "50%",
          // background: `radial-gradient(circle at 50% 50%, rgba(164, 122, 255, 0.7), rgba(255, 255, 255, 0.9) 70%)`,
        }}
      />

      {/* Hero Content */}
      <header style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "800px" }}>
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
            fontSize: "clamp(0.85rem, 1vw, 1rem)",
            letterSpacing: 1,
            padding: "0.4em 0.8em",
            borderRadius: "0.5em",
          }}
        >
          New
        </motion.span>

        <motion.h1
          variants={scaleIn}
          custom={0.2}
          className="mb-3  hero-heading"
          style={{
            // fontSize: "clamp(2rem, 3rem)",
            lineHeight: 1.2,
            fontWeight: "600 !important",
            color: "var(--foreground)",
            marginBottom: "1rem",
          }}
        >
          From Concept to Launch <br/>We Build Websites That Matter
        </motion.h1>

        <motion.p
          variants={scaleIn}
          custom={0.4}
          className="mb-4  hero-subheading"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            color: "var(--muted-text)",
            margin: "0 auto",
            maxWidth: "600px",
            padding: "0 1rem",
          }}
        >
           From design to development and launch, 
           we build websites that are fast, impactful and scalable
        </motion.p>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-3">
          <motion.a
            variants={scaleIn}
            custom={0.6}
            whileHover={{ scale: 1.1 }}
            href="/quote"
            className="btn"
            style={{
              background: "var(--accent)",
              color: "#fff !important",
              fontWeight: 600,
              padding: "0.6rem 1.2rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
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
            className="btn"
            style={{
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--foreground)",
              padding: "0.6rem 1.2rem",
              borderRadius: "0.5rem",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View Services
          </motion.a>
        </div>
      </header>
    </section>
  );
}
