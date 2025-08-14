"use client";
import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

function Why() {
  return (
    <motion.div
      className="d-flex flex-column  align-items-center text-center mt-5 py-5 my-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <div>
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
            marginBottom: " 12px",
            width: 'fit-content'

          }}
        >
          Why Us
        </motion.span>

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
          What Makes Us Stand Out in the Industry
        </motion.h2>
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
          Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition.
        </motion.p>

      </div>

      {/* Comparison Section */}
      <div className="container my-4">
        <div className="row justify-content-center g-5">
          {/* Manual Work */}
          <motion.div
            className="col-md-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={1.5}
            viewport={{ once: true }}
          >
            <div className="p-4 shadow rounded  h-100"
              style={{
                border: " 1px solid var(--border-color) ",
              }}>
              <h5
                className="mb-4 text-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                   color: "var(--foreground)",
                }}
              >
                Other Digital Solutions
              </h5>

              {[
                "Generic templates & designs",
                "Limited customizability",
                "Poor brand identity",
                "Inconsistent quality",
                "No post-delivery support",
                "One-size-fits-all solutions",

              ].map((text, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 mb-3 ">
                  <RxCross2 size={20} style={{ flexShrink: 0,  color: "var(--muted-text)", }} />
                  <p
                    className="mb-0 text-start"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                       color: "var(--muted-text)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={2}
            viewport={{ once: true }}
          >
            <div
              className="p-4 shadow rounded  h-100"
              style={{
                background: "radial-gradient(circle at top center, var(--grad4) 0%, var(--grad3) 40%)",
                border: " 1px solid var(--border-color) ",
              }}
            >
              <h5
                className="mb-4  text-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                DaaS Digital Solutions
              </h5>

              {[
                "Tailored design & branding",
                "Professional & creative solutions",
                "Strategic social media presence",
                "Custom-built websites & flyers",
                "Dedicated client support",
                "Consistency & attention to detail",

              ].map((text, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 mb-3 ">

                  <FaCheck size={20} style={{ flexShrink: 0, color: "var(--foreground)",
                }}  />
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                      color:'var(--foreground)',
                      textAlign:"start",

                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default Why;
