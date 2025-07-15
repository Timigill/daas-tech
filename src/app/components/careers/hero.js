'use client'
import React from 'react'
import { MdOutlineArrowOutward, MdOutlineArrowForward } from "react-icons/md";
import Trust from '../trust';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

const handleScrollToJobs = () => {
  const target = document.getElementById("jobs-listening");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};



function Hero() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center vh-50 text-center mt-5 p-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      <div className='py-4'>
        {/* Tagline */}
        <motion.span
          className="badge px-3 py-2"
          variants={fadeInUp}
          custom={0.2}
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
          Careers
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          className="mt-1"
          variants={fadeInUp}
          custom={0.4}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          Help us transform the hiring Process Join
          our team of innovators!
        </motion.h1>

        {/* Button */}
        <motion.button
          className="btn go-back-btn mt-3"
          type="button"
          variants={fadeInUp}
          custom={0.6}
          onClick={handleScrollToJobs}
        >
          <span className="ps-1 go-back-content">
            View Jobs Opening
            <MdOutlineArrowOutward className="go-back-icon default-icon" size={20} />
            <MdOutlineArrowForward className="go-back-icon hover-icon" size={20} />
          </span>
        </motion.button>

      </div>
      <Trust />
    </motion.div>
  )
}

export default Hero
