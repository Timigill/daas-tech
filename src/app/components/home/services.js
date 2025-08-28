"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Services() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3 pt-0 services-section"
    >
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100 services-wrapper">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="services-left"
        >
          <a href="#" className="btn mb-3 px-2 py-1 services-badge get-started-btn">
            Custom Websites
          </a>

          <h3 className="services-title">Build your own Custom Website</h3>

          <p className="services-desc">
            From showcasing services to selling products and building portfolios,
            we create websites that are fast, responsive, secure, and SEO-ready,
            helping your business stand out and grow online.
          </p>

          {/* CTA Buttons */}
          <div className="cta-wrapper d-flex flex-nowrap gap-3 mt-3 justify-content-between">
            {[
              { text: "Get a Quote", href: "/quote" },
              { text: "Scheduling", href: "/book-call" },
              { text: "Get Started", href: "/contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`btn px-2 py-1 services-btn ${
                  item.text === "Get Started" ? "get-started-btn" : ""
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column (Animated Card) */}
        <motion.div
          className="animated-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="animated-card-inner">
            {/* Rotating Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="rotating-icon"
            >
              <Image src="/rotation.png" alt="Rotating Logo" width={60} height={60} />
            </motion.div>

            <h4 className="animated-card-title">What can we help you with?</h4>
            <p className="animated-card-desc">
              Whether you want help in customer handling or make changes in your
              existing Website, just give us a command.
            </p>

            {/* Typing Effect Box */}
            <div className="typing-box">
              <div className="typing-line">
                <span className="typing-text">
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
                <button className="typing-btn">▶</button>
              </div>
            </div>
          </div>
          <div className="fade-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
