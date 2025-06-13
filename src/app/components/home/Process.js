'use client';
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

const Process = () => {
  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        padding: "48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <motion.span
        className="badge mb-3"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{
          background: "rgba(139,92,246,0.15)",
          color: "#8b5cf6",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 1,
          padding: "8px 18px",
          borderRadius: 20,
        }}
      >
        Our Process
      </motion.span>

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          lineHeight: 1.15,
          marginBottom: 16,
          maxWidth: 800,
        }}
      >
        Our Simple, Smart, and Scalable Process
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
        style={{
          fontSize: 20,
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 40px auto",
        }}
      >
        We design, develop, and launch websites that help you reach more customers and grow your business with ease.
      </motion.p>

      <div style={{ background: "#000", padding: "60px 20px", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Row 1 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
            {[step1Data, step2Data].map((step, idx) => (
              <motion.div
                key={idx}
                style={cardStyle}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,0.25)" }}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={idx + 1}
                viewport={{ once: true }}
              >
                <div style={stepLabel}>{step.label}</div>
                <h3 style={cardTitle}>{step.title}</h3>
                <p style={cardText}>{step.description}</p>
                <div style={boxContent}>
                  <p style={{ fontSize: 14, color: "#ccc" }}>{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {/* Step 3 */}
            <motion.div
              style={cardStyle}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,0.25)" }}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={3}
              viewport={{ once: true }}
            >
              <div style={stepLabel}>Step 3</div>
              <h3 style={cardTitle}>Seamless Integration</h3>
              <p style={cardText}>
                We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.
              </p>
              <div style={{
                marginTop: 20,
                border: "1px solid #222",
                borderRadius: 10,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 40,
                backgroundColor: "#181818"
              }}>
                <div style={{ textAlign: "center" }}>
                  <img src="/left-icon.png" alt="Our solution" style={{ height: 40 }} />
                  <p style={{ color: "#aaa", fontSize: 14 }}>Our solution</p>
                </div>
                <div style={{ height: 2, width: 40, background: "linear-gradient(to right, #8b5cf6, #ec4899)" }}></div>
                <div style={{ textAlign: "center" }}>
                  <img src="/right-icon.png" alt="Your stack" style={{ height: 40 }} />
                  <p style={{ color: "#aaa", fontSize: 14 }}>Your stack</p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              style={cardStyle}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,0.25)" }}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={4}
              viewport={{ once: true }}
            >
              <div style={stepLabel}>Step 4</div>
              <h3 style={cardTitle}>Continuous Optimization</h3>
              <p style={cardText}>
                We refine performance, analyze insights, and enhance automation for long-term growth.
              </p>
              <div style={optimizationBox}>
                {[
                  { title: "Chatbot system", note: "Efficiency will increase by 20%", icon: "⟳" },
                  { title: "Workflow system", note: "Update available..", icon: "⬆" },
                  { title: "Sales system", note: "Up to date", icon: "✔" }
                ].map((item, index) => (
                  <div key={index} style={optimizationItem}>
                    <div>
                      <strong style={{ color: "#fff" }}>{item.title}</strong>
                      <div style={{ fontSize: 12, color: "#aaa" }}>{item.note}</div>
                    </div>
                    <span style={{ color: "#8b5cf6", fontSize: 20 }}>{item.icon}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Data Arrays
const step1Data = {
  label: "Step 1",
  title: "Discovery & Planning",
  description: "We collaborate to understand your needs and define a roadmap for AI integration.",
  details: "✓ Requirement analysis\n✓ Goal setting\n✓ Success metrics"
};

const step2Data = {
  label: "Step 2",
  title: "Custom AI Development",
  description: "We build tailored AI models optimized for your business operations.",
  details: "🤖 Custom ML models\n🔧 Model training\n🧪 QA & validation"
};

// Style constants
const cardStyle = {
  background: "#111",
  borderRadius: 12,
  padding: 24,
  flex: 1,
  minWidth: 280,
  minHeight: 300,
  textAlign: "left",
  transition: "all 0.3s ease",
};

const stepLabel = {
  marginBottom: 12,
  fontWeight: 600,
  color: "#aaa",
};

const cardTitle = {
  fontSize: 20,
  marginBottom: 12,
  color: "#fff",
};

const cardText = {
  fontSize: 16,
  color: "#bbb",
  marginBottom: 16,
};

const boxContent = {
  backgroundColor: "#181818",
  padding: 16,
  borderRadius: 8,
  border: "1px solid #222",
};

const optimizationBox = {
  backgroundColor: "#181818",
  borderRadius: 10,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  border: "1px solid #222",
  marginTop: 16,
};

const optimizationItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  background: "#1f1f1f",
  borderRadius: 6,
};

export default Process;
