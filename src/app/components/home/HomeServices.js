"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{
        padding: "48px 0",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
      }}>
      {/* inline styles unchanged */}
      <motion.span
        className="badge mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background: "rgba(139,92,246,0.15)",
          color: "#8b5cf6",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 1,
          padding: "8px 18px",
          borderRadius: 20,
        }}>
        Our Services
      </motion.span>
      {/* heading and text */}
      <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mb-3">
        Web Solutions That Take Your Business Online
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} style={{ color: "var(--muted-text)", maxWidth: 600 }}>
        We design, develop, and launch websites that help you reach more customers and grow your business with ease.
      </motion.p>
      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          background: "var(--card-bg)",
          borderRadius: 18,
          maxWidth: 400,
          border: "1.5px solid var(--border-color)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
        }}>
        {/* content inside */}
      </motion.div>
      {/* CTA block */}
    </section>
  );
}
