
'use client';
import React from 'react';
import { AiFillSignal } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaBolt } from "react-icons/fa6";
import { motion } from "framer-motion";
import "@/app/globals.css"; // if you have global vars here

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

const cardData = [
  {
    icon: <AiFillSignal size={23} style={{ color: "var(--foreground)" }} />,
    title: "150+ Businesses",
    description: "Streamlined workflows with DaaS Digital solutions.",
    custom: 1.5,
  },
  {
    icon: <GoClockFill size={23} style={{ color: "var(--foreground)" }} />,
    title: "1M+ Hours",
    description: "Boosting productivity through smart digital tools.",
    custom: 2,
  },
  {
    icon: <FaBolt size={23} style={{ color: "var(--foreground)" }} />,
    title: "95% Faster",
    description: "Efficiency improved in just 2–3 months.",
    custom: 2.5,
  },
];

function Who() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center my-5 py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Section Tag */}
      <motion.span
        variants={fadeInUp}
        custom={0.6}
        whileHover={{ scale: 1.1 }}
        className="btn px-3 py-2"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 500,
          fontSize: '12px',
          marginBottom: "12px",
          width: 'fit-content'
        }}
      >
        Who We Are
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={0.5}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "var(--foreground)",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        Who We Are
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-3"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          color: "var(--muted-text)",
          maxWidth: 620,
          margin: "0 auto",
        }}
      >
        DaaS Tech is a team of innovators dedicated to making your Digital Presence simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart solutions.
      </motion.p>

      {/* Cards Section (Responsive Carousel) */}
      <div className="who-card-container mt-5">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="who-card-wrapper"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={card.custom}
            viewport={{ once: true }}
          >
            <div className="who-card">
              <div className="d-flex gap-2 mb-2 align-items-center">
                {card.icon}
                <h5 className="mb-0" style={{ fontSize: "15px", color: "var(--foreground)" }}>
                  {card.title}
                </h5>
              </div>
              <p className="text-start" style={{ color: "var(--muted-text)", fontSize: "0.9rem" }}>
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Who;
