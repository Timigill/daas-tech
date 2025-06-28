"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{
        padding: "48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>
        {`
          @keyframes scrollTasks {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          .task-scroll-wrapper {
            height: 190px;
            overflow: hidden;
            position: relative;
          }

          .task-scroll {
            display: flex;
            flex-direction: column;
            gap: 10px;
            animation: scrollTasks 10s linear infinite;
          }

          .task-scroll-wrapper:hover .task-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Badge */}
      <motion.span
        className="badge mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
        Our Services
      </motion.span>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: 16,
          maxWidth: 700,
        }}
      >
        Web Solutions That Take Your Business Online
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: 15,
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 40px auto",
        }}
      >
        We design, develop, and launch websites that help you reach more
        customers and grow your business with ease.
      </motion.p>

      {/* Main Content */}
      <div
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Animated Task Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            marginTop: "20px",
            position: "relative",
            background: "#111114",
            borderRadius: 18,
            width: "100%",
            maxWidth: 400,
            height: 320,
            marginBottom: 24,
            border: "1.5px solid #23232a",
            boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "120px",
          }}
        >
          <div
            style={{
              width: "92%",
              height: "82%",
              borderRadius: 12,
              background: "rgba(24,24,27,0.85)",
              border: "1px solid #23232a",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
              padding: "18px 18px 0 18px",
              color: "#fff",
              fontSize: 15,
              fontWeight: 500,
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <span
                style={{
                  background: "#23232a",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 7,
                  padding: "4px 14px",
                }}
              >
                All Tasks
              </span>
              <span
                style={{
                  background: "transparent",
                  color: "#bdbdbd",
                  fontWeight: 500,
                  fontSize: 13,
                  borderRadius: 7,
                  padding: "4px 14px",
                  border: "1px solid #23232a",
                }}
              >
                Waiting for approval
              </span>
            </div>

            <div className="task-scroll-wrapper">
              <div className="task-scroll">
                {[
                  {
                    title: "Payroll management",
                    time: "Due on 2nd July",
                    icon: "⏰",
                  },
                  {
                    title: "Employee Tracking",
                    time: "2 days ago",
                    icon: "✔️",
                  },
                  {
                    title: "Social media post",
                    time: "Cancelled by user",
                    icon: "❌",
                  },
                  { title: "Lead list", time: "70% prepared", icon: "📋" },
                  { title: "Campaign Draft", time: "Due tomorrow", icon: "📌" },
                  { title: "Onboarding Docs", time: "Completed", icon: "📁" },
                ].map((task, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#18181b",
                      borderRadius: 8,
                      padding: "10px 12px",
                      opacity: idx === 3 ? 0.6 : 1,
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>
                        {task.title}
                      </span>
                      <div style={{ color: "#bdbdbd", fontSize: 12 }}>
                        {task.time}
                      </div>
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: "rgba(139,92,246,0.13)",
                        color: "#8b5cf6",
                        textAlign: "center",
                        lineHeight: "22px",
                        fontSize: 15,
                      }}
                    >
                      {task.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "70%",
              background:
                "linear-gradient(to bottom, rgba(17,17,20,0) 40%, #111114 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            maxWidth: 500,
            padding: "1rem",
          }}
        >
          <a
            href=""
            className="btn mb-3 px-2 py-1"
            style={{
              background: "transparent",
              color: "#bdbdbd",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid #23232a",
            }}
          >
            Custom Websites
          </a>
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Website Tasks & Workflow Automation
          </h3>
          <p
            style={{
              color: "#bdbdbd",
              fontSize: 16,
              marginBottom: 18,
              textAlign: "left",
            }}
          >
            We help you create an engaging, responsive, Fast and Secure, SEO
            Ready website that showcases your services, attracts more visitors,
            and builds your brand.
          </p>
          <h4 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 12 }}>
            Let’s build your online presence today.
          </h4>
          <a
            href="/contact"
            className="btn px-2 py-1"
            style={{
              background: "transparent",
              color: "#bdbdbd",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid #23232a",
            }}
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
