"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import purpleIcon from "/public/rotation.png";
import { Typewriter } from "react-simple-typewriter";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{
        padding: "48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <div
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100"
        style={{ maxWidth: 1300, margin: "0 auto" }}
      >
        {/* Left Column */}
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
            width: "100%",
            maxWidth: 500,
            padding: "32px 20px",
          }}
        >
          <a
            href="#"
            className="btn btn-outline-light mb-3 px-2 py-1"
            style={{
              background: "transparent",
              color: "#bdbdbd",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid #23232a",
            }}
          >
            Custom Site
          </a>

          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Build your own Custom Website
          </h3>

          <p
            style={{
              color: "#bdbdbd",
              fontSize: 16,
              marginBottom: 0,
              textAlign: "left",
            }}
          >
            From managing calendars to drafting emails and summarizing meetings,
            our AI assistants work around the clock to keep your business
            running smarter and faster.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            {["Get a Quote", "Scheduling", "Many More"].map((text, idx) => (
              <a
                key={idx}
                href="#"
                className="btn btn-outline-light px-2 py-1"
                style={{
                  background: "transparent",
                  color: "#bdbdbd",
                  fontWeight: 500,
                  fontSize: 13,
                  borderRadius: 7,
                  padding: "4px 14px",
                  border: "1px solid #23232a",
                }}
              >
                {text}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            background: "#111114",
            borderRadius: 18,
            width: "100%",
            maxWidth: 420,
            height: 370,
            marginBottom: 24,
            border: "1.5px solid #23232a",
            boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            textAlign: "center",
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
              padding: "20px 20px 0 20px",
            }}
          >
            {/* Rotating Icon */}
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

            <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
              What can we help you with?
            </h4>
            <p style={{ fontSize: 14, color: "#bdbdbd", marginBottom: 18 }}>
              Whether you want help in customer handling or make changes in your
              existing Website, just give us a command.
            </p>

            {/* Typing Effect Box */}
            <div
              style={{
                width: "100%",
                background: "#101014",
                border: "1px solid #2f2f35",
                borderRadius: 10,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    flex: 1,
                    color: "#bdbdbd",
                    fontSize: 14,
                    fontFamily: "monospace",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <Typewriter
                    words={[
                      "Get a quote for a new project",
                      "Schedule a meeting with the team",
                      "Summarize the latest project updates",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </span>
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#a855f7",
                    fontSize: 20,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  ▶
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              {["Custom Site", "Fast & Secure", "Many More"].map(
                (text, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="btn btn-outline-light px-2 py-1"
                    style={{
                      background: "transparent",
                      color: "#bdbdbd",
                      fontWeight: 500,
                      fontSize: 13,
                      borderRadius: 7,
                      padding: "4px 14px",
                      border: "1px solid #23232a",
                    }}
                  >
                    {text}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Fade Overlay */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "70%",
              background:
                "linear-gradient(to bottom, rgba(17,17,20,0) 40%, #111114 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
