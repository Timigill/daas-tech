'use client';
import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "../ParticlesBg";
import "@/app/globals.css";
import "@/app/custom-bootstrap.scss";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay }
  })
};

const scaleIn = {
  hidden: { scale: 0 },
  visible: (delay = 0) => ({
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 25, delay }
  })
};

function Hero() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        minHeight: "90vh",
        width: "100%",
        overflow: "hidden",
        background: "#000",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%" }}>
        <ParticlesBg />
      </div>

      {/* Content */}
      <header style={{ position: "relative", zIndex: 2 }}>
        {/* ✅ Animated "New" badge */}
        <motion.span
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="badge mb-3"
          style={{
            background: "rgba(139,92,246)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 1,
            fontFamily: "Inter, sans-serif",
          }}
        >
          New
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="fw-bold hero-title mb-2"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "2.7rem",
            lineHeight: 1.1,
            color: "#fff",
            maxWidth: 700,
          }}
        >
          Intelligent Automation for <br className="d-none d-md-block" />
          Modern Businesses.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mb-4 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            maxWidth: 550,
            margin: "0 auto",
          }}
        >
          Xtract brings AI automation to your fingertips & streamline tasks.
        </motion.p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <motion.a
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0.6}
            whileHover={{ scale: 1.1 }}
            href="/signup"
            className="btn btn-primary px-3 py-2"
          >
            Get in Touch
          </motion.a>
          <motion.a
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0.6}
            whileHover={{ scale: 1.1 }}
            href="/portfolio"
            className="btn btn-outline-light px-3 py-2"
          >
            View Services
          </motion.a>
        </div>
      </header>
    </section>
  );
}

export default Hero;
