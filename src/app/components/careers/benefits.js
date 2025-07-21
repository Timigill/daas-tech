'use client';
import React from 'react';
import { motion } from 'framer-motion';
import "bootstrap-icons/font/bootstrap-icons.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

function Benefits() {
  const benefitsList = [
    { icon: "bi-people", title: "Family/Parental Leave" },
    { icon: "bi-calendar", title: "Generous Vacation" },
    { icon: "bi-house-door", title: "Remote Work" },
    { icon: "bi-heart-pulse", title: "Medical, Life Insurance" },
    { icon: "bi-phone", title: "Technology Allowance" },
    { icon: "bi-clock-history", title: "Flexible Work Schedule" },
    { icon: "bi-piggy-bank", title: "Retirement Plan" },
    { icon: "bi-building", title: "Company Equity" },
  ];

  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="mt-1"
        variants={fadeInUp}
        custom={0.2}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "2.5rem",
          lineHeight: 1.1,
         color: "var(--foreground)",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        Enjoy These Perks with Us
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-3 "
        variants={fadeInUp}
        custom={0.4}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          maxWidth: 680,
          margin: "0 auto",
          color: "var(--muted-text)",
        }}
      >
        DaaS Tech is committed to enhancing the happiness, health, and success of our employees. We proudly offer a comprehensive benefits package designed to support our team members’ well-being, both at work and in their personal lives.
      </motion.p>

      {/* Benefits Grid */}
      <div className="container mt-5">
        <div className="row g-3 justify-content-center">
          {benefitsList.map((item, index) => (
            <motion.div
              className="col-6 col-md-4 col-lg-3"
              key={index}
              variants={fadeInUp}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="d-flex flex-column align-items-center text-center">
                <i
                  className={`bi ${item.icon}`}
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "10px",
                    color: "#a259ff"
                  }}
                  aria-label={item.title}
                ></i>
                <h5
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    lineHeight: 1.3,
                     color: "var(--foreground)",
                    maxWidth: 160,
                  }}
                >
                  {item.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Benefits;
