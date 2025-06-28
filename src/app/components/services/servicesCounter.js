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
    const intervals = statsData.map((stat, idx) => {
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          const increment = Math.max(1, Math.floor(stat.value / 400)); // Ultra slow
          updated[idx] =
            updated[idx] + increment >= stat.value
              ? 0
              : updated[idx] + increment;
          return updated;
        });
      }, 300); // Very slow interval
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className="d-flex justify-content-center align-items-center px-3 py-5"
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        marginTop: "60px",
      }}
    >
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          maxWidth: "1100px",
          width: "100%",
          gap: "2.5rem",
        }}
      >
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="text-center px-4 py-5"
            style={{
              background: "#111114",
              borderRadius: 16,
              minWidth: 240,
              minHeight: 150,
              boxShadow: "0 4px 25px rgba(0,0,0,0.5)",
              border: "1px solid #23232a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
              {counts[idx]}
              {stat.suffix}
            </h2>
            <p style={{ color: "#bdbdbd", marginTop: 8, fontSize: 15 }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
