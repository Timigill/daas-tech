'use client';
import Image from 'next/image';
import React from "react";
import { motion } from "framer-motion";
import purpleIcon from '/public/rotation.png';
import { Typewriter } from 'react-simple-typewriter';

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        padding: "48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5"
        style={{ width: "100%", maxWidth: 1500, margin: "0 auto" }}
      >
        {/* Left: Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minWidth: 320,
            maxWidth: 400,
            padding: "32px 28px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Delegate Daily Tasks
          </h3>
          <p style={{ color: "#bdbdbd", fontSize: 16, marginBottom: 18 }}>
            From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.
          </p>
          <div
            className="d-flex flex-wrap justify-content-center gap-1 mt-3"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <a href="#" className="btn btn-outline-light px-3 py-2">Summaries</a>
            <a href="#" className="btn btn-outline-light px-3 py-2">Scheduling</a>
            <a href="#" className="btn btn-outline-light px-3 py-2">Many more</a>
          </div>
        </motion.div>

        {/* Right: Card with animation */}
     <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      style={{
        background: "#111114",
        borderRadius: 18,
        width: 370,
        height: 350,
        marginBottom: 24,
        border: "1.5px solid #23232a",
        boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        textAlign: "center",
        fontFamily: "Inter, sans-serif"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 12,
          background: "rgba(24,24,27,0.85)",
          border: "1px solid #23232a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "#fff",
          position: "relative",
          zIndex: 1,
          padding: "20px",
        }}
      >
        {/* Rotating Image without border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          <Image
            src={purpleIcon}
            alt="Rotating Logo"
            width={60}
            height={60}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </motion.div>

        {/* Heading */}
        <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
          What can I help with?
        </h4>
        <p style={{ fontSize: 14, color: "#bdbdbd", marginBottom: 18 }}>
          Whether you want help in customer handling or make changes in your system, just give me a command.
        </p>

        {/* Typing Box */}
        <div style={{
          width: '100%',
          background: '#101014',
          border: '1px solid #2f2f35',
          borderRadius: 10,
          padding: '10px 12px',
          display: 'flex',
          flexDirection: 'column',
          colour:"#bdbdbd",
          gap: 8,
        }}>
          {/* Animated typing effect + Send icon */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              flex: 1,
              color: '#bdbdbd',
              fontSize: 14,
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}>
              <Typewriter
                words={[
                  'Schedule a 30 day meeting',
                  'Generate an invoice for client',
                  'Update system configuration',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
            <button style={{
              background: 'transparent',
              border: 'none',
              color: '#a855f7',
              fontSize: 20,
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              ▶
            </button>
          </div>

          {/* Add Document Button */}
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: '1px solid #36363f',
            background: 'transparent',
            borderRadius: 6,
            padding: '6px 12px',
            color: '#b3b3b3',
            fontSize: 13,
            cursor: 'pointer',
            width: 'fit-content',
          }}>
            + Add document
          </button>
        </div>
      </div>
    </motion.div>
   </div>
    </section>
  );
}
