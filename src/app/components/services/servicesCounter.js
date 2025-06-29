"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { label: "Awards & Honours", value: 120, suffix: "+" },
  { label: "Client Satisfied", value: 98, suffix: "%" },
  { label: "Realized Projects", value: 14000, suffix: "K" },
  { label: "Conversion Increased", value: 140, suffix: "%" },
];

const AnimatedStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    // Animation duration in ms
    const duration = 2000; // total animation time (faster)
    const steps = 25; // number of animation steps (faster)
    const intervalTime = duration / steps;

    let currentStep = 0;
    const increments = statsData.map(stat => stat.value / steps);

    const interval = setInterval(() => {
      currentStep++;
      setCounts(prev =>
        prev.map((count, idx) =>
          currentStep >= steps
            ? statsData[idx].value
            : Math.round(count + increments[idx])
        )
      );
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <><section
      className="d-flex justify-content-center   flex-column align-items-center px-3 pb-5"
      style={{
       
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        marginTop: "40px",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
       <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-4"
        style={{
          // fontSize:"1.2 rem !important",
          fontWeight: 700,
          lineHeight: 1.15,
          // marginBottom: 16,
          maxWidth: 700,
        }}
      >
        Scaling Innovation — Stat by Stat
      </motion.h3>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          maxWidth: "1000px",
          width: "100%",
          gap: "2.5rem",
        }}
      >
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center px-2 py-3"
            style={{
              background: "linear-gradient(to top left, rgba(166, 122, 255, 0.2), rgba(0, 0, 0, 0.5))",
              borderRadius: 12,
              minWidth: 180,
              width: 180,
              boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
              border: "1px solid #23232a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 4 }}>
              {counts[idx]}
              {stat.suffix}
            </h2>
            <p style={{ color: "#bdbdbd", fontSize: "0.8rem", margin: 0 }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section></>
  );
};

export default AnimatedStats;
