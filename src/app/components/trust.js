'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0, duration: 0.4, ease: "easeOut" }
  },
};

function Trust() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center trust-section mt-5"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{overflowX:"hidden" , width:"100vw" }}
    >
      <motion.p
        className="trust-text text-white-50"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem" }}
      >
        Businesses trust us 
      </motion.p>

      <motion.div
        className="review-slider"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="slider-fade-left"></div>
        <div className="slider-fade-right"></div>
        <div className="slider-track">
          <div className="slider-content">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <a href="https://g.co/kgs/gLLDsjr" target='_blank'><Image src="/google-reviews.png" alt="Review" className="slider-image" width={80} height={80} /></a>
                <a href="https://www.linkedin.com/company/daas-tech-innovations/" target='_blank'><Image src="/Linkedin.png" alt="Review" className="slider-image" width={80} height={80} /></a>
                <a href="https://www.facebook.com/61574573447669" target='_blank'><Image src="/Facebook1.png" alt="Review" className="slider-image" width={80} height={80} /></a>
                <a href="https://www.trustpilot.com/review/daastech.info" target='_blank'><Image src="/Trustpilot.png" alt="Review" className="slider-image" width={80} height={80} /></a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Trust;
