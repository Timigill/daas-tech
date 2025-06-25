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
      className="d-flex flex-column  align-items-center text-center my-5 py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{ height: "auto" }}
    >
      {/* Header */}
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
        Our Values
      </motion.span>

      <motion.h1
        className="mt-"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "#ffffff",
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
        className="mt-3 text-white-50"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
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
        {/* Radial Gradient Circle Background */}
        <div
          style={{
            position: "absolute",
            top: "150%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          
            background: "radial-gradient(circle, #241142 0%, #0b0b0b 80%)",
            borderRadius: "50%",
            zIndex: 0,
            filter: "blur(60px)",
          }}
        ></div>

        {/* Cards Row */}
        <div className="container " style={{ zIndex: 1 }}>
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <motion.div
              className="col-12 col-md-6 col-lg-5"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={1.5}
              viewport={{ once: true }}
            >
              <div className="p-4 shadow rounded text-white"
                style={{ border: "1px solid #222", background: "linear-gradient(to top left, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}
              >
                <div className="d-flex gap-2 mb-2">
                  <PiLightbulbFill size={23} />
                  <h5
                    className="mb-0"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    Driving Innovation Forward
                  </h5>
                </div>
                <p
                  className="text-white-50 text-start"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
                >
                  We embrace cutting-edge solutions to create smarter, more efficient digital solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="col-12 col-md-6 col-lg-5"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={2}
              viewport={{ once: true }}
            >
              <div className="p-4 shadow rounded text-white h-100"
                style={{ border: "1px solid #222", background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}
              >
                <div className="d-flex gap-2 mb-2">
                  <PiHandshakeFill size={23} />
                  <h5
                    className="mb-0 text-start"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    Committed to Integrity & Trust
                  </h5>
                </div>
                <p
                  className="text-white-50 text-start"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
                >
                  Trust and transparency are at the core of everything we do for our clients.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="col-12 col-md-6 col-lg-5"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={2.5}
              viewport={{ once: true }}
            >
              <div className="p-4 shadow rounded text-white h-100"
                style={{ border: "1px solid #222", background: "linear-gradient(to bottom left, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}
              >
                <div className="d-flex gap-2 mb-2">
                  <PiRocketLaunchFill size={23} />
                  <h5
                    className="mb-0"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    Empowering Business Growth
                  </h5>
                </div>
                <p
                  className="text-white-50 text-start"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
                >
                  We help businesses scale faster with  efficiency, reducing time and unlocking new opportunities.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="col-12 col-md-6 col-lg-5"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={3}
              viewport={{ once: true }}
            >
              <div className="p-4 shadow rounded text-white h-100"
                style={{ border: "1px solid #222", background: "linear-gradient(to bottom right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}
              >
                <div className="d-flex gap-2 mb-2">
                  <FaUserGroup size={23} />
                  <h5
                    className="mb-0"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    Putting Customers First
                  </h5>
                </div>
                <p
                  className="text-white-50 text-start"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
                >
                  Your success is our priority — we build solutions that truly make an impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Values;
