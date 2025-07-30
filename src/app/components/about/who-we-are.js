
'use client';
import React from 'react';
import { AiFillSignal } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaBolt } from "react-icons/fa6";
import { motion } from "framer-motion";
import "@/app/globals.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

// ✅ Card content array
const cardData = [
  {
    icon: <AiFillSignal size={23} style={{ color: "var(--foreground)" }} />,
    title: "150+ Businesses",
    description: "Companies have streamlined their workflows with DaaS Digital solutions.",
    custom: 1.5,
  },
  {
    icon: <GoClockFill size={23} style={{ color: "var(--foreground)" }} />,
    title: "1M+ Hours",
    description: "Reducing time and boosting productivity through Digital Solutions.",
    custom: 2,
  },
  {
    icon: <FaBolt size={23} style={{ color: "var(--foreground)" }} />,
    title: "95% Faster",
    description: "Clients see improved efficiency within the first two to three months.",
    custom: 2.5,
  },
];

// ✅ Style once, reuse globally
const cardStyle = {
  background: "linear-gradient(to top left, var(--grad1) 0%, var(--grad2) 50%, var(--grad1) 100%)",
  borderRadius: 12,
  padding: 24,
  flex: "1 1 260px",
  minHeight: 150,
  maxWidth: 300,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
};

function Who() {
  return (
    <motion.div
      className='d-flex flex-column align-items-center text-center my-5 py-5 px-3'
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Tag */}
      <motion.span
        variants={fadeInUp}
        custom={0.6}
        whileHover={{ scale: 1.1 }}
        className="btn px-3 py-2"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 500,
          fontSize:'12px',
        marginBottom:" 12px",
        width:'fit-content'
        }}
      >
        Who We Are
      </motion.span>

      {/* Heading */}
      <motion.h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          // fontSize: "2.5rem",
          lineHeight: 1.1,
          color: "var(--foreground)",
          maxWidth: 700,
          margin: "0 auto",
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={0.5}
        viewport={{ once: true }}
      >
        Who We Are
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-3"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          color: "var(--muted-text)",
          maxWidth: 620,
          margin: "0 auto",
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
      >
        DaaS Tech is a team of innovators dedicated to making your Digital Presence simple and effective.
        We help businesses streamline workflows, boost efficiency, and scale with smart.
      </motion.p>

      {/* Cards */}
      <div className="row w-100 justify-content-center g-5 my-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={card.custom}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded" style={cardStyle}>
              <div className="d-flex gap-2 mb-2" style={{ height: 'auto' }}>
                {card.icon}
                <h5
                  className="mb-0"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "var(--foreground)",
                  }}
                >
                  {card.title}
                </h5>
              </div>
              <p
                className="text-start"
                style={{
                  margin: "0 auto",
                  color: "var(--muted-text)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  maxWidth: 400,
                }}
              >
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
