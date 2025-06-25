'use client'
import React from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

function Team() {
  return (
    <div className="d-flex flex-column  align-items-center text-center my-5 py-5 px-3">
      <div>
        {/* Tagline */}
        <motion.span
          className="badge px-3 py-2 mb-2"
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
            background: "rgba(139,92,246,0.15)",
          }}
        >
          Our Team
        </motion.span>

        {/* Main Heading */}
        <motion.h1
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
          Meet the Minds Behind DaaS
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-3 text-white-50"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1}
          viewport={{ once: true }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 550,
            margin: "0 auto",
          }}
        >
          We bring together technology and strategy to create smarter Digital solutions.
        </motion.p>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center g-3">
          {/* Column 1 */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={2}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded  text-white"
              style={{
                border: "1px solid #222",
              }}>
              <img src="/About-Us/alex.png" alt="" style={{ width: "280px", height: "280px" }} />
              <div className="d-flex mt-2 justify-content-between">
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  Taimoor Gill
                </h5>
                <LiaLinkedin size={23} className='text-white-50' />
              </div>
              <p
                className="text-white-50 text-start mt-2"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}
              >
                Founder & CEO
              </p>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={2.5}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded  text-white"
              style={{
                border: "1px solid #222",
              }}>
              <img src="/About-Us/Sophia.png" alt="" style={{ width: "280px", height: "280px" }} />
              <div className="d-flex mt-2 justify-content-between">
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  Sarah Khan
                </h5>
                <LiaLinkedin size={23} className='text-white-50' />
              </div>
              <p
                className="text-white-50 text-start mt-2"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}>
                Head of Web Development
              </p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="col-md-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={3}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded  text-white"
              style={{
                border: "1px solid #222",
              }}>
              <img src="/About-Us/Riyan.png" alt="" style={{ width: "280px", height: "280px" }} />
              <div className="d-flex mt-2 justify-content-between">
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                 Abdullah Sajjad
                </h5>
                <LiaLinkedin size={23} className='text-white-50' />
              </div>
              <p
                className="text-white-50 text-start mt-2"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}>
                Marketing Specialist
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Team
