'use client';
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from 'framer-motion';
import {
  FaBullseye,     // Business Goals
  FaChartLine,    // Market Research
  FaServer,       // Technical Analysis
  FaProjectDiagram, // UX Planning
  FaTasks,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight         // Project Planning
} from "react-icons/fa";

import { FiFile, FiSearch, FiLayers } from 'react-icons/fi';
import "@/app/globals.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

const Process = () => {
  const checklist = [
    { label: "Understand Business Goals", icon: <FaBullseye size={14} /> },
    { label: "Market Research", icon: <FaChartLine size={14} /> },
    { label: "Technical Analysis", icon: <FaServer size={14} /> },
    { label: "UX Planning", icon: <FaProjectDiagram size={14} /> },
    { label: "Project Planning", icon: <FaTasks size={14} /> },

  ];

  const code = `
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to DaaS Tech Innovations API!');
});

// About route
app.get('/about', (req, res) => {
  res.json({ company: 'DaaS Tech', focus: 'Web & Automation' });
});

// Contact form POST
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  res.status(200).json({ status: 'Message received', name });
});

// Catch-all
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(PORT, () => {
  console.log(Server running at http://localhost:{PORT});
});
`.trim();

  const y = useMotionValue(0);

  React.useEffect(() => {
    const animation = animate(y, -150, {
      duration: 6,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    });
    return animation.stop;
  }, [checklist.length]);

  const thumbHeight = 40;
  const scrollRange = 150;
  const thumbY = useTransform(y, [-scrollRange, 0], [0, scrollRange - thumbHeight]);

  const [maxVisibleItems, setMaxVisibleItems] = useState(checklist.length);

  useEffect(() => {
    const animation = animate(y, -150, {
      duration: 6,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    });
    return () => animation.stop();
  }, []); // no need for checklist.length


  // const TOTAL_SLIDES = 4; // you have 4 steps
  const TOTAL_SLIDES = checklist.length; // instead of 4

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((i) => (i === 0 ? TOTAL_SLIDES - 1 : i - 1));
  };

  const nextSlide = () => {
    setActiveIndex((i) => (i === TOTAL_SLIDES - 1 ? 0 : i + 1));
  };


  return (
    <section
      className="process-section"
      style={{
        padding: "48px 20px",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", }}>
        <motion.span
          className="badge mb-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: 1,
            padding: "8px 18px",
            borderRadius: 20,
            display: "inline-block",
          }}
        >
          Our Process
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          style={{
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Our Simple, Smart, and Scalable Process
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "var(--muted-text)",
            margin: "0 auto 40px auto",
            maxWidth: 600,
          }}
        >
          We design, develop, and launch websites that help you reach more customers and grow your business with ease.
        </motion.p>


        {/* Carousel Section */}

        <div className=" testimonial-wrapper overflow-hidden mt-6 position-relative">
       
              <motion.div
    className="d-flex flex-wrap row gap-4"
    animate={{ x: `-${activeIndex * 100}%` }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{ width: "100%" }}
  >
            <div>
              <motion.div
                className="col-12 col-md-6 row"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 12,
                  padding: 24,
                  minHeight: 300,
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  flex: "0 0 auto", 
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 32px rgba(139,92,246,0.25)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Step Tag */}
                <div
                  style={{
                    padding: "4px 10px",
                    fontSize: 12,
                    color: "#fff",
                    background: "var(--accent)",
                    border: "var(--border-color)",
                    borderRadius: 8,
                    width: "fit-content",
                    marginBottom: 12,
                  }}
                >
                  Step 1
                </div>

                {/* Heading */}
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", marginBottom: 10 }}>
                  Smart Analyzing
                </h3>

                {/* Description */}
                <p style={{ fontSize: 14, color: "var(--muted-text)", marginBottom: 20 }}>
                  We carefully assess your current workflows, identify bottlenecks,
                  and highlight areas where automation and AI can save time and cut costs.

                </p>

                {/* Main Content Row */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    flex: 1,
                    minHeight: 180,
                    justifyContent:"space-around"
                  }}
                >
                  {/* Left - Radar */}
                  <div className="row g-3">
                    {/* Left - Animated Circle */}
                    <div
                      className="
      col-12 col-md-6 
      d-flex flex-column align-items-center justify-content-center 
      p-3 
    "
                      style={{
                        border: "1px solid var(--border-color)",
                        borderRadius: 12,
                        backgroundColor: "var(--background)",
                      }}
                    >
                      <div
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: "50%",
                          border: "2px solid var(--border-color)",
                          background: "var(--cicleGrad)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: `conic-gradient(
            from 0deg,
            rgba(139, 92, 246, 0.6) 0deg,
            rgba(139, 92, 246, 0.2) 30deg,
            transparent 60deg,
            transparent 360deg
          )`,
                            transformOrigin: "center",
                          }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: 12,
                          color: "var(--muted-text)",
                          marginTop: 12,
                          textAlign: "center",
                        }}
                      >
                        Analyzing current workflow...
                      </p>
                    </div>

                    {/* Right - Checklist */}
                    <div
                      className="
      col-12 col-md-6 
      d-flex flex-column 
      justify-content-start
       gap-2 p-3 
    "
                      style={{
                        border: "1px solid var(--border-color)",
                        borderRadius: 12,
                        backgroundColor: "var(--background)",
                      }}
                    >
                      {checklist.slice(0, maxVisibleItems).map(({ label, icon }, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-center"
                          style={{
                            gap: 6,
                            padding: "6px 10px",
                            border: "1px solid var(--border-color)",
                            background: "var(--background)",
                            borderRadius: 8,
                            fontSize: 12,
                            color: "var(--foreground)",
                            whiteSpace: "wrap",
                          }}
                        >
                          {icon}
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                className="col-12 col-md-6 row"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 12,
                  padding: 24,
                  minHeight: 300,
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  flex: "0 0 auto",   // prevents stretch
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 32px rgba(139,92,246,0.25)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    padding: "4px 10px",
                    fontSize: 12,
                    color: "#fff",
                    background: "var(--accent)",
                    border: "1px solid var(--border-color)",
                    borderRadius: 8,
                    width: "fit-content",
                    marginBottom: 12,
                  }}
                >
                  Step 2
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(foreground)", marginBottom: 10 }}>
                  Web Design & Development
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted-text)", marginBottom: 25 }}>
                  Our team builds intelligent, scalable web solutions tailored to your Business needs
                </p>

                <div
                  style={{
                    background: "#222",
                    border: "1px solid  var(--border-color)",
                    borderRadius: "8px",
                    marginTop: "40px",
                    height: "207px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "#2a2a2a",
                      display: "flex",
                      alignItems: "center",
                      padding: "6px 8px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
                      <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                      <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
                    </div>
                    <div style={{ flex: 1 }} />
                    <div style={{ display: "flex", gap: "8px", fontSize: "12px", cursor: "pointer" }}>
                      <span>🗖</span>
                      <span>🗕</span>
                      <span>✕</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", height: "calc(100% - 30px)" }}>
                    <div
                      style={{
                        background: "#2a2a2a",
                        width: "40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 0",
                        borderRight: "1px solid #333",
                      }}
                    >
                      <FiFile size={16} color="#aaa" />
                      <FiSearch size={16} color="#aaa" />
                      <FiLayers size={16} color="#aaa" />
                    </div>

                    <div
                      style={{
                        position: "relative",
                        flexGrow: 1,
                        background: "var(--codeinnerdiv)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.pre
                        style={{
                          margin: 0,
                          padding: "12px",
                          fontFamily: "monospace",
                          fontSize: "13px",
                          lineHeight: 1.5,
                          color: "var(--muted-text)",
                          whiteSpace: "pre",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          y: y,
                        }}
                      >
                        {code}
                      </motion.pre>
                      <motion.div
                        style={{
                          position: "absolute",
                          right: "4px",
                          width: "4px",
                          height: "40px",
                          background: "#555",
                          borderRadius: "2px",
                          y: thumbY,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                className="col-12 col-md-6 row"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 12,
                  padding: 24,
                  minHeight: 300,
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  flex: "0 0 auto",   // prevents stretch
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,0.25)" }}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={3}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    padding: "4px 10px",
                    fontSize: 12,
                    color: "#fff",
                    background: "var(--accent)",
                    border: "1px solid var(--border-color)",
                    borderRadius: 8,
                    width: "fit-content",
                    marginBottom: 12,
                  }}
                >
                  Step 3
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", marginBottom: 12 }}>
                  Seamless Integration
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted-text)", marginBottom: 16 }}>
                  We ensure smooth integration of new solutions into your existing infrastructure with minimal disruption.
                  Whether it’s CRM, ERP, or custom APIs, everything works together seamlessly.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    backgroundColor: "var(--card-bg)",
                    borderRadius: 10,
                    padding: 12,
                    gap: 8,
                    border: "1px solid var(--border-color)",
                    marginTop: 50,
                    flexDirection: "column",
                    height: "auto",
                  }}
                >
                  <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: "5px",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "var(--codeinnerdiv)",
                        }}
                      >
                        <Image src="/neural-head.svg" alt="Our solution" height={60} width={60} style={{ objectFit: "cover" }} />
                      </div>
                      <p style={{ fontSize: 14, color: "var(--muted-text)" }}>Our solution</p>
                    </div>

                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 140,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: 60,
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          style={{
                            position: "absolute",
                            height: 2,
                            borderRadius: 2,
                            background: "linear-gradient(to right,rgb(42, 35, 59),rgb(148, 72, 236))",
                            top: `${i * 10 + 10}px`,
                            left: 0,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        />
                      ))}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: "5px",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "var(--codeinnerdiv)",

                        }}
                      >
                        <FaBuilding style={{
                          color: "var(--accent)",
                          fontSize: "35"
                        }} />
                        {/* <Image src="/yourstack.png" alt="Your stack" height={40} width={40} style={{ objectFit: "cover" }} /> */}
                      </div>
                      <p style={{ fontSize: 14, color: "var(--muted-text)" }}>Your stack</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                className="col-12 col-md-6 row"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 12,
                  padding: 24,
                  minHeight: 300,
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  flex: "0 0 auto",   // prevents stretch
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,0.25)" }}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={4}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    padding: "4px 10px",
                    fontSize: 12,
                    color: "#fff",
                    background: "var(--accent)",
                    border: "1px solid var(--border-color)",
                    borderRadius: 8,
                    width: "fit-content",
                    marginBottom: 12,
                  }}
                >
                  Step 4
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", marginBottom: 12 }}>
                  Continuous Optimization
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted-text)", marginBottom: 16 }}>
                  We refine performance, analyze insights, and enhance automation for long-term growth.
                </p>

                <div
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderRadius: 10,
                    padding: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    border: "1px solid var(--border-color)",
                    marginTop: 16,
                  }}
                >
                  {[
                    { title: "Efficiency Improved", note: "Efficiency will increase by 20%", icon: "⟳" },
                    { title: "Regular Workflow Updates", note: "3 Updates ", icon: "⬆" },
                    { title: "Customer Satisfaction", note: "Priority", icon: "✔" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 10,
                        background: "var(--codeinnerdiv)",
                        borderRadius: 6,
                      }}
                    >
                      <div>
                        <strong style={{ color: "var(--foreground)", fontSize: 14 }}>{item.title}</strong>
                        <div style={{ fontSize: 12, color: "var(--muted-text)" }}>{item.note}</div>
                      </div>
                      <span style={{ color: "var(--accent)", fontSize: 20 }}>{item.icon}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            </motion.div>
          

          <button
            className="carousel-control-prev absolute top-1/2 left-2 -translate-y-1/2 b
             p-2 rounded-full"

            onClick={prevSlide}
            style={{

              width: 35, height: 35,
              border: "2px solid var(--border-color)",
              background: "var(--background)"
            }}
          >

            <FaChevronLeft size={14} color="var(--accent)" />
          </button>

          <button
            className="carousel-control-next absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            onClick={nextSlide}
            style={{

              width: 35, height: 35,
              border: "2px solid var(--border-color)",
              background: "var(--background)"
            }}

          >
            <FaChevronRight size={14} color="var(--accent)" />
          </button>

        </div>


    </div>
    </section>
  );
};

export default Process;