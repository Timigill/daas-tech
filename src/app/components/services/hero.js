"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column mb-0  mt-5  align-items-center text-center px-3"
      style={{
        paddingTop: " 58px ",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>
        {`
          @keyframes scrollTasks {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          .task-scroll-wrapper {
            height: 190px;
            overflow: hidden;
            position: relative;
          }

          .task-scroll {
            display: flex;
            flex-direction: column;
            gap: 10px;
            animation: scrollTasks 10s linear infinite;
          }

          .task-scroll-wrapper:hover .task-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Badge */}
      <motion.span
        className="badge mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: "rgba(139,92,246,0.15)",
          color: "#8b5cf6",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 1,
          padding: "8px 18px",
          borderRadius: 20,
        }}
      >
        Our Services
      </motion.span>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: 16,
          maxWidth: 700,
        }}
      >
        Web Solutions That Take Your Business Online
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: 15,
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 0px auto",
        }}
      >
        We design, develop, and launch websites that help you reach more
        customers and grow your business with ease.
      </motion.p>

      {/* Main Content */}
      
    </section>
  );
}
