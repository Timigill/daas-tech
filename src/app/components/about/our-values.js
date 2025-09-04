
"use client";
import React from "react";
import {
  PiLightbulbFill,
  PiRocketLaunchFill,
  PiHandshakeFill,
} from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { motion } from "framer-motion";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Values data
const valuesData = [
  {
    icon: <PiLightbulbFill size={23} />,
    title: "Driving Innovation Forward",
    description:
      "We embrace cutting-edge solutions to create smarter, more efficient digital solutions.",
    gradient: "linear-gradient(to bottom right,  var(--grad3), var(--grad4))",
  },
  {
    icon: <PiHandshakeFill size={23} />,
    title: "Committed to Integrity & Trust",
    description:
      "Trust and transparency are at the core of everything we do for our clients.",
     gradient: "linear-gradient(to bottom left,  var(--grad3), var(--grad4))",
  },
  {
    icon: <PiRocketLaunchFill size={23} />,
    title: "Empowering Business Growth",
    description:
      "We help businesses scale faster with efficiency, reducing time and unlocking new opportunities.",
     gradient: "linear-gradient(to top right,  var(--grad3), var(--grad4))",
  },
  {
    icon: <FaUserGroup size={23} />,
    title: "Putting Customers First",
    description:
      "Your success is our priority — we build solutions that truly make an impact.",
     gradient: "linear-gradient(to top left, var(--grad3), var(--grad4))",
    }
];


function Values() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center my-5 py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.span
        variants={fadeInUp}
        custom={0.6}
        whileHover={{ scale: 1.1 }}
        className="btn px-3 py-2"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 500,
          fontSize: "12px",
          marginBottom: "12px",
          width: "fit-content",
        }}
      >
        Our Values
      </motion.span>

      <motion.h2
        className="mt-3"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          // fontSize: "2.5rem",
          lineHeight: 1.1,
          color: "var(--foreground)",
          maxWidth: 700,
          margin: "0 auto",
        }}
        variants={fadeInUp}
        custom={0.5}
        viewport={{ once: true }}
      >
        The Values Behind DaaS Tech
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
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
      >
        Our values shape everything we do at DaaS. From innovation to integrity,
        we’re committed to building Digital solutions that empower businesses and drive real impact.
      </motion.p>

      {/* Cards Section with Background Glow */}
      <div className="d-flex justify-content-center py-5 position-relative w-100">
        {/* Radial Glow Background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            background: "linear-gradient(to bottom right,var(--grad1), var(--grad2))",
            borderRadius: "50%",
            filter: "blur(60px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        ></div>

        {/* Card Grid */}
        <div className="container" style={{ zIndex: 1 }}>
          <div className="row g-4 justify-content-center">
            {valuesData.map((item, index) => (
              <motion.div
                key={index}
                className="col-12 col-md-6 col-lg-5"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={index + 1.5}
                viewport={{ once: true }}
              >
                <div
                  className="p-4 shadow rounded  h-100"
                  style={{
                    border: "1px solid #222",
                       background: item.gradient,
                    // background: "linear-gradient(to bottom right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
                  }}
                >
                  <div className="d-flex gap-2 mb-2 align-items-center"
                  style={{ color: "var(--foreground)",}}
                  >
                    {item.icon}
                    <h5
                      className="mb-0 text-start"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "15px",
                          color: "var(--foreground)",
                      }}
                    >
                      {item.title}
                    </h5>
                  </div>
                  <p
                    className="text-start"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                      maxWidth: 460,
                    color: "var(--muted-text)",
                    }}
                  >
                    {item.description}
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
