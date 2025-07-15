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

function Who() {
  return (
    <motion.div
      className='d-flex flex-column align-items-center text-center my-5 py-5 px-3'
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <motion.span
        className="badge px-3 py-2"
        style={{
          padding: "4px 10px",
          fontSize: 12,
          color: "var(--foreground)",
          border: "1px solid var(--foreground)",
          borderRadius: 8,
          fontWeight: 500,
          marginBottom: 12,
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        Who We Are
      </motion.span>

      <motion.h1
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
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
      </motion.h1>

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

      <div className="d-flex justify-content-center my-4">
        <div className="row w-100 justify-content-center g-5">
          {/* Cards */}
          {[
            {
              icon: <AiFillSignal size={23} />,
              title: "150+ Businesses",
              desc: "Companies have streamlined their workflows with DaaS Digital solutions.",
            },
            {
              icon: <GoClockFill size={23} />,
              title: "1M+ Hours",
              desc: "Reducing time and boosting productivity through Digital Solutions.",
            },
            {
              icon: <FaBolt size={23} />,
              title: "95% Faster",
              desc: "Clients see improved efficiency within the first two to three months.",
            },
          ].map((card, i) => (
            <motion.div
              className="col-md-3"
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={1.5 + i * 0.5}
              viewport={{ once: true }}
            >
              <div
                className="p-3 shadow rounded"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--foreground)",
                }}
              >
                <div className="d-flex gap-2 mb-2 align-items-center">
                  <span style={{ color: "var(--foreground)" }}>{card.icon}</span>
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
                  className="text-start ps-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    maxWidth: 400,
                    color: "var(--muted-text)",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Who;
