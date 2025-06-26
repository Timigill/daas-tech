'use client';
import React from 'react'
import { AiFillSignal } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaBolt } from "react-icons/fa6";
import { motion } from "framer-motion";
import "@/app/globals.css"

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
    >
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
        Who We Are
      </motion.span>
      <motion.h1
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
        Who We Are
      </motion.h1>
      <motion.p
        className="mt-3 text-white-50"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
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
          {/* Column 1 */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={1.5}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded text-white"
              style={{ background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}>
              <div className="d-flex gap-2 mb-2" style={{ height: 'auto' }}>
                <AiFillSignal size={23} style={{ color: "white" }} />
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  150+ Businesses
                </h5>
              </div>
              <p
                className="text-white-50 text-start ps-4"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  maxWidth: 400,
                }}
              >
                Companies have streamlined their workflows with DaaS Digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={2}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded text-white"
              style={{ background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}>
              <div className="d-flex gap-2 mb-2">
                <GoClockFill size={23} style={{ color: "white" }} />
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  1M+ Hours
                </h5>
              </div>
              <p
                className="text-white-50  text-start ps-3"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  maxWidth: 300,
                }}>
                Reducing time and boosting productivity through Digital Solutions.
              </p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={2.5}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded text-white"
              style={{ background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))" }}>
              <div className="d-flex gap-2 mb-2">
                <FaBolt size={23} style={{ color: "white", }} />
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  95% Faster
                </h5>
              </div>
              <p
                className="text-white-50 text-start ps-3"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  maxWidth: 300,
                }}>
                Clients see improved efficiency within the first two to three months.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Who
