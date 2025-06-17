'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {useMotionValue, useTransform, animate } from 'framer-motion';
import { FaMicrochip, FaCogs, FaTachometerAlt, FaHandPaper, FaRedo } from "react-icons/fa";
import { FiFile, FiSearch, FiLayers } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

const Process = () => {
  const checklist = [
    { label: "System check", icon: <FaMicrochip size={14} /> },
    { label: "Process check", icon: <FaCogs size={14} /> },
    { label: "Speed check", icon: <FaTachometerAlt size={14} /> },
    { label: "Manual work", icon: <FaHandPaper size={14} /> },
    { label: "Repetitive task", icon: <FaRedo size={14} /> },
  ];
   const code = `
return "No action taken."

def get_status(self):
    return f"Status: {self.status}"

class AutomationTrigger:
    def __init__(self, threshold):
        self.threshold = threshold
  `.trim();

  const y = useMotionValue(0);

  React.useEffect(() => {
    const animation = animate(y, -150, {
      duration: 6,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    });
    return animation.stop;
  }, [y]);

  const thumbHeight = 40;
  const scrollRange = 150;
  const thumbY = useTransform(y, [-scrollRange, 0], [0, scrollRange - thumbHeight]);


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
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24,paddingBottom: 40 }}>
     <motion.div
      style={styles.card}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 32px rgba(139,92,246,0.25)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Step Label */}
      <div
        style={{
          padding: "4px 10px",
          fontSize: 12,
          color: "#fff",
          background: "#1e1e23",
          border: "1px solid #3b3b44",
          borderRadius: 8,
          width: "fit-content",
          marginBottom: 12,
        }}
      >
        Step 1
      </div>

      {/* Title */}
      <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 10 }}>
        Smart Analyzing
      </h3>

      {/* Description */}
      <p style={{ fontSize: 14, color: "#c4c4c4", marginBottom: 20 }}>
        We assess your needs and identify AI solutions to streamline workflows and improve efficiency.
      </p>

      {/* Inner Card with Circle + Checklist */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 25,
          padding: 8,
          border: "1px solid #2b2b30",
          borderRadius: 12,
          backgroundColor: "#131316",
        }}
      >
        {/* Left: Rotating Circle */}
        <div style={{ display: "flex", flexDirection: "column", 
          alignItems: "center" , gap: 16,
          padding: 16,
          border: "1px solid #2b2b30",
          borderRadius: 12, }}>
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              border: "2px solid #333",
              background: "radial-gradient(circle at center, #151515 60%, #101010 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Radar Sweep */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: `conic-gradient(
                  from 0deg,
                  rgba(139, 92, 246, 0.6) 0deg,
                  rgba(139, 92, 246, 0.2) 30deg,
                  transparent 60deg,
                  transparent 360deg
                )`,
                transformOrigin: "center",
              }}
            />
          </div>
          {/* Caption below circle */}
          <p
            style={{
              fontSize: 12,
              color: "#999",
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Analyzing current workflow...
          </p>
        </div>
                {/* Right: Checklist */}
        <div
        style={{
          display: "flex", flexDirection: "column", 
          alignItems: "center" ,
          padding: 16,
          border: "1px solid #2b2b30",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {checklist.map(({ label, icon }, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid #2c2c30",
                background: "#16161a",
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 13,
                color: "#e0e0e0",
                cursor: "default",
              }}
            >
              {icon}
              {label}
            </div>
          ))}
        </div>
      </div>
        </div>

    </motion.div>
     <div style={styles.card}>
      <span style={styles.stepLabel}>Step 2</span>
      <h2 style={styles.title}>AI Development</h2>
      <p style={styles.text}>
        Our team builds intelligent automation systems tailored to your business processes.
      </p>

      <div style={styles.editorWindow}>
        <div style={styles.titleBar}>
          <div style={styles.navControls}>
            <span style={{ ...styles.dot, background: '#ff5f56' }} />
            <span style={{ ...styles.dot, background: '#ffbd2e' }} />
            <span style={{ ...styles.dot, background: '#27c93f' }} />
          </div>
          <div style={{ flex: 1 }} />
          <div style={styles.winControls}>
            <span>🗖</span>
            <span>🗕</span>
            <span>✕</span>
          </div>
        </div>

        <div style={styles.editorBody}>
          <div style={styles.sidebar}>
            <FiFile size={16} color="#aaa" />
            <FiSearch size={16} color="#aaa" />
            <FiLayers size={16} color="#aaa" />
          </div>

          <div style={styles.codeArea}>
            <motion.pre style={{ ...styles.code, y }}>
              {code}
            </motion.pre>
            <motion.div style={{ ...styles.scrollThumb, y: thumbY }} />
          </div>
        </div>
      </div>
    </div>
         </div>
          {/* Row 2 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {/* Step 3 */}
<motion.div
      style={cardStyle}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(139,92,246,0.25)' }}
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

      <div style={container}>
        <div style={item}>
          <Image src="/rotation.png" alt="Our solution" height={40} width={40} style={imageStyle} />
          <p style={caption}>Our solution</p>
        </div>

        <div style={linesWrapper}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              style={{
                ...lineStyle,
                top: `${i * 10 + 10}px`,
                animationDelay: `${i * 0.2}s`,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          ))}
        </div>

        <div style={item}>
          <Image src="/yourstack.png" alt="Your stack" height={40} width={40} style={imageStyle} />
          <p style={caption}>Your stack</p>
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
const styles = {
  card: {
    background: "#111",
  borderRadius: 12,
  padding: 24,
  flex: 1,
  minWidth: 280,
  minHeight: 300,
  textAlign: "left",
  transition: "all 0.3s ease",
    fontFamily: 'system-ui, sans-serif',
  },
  stepLabel: {
    fontSize: '12px',
    background: '#333',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  title: {
    margin: '8px 0 4px',
    fontSize: '20px',
  },
  text: {
    margin: 0,
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20
  },
  editorWindow: {
    background: '#222',
    border: '1px solid #333',
    borderRadius: '8px',
    marginTop: '16px',
    overflow: 'hidden',
  },
  titleBar: {
    background: '#2a2a2a',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 8px',
  },
  navControls: {
    display: 'flex',
    gap: '6px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  winControls: {
    display: 'flex',
    gap: '8px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  editorBody: {
    display: 'flex',
  },
  sidebar: {
    background: '#1f1f1f',
    width: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 0',
    borderRight: '1px solid #333',
  },
  codeArea: {
    position: 'relative',
    flexGrow: 1,
    height: '150px',
    background: '#1e1e1e',
    overflow: 'hidden',
  },
  code: {
    margin: 0,
    padding: '12px',
    fontFamily: 'monospace',
    fontSize: '13px',
    lineHeight: 1.5,
    color: '#d4d4d4',
    whiteSpace: 'pre',
  },
  scrollThumb: {
    position: 'absolute',
    right: '4px',
    width: '4px',
    height: '40px',
    background: '#555',
    borderRadius: '2px',
  },
};



const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  backgroundColor: "#181818",
  borderRadius: 10,
  padding: 12,
  gap: 8,
  border: "1px solid #222",
  marginTop: 16,
};

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const imageStyle = {
  height: 40,
  width: 40,
  objectFit: 'cover',
};

const caption = {
  fontSize: 14,
  color: '#aaa',
  marginTop: 6,
};

const linesWrapper = {
  position: 'absolute',
  left: 'calc(50% - 70px)',
  width: 140,
  height: '100%',
};

const lineStyle = {
  position: 'absolute',
  height: 2,
  borderRadius: 2,
  background: 'linear-gradient(to right,rgb(42, 35, 59),rgb(148, 72, 236))',
};

export default Process;
