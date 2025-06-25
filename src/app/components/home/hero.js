"use client";
import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "../ParticlesBg";
import "@/app/globals.css";
import "@/app/custom-bootstrap.scss";

// Animation variant
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
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#000",
        fontFamily: "Inter, sans-serif",
        padding: "0 1rem",
        backgroundColor: "#000",
      }}
    >
      {/* Particles Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "transparent",
          pointerEvents: "none",
        }}
      >
        <ParticlesBg />
      </div>

      {/* Main Content */}
      <header
        style={{
          position: "relative",
          zIndex: 2,
          background: "#000"
        }}
      >
        <motion.span
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="badge mb-3"
          style={{
            background: "rgba(139,92,246)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 1
          }}
        >
          New
        </motion.span>

        <motion.h1
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="fw-bold hero-title mb-2"
          style={{
            fontWeight: 600,
            fontSize: "2.7rem",
            lineHeight: 1.1,
            color: "#fff",
            maxWidth: "100%",
            width: "100%",
            padding: "0 1rem"
          }}
        >
          Intelligent Solutions for <br className="d-none d-md-block" />
          Modern Businesses.
        </motion.h1>

        <motion.p
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="mb-4 text-white-50"
          style={{
            fontSize: 15,
            maxWidth: 550,
            margin: "0 auto",
            padding: "0 1rem"
          }}
        >
          At DaaS Tech, we blend tech, design, and strategy. <br className="d-none d-md-block" /> Where Problems Meet Possibilities.
        </motion.p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <motion.a
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            whileHover={{ scale: 1.1 }}
            href="/signup"
            className="btn btn-primary px-3 py-2"
            style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            whileHover={{ scale: 1.1 }}
            href="/portfolio"
            className="btn btn-outline-light px-3 py-2"
            style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
          >
            View Services
          </motion.a>
        </div>
      </header>
    </section>
  );
}

export default Hero;
