'use client';
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const benefits = [
  {
    icon: "⚡",
    title: "Increased Productivity",
    description:
      "Gain actionable insights with digital analytics to improve decision-making and strategy.",
  },
  {
    icon: "🎯",
    title: "Better Customer Experience",
    description:
      "Personalized digital interactions improve response times, customer engagement, and overall satisfaction.",
  },
  {
    icon: "🕒",
    title: "24/7 Availability",
    description:
      "Digital systems operate around the clock, ensuring seamless support and execution without downtime.",
  },
  {
    icon: "📉",
    title: "Cost Reduction",
    description:
      "Digital automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
  },
  {
    icon: "📊",
    title: "Data-Driven Insights",
    description:
      "Leverage digital tools to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
  },
  {
    icon: "📈",
    title: "Scalability & Growth",
    description:
      "Digital solutions adapt to your business needs, allowing you to scale efficiently without increasing workload or costs.",
  },
];

const Benefits = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <motion.span
          className="badge mb-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: 1,
            padding: "8px 18px",
            borderRadius: 20,
          }}
        >
          Benefits
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}
        >
          The Key Benefits of AI for Your Business Growth
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          style={{
            fontSize: 18,
            color: "var(--muted-text)",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Discover how AI automation enhances efficiency, reduces costs, and
          drives business growth with smarter, faster processes.
        </motion.p>
      </div>

      {/* Benefits Grid */}
      <div className="benefits-grid">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            className="benefit-card"
            custom={i + 2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 24px rgba(139,92,246,0.25)",
            }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="bottom-line"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;



