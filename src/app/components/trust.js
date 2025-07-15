'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import "@/app/globals.css"; // Ensure global CSS is included

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0, duration: 0.4, ease: "easeOut" }
  },
};

function Trust() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center trust-section mt-5"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{
        overflowX: "hidden",
        width: "100vw",
        background: "transparent",
      }}
    >
      <motion.p
        className="trust-text"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1.1rem",
          color: "var(--muted-text)",
        }}
      >
        Businesses trust us
      </motion.p>

      <motion.div
        className="review-slider position-relative w-100"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        {/* Left Fade */}
        <div
          className="slider-fade-left"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100px",
            height: "100%",
            zIndex: 1,
            background: "linear-gradient(to right, var(--background) 30%, transparent)",
          }}
        ></div>

        {/* Right Fade */}
        <div
          className="slider-fade-right"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "100px",
            height: "100%",
            zIndex: 1,
            background: "linear-gradient(to left, var(--background) 30%, transparent)",
          }}
        ></div>

        {/* Review Logos Slider */}
        <div className="slider-track" style={{ overflow: "hidden" }}>
          <div
            className="slider-content d-flex gap-4 justify-content-center"
            style={{
              animation: "scroll 30s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <a href="https://g.co/kgs/gLLDsjr" target='_blank' rel="noopener noreferrer">
                  <Image src="/google-reviews.png" alt="Google Review" className="slider-image" width={80} height={80} />
                </a>
                <a href="https://www.linkedin.com/company/daas-tech-innovations/" target='_blank' rel="noopener noreferrer">
                  <Image src="/Linkedin.png" alt="LinkedIn" className="slider-image" width={80} height={80} />
                </a>
                <a href="https://www.facebook.com/61574573447669" target='_blank' rel="noopener noreferrer">
                  <Image src="/Facebook1.png" alt="Facebook" className="slider-image" width={80} height={80} />
                </a>
                <a href="https://www.trustpilot.com/review/daastech.info" target='_blank' rel="noopener noreferrer">
                  <Image src="/Trustpilot.png" alt="TrustPilot" className="slider-image" width={80} height={80} />
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Trust;
