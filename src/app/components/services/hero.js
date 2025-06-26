"use client";
import React from "react";
import { motion } from "framer-motion";
// import "@/app/globals.css";
import Trust from '../trust';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0, duration: 0.4, ease: "easeOut" },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" }
  }),
};

function Hero() {
  return (
   <div className="banner-container w-100 h-50vh">
                   <section
                        className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative"
                        style={{
                          minHeight: "50vh",
                          width: "100%",
                          overflow: "hidden",
                          background: "#000",
                          fontFamily: "Inter, sans-serif",
                          padding: "0 1rem",
                          backgroundColor: "#000",
                          boxShadow: "0 4px 20px rgba(164, 122, 255, 0.1)",
                        }}
                      >
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
                              color: "#fff",
                              fontSize: 12,
                            }}
                          >
                            Updated June 2025
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
                              fontSize: "2.3rem",
                              lineHeight: 1.1,
                              color: "#fff",
                              maxWidth: "100%",
                              width: "100%",
                              padding: "0 1rem"
                            }}
                          >
                            Your Privacy, Our Priority  <br className="d-none d-md-block" />
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
                            At DaaS Tech, We Protect What Matters   <br className="d-none d-md-block" /> Your Data, Your Trust, Your Peace of Mind.
                          </motion.p>
                        </header>
                      </section>
               </div>
  );
}

export default Hero;
