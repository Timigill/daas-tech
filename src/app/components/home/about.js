'use client';
import React from "react";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
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

export default function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      <motion.section
        id="about"
        className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          padding: "64px 20px",
          background: "#0d0d0d",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span
          className="badge mb-3"
          style={{
            background: "rgba(139,92,246,0.15)",
            color: "#8b5cf6",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: 1,
            padding: "8px 18px",
            borderRadius: 20,
          }}
          variants={itemVariants}
        >
          About Us
        </motion.span>

        <motion.h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.15,
            marginBottom: 20,
          }}
          variants={itemVariants}
        >
          Helping Businesses Grow
        </motion.h2>

        <motion.p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#bdbdbd",
            maxWidth: 700,
            marginBottom: 40,
          }}
          variants={itemVariants}
        >
          Xtract helps businesses streamline operations and grow faster with AI-powered automation.
        </motion.p>

        {/* Additional content with animations */}
        <motion.div 
          className="row justify-content-center g-4"
          style={{ width: "100%", maxWidth: 1000 }}
          variants={containerVariants}
        >
          {[1, 2].map((item, index) => (
            <motion.div 
              key={index} 
              className="col-12 col-md-6"
              variants={itemVariants}
            >
              <div
                style={{
                  background: "#1a1a1d",
                  borderRadius: 16,
                  padding: "24px",
                  border: "1px solid #23232a",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  height: "100%"
                }}
              >
                <h3 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, marginBottom: "16px", color: "#8b5cf6" }}>
                  47B
                </h3>
                <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                  {["Langsham", "Unghjuan", "Unghjuan", "Unghjuan"].map((city, i) => (
                    <li key={i} style={{ marginBottom: "8px", fontSize: "clamp(0.875rem, 2vw, 1rem)", color: "#bdbdbd" }}>
                      <strong style={{ color: "#fff" }}>•</strong> {city}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{
            background: "#1a1a1d",
            borderRadius: 16,
            padding: "24px",
            width: "100%",
            maxWidth: 600,
            border: "1px solid #23232a",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            marginTop: "40px"
          }}
          variants={itemVariants}
        >
          <h4 style={{ color: "#8b5cf6", marginBottom: "16px" }}>User Review 2</h4>
          <p style={{ color: "#bdbdbd", fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
            Another AI Template ▼
          </p>
        </motion.div>
      </motion.section>
      
    </div>
  );
}