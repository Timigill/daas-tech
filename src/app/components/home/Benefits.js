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
    title: "Stronger Online Presence",
    description:
      "A website makes your business visible 24/7, allowing potential customers to find and connect with you anytime.",
  },
  {
    icon: "🎯",
    title: "Better Customer Engagement",
    description:
      "Interactive features, clear navigation, and engaging content improve user experience and customer satisfaction.",
  },
  {
    icon: "🕒",
    title: "24/7 Availability",
    description:
      "Your website works around the clock, providing product/service information and generating leads even outside business hours.",
  },
  {
    icon: "📉",
    title: "Cost-Effective Marketing",
    description:
      "Compared to traditional advertising, websites serve as a powerful and affordable marketing tool with global reach.",
  },
  {
    icon: "📊",
    title: "Data & Insights",
    description:
      "Track visitor behavior, sales, and performance metrics to understand your audience and make smarter business decisions.",
  },
  {
    icon: "📈",
    title: "Scalability & Growth",
    description:
      "A well-structured website grows with your business, supporting e-commerce, new services, and digital integrations seamlessly",
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



