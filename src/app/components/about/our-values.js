
"use client";
import React from 'react';
import { PiLightbulbFill, PiRocketLaunchFill, PiHandshakeFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

function Values() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center my-5 py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Header */}
      <motion.span
        className="badge px-3 py-2"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{
          background: "transparent",
          fontSize: 12,
          color: "var(--foreground)",
          border: "1px solid var(--foreground)",
          borderRadius: 8,
          fontWeight: 500,
          marginBottom: 12,
        }}
      >
        Our Values
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
        The Values Behind DaaS Tech
      </motion.h1>

      <motion.p
        className="mt-3"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          color: "var(--muted-text)",
          maxWidth: 620,
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
      >
        Our values shape everything we do at DaaS. From innovation to integrity,
        we’re committed to building Digital solutions that empower businesses and drive real impact.
      </motion.p>

      <div className="d-flex justify-content-center py-5 position-relative">
        {/* Radial Background */}
        <div
          style={{
            position: "absolute",
            top: "150%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "var(--cicleGrad)",
            borderRadius: "50%",
            zIndex: 0,
            filter: "blur(60px)",
          }}
        ></div>

        {/* Cards Container */}
        <div className="container" style={{ zIndex: 1 }}>
          <div className="row g-4 justify-content-center">

            {/* Common Card JSX */}
            {[
              {
                icon: <PiLightbulbFill size={23} />,
                title: "Driving Innovation Forward",
                desc: "We embrace cutting-edge solutions to create smarter, more efficient digital solutions."
              },
              {
                icon: <PiHandshakeFill size={23} />,
                title: "Committed to Integrity & Trust",
                desc: "Trust and transparency are at the core of everything we do for our clients."
              },
              {
                icon: <PiRocketLaunchFill size={23} />,
                title: "Empowering Business Growth",
                desc: "We help businesses scale faster with efficiency, reducing time and unlocking new opportunities."
              },
              {
                icon: <FaUserGroup size={23} />,
                title: "Putting Customers First",
                desc: "Your success is our priority — we build solutions that truly make an impact."
              }
            ].map((card, i) => (
              <motion.div
                className="col-12 col-md-6 col-lg-5"
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={1.5 + i * 0.5}
                viewport={{ once: true }}
              >
                <div
                  className="p-4 shadow rounded h-100"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    color: "var(--foreground)"
                  }}
                >
                  <div className="d-flex gap-2 mb-2 align-items-center">
                    {card.icon}
                    <h5 className="mb-0" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                      {card.title}
                    </h5>
                  </div>
                  <p
                    className="text-start"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                      color: "var(--muted-text)",
                      maxWidth: 460
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Values;
