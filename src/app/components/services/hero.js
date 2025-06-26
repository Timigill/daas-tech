"use client";
import React from 'react';
import { motion } from "framer-motion";
import "@/app/globals.css";
import Trust from '../trust';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay:0, duration: 0.4, ease: "easeOut" }
  },
};

function Hero() {
  return (
    <div className="d-flex flex-column align-items-center h-50 text-center mt-5 p-5 px-3">
      <div className='pt-4'>
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
            color: "#fff",
            border: "1px solid rgb(17 17 17)",
            borderRadius: 8,
            width: "fit-content",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Services
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
            color: "#ffffff",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Providing Digital Solutions for Your Business
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-3 text-white-50"
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
          }}
        >
          DaaS Tech Innovations helps businesses streamline operations and grow faster with Digital Solutions.
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
