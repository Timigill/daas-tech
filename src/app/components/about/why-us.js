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
          Why Us
        </motion.span>

        <motion.h1
          className=""
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={0.5}
          viewport={{ once: true }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          What Makes Us Stand Out in the Industry
        </motion.h1>

        <motion.p
          className="mt-3 text-white-50"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1}
          viewport={{ once: true }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            maxWidth: 580,
            margin: "0 auto",
          }}
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
            <div className="p-4 shadow rounded text-white h-100"
              style={{
                border: " 1px solid #222 " ,
              }}>
              <h5
                className="mb-4 text-white-50 text-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
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
                <div key={idx} className="d-flex align-items-start gap-2 mb-3 text-white-50">
                  <RxCross2 size={20} style={{ flexShrink: 0 }} />
                  <p
                    className="mb-0 text-start"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
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
              className="p-4 shadow rounded text-white h-100"
              style={{
                background: "radial-gradient(circle at top center, #2e0f54 0%, #0b0b0b 40%)",
                border: " 1px solid #222 " ,
              }}
            >
              <h5
                className="mb-4 text-white text-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
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
                <div key={idx} className="d-flex align-items-start gap-2 mb-3 text-white">
                  <FaCheck size={20} style={{ flexShrink: 0 }} />
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
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
