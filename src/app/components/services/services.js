"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{
        padding: "0px 0",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
        // backgroundColor: "var(--background)",
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

      {/* Main Content */}
      <div
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100"
        style={{ maxWidth: 1100, margin: "0 auto", }}
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
            background: "var(--background)",
            borderRadius: 18,
            width: "100%",
            maxWidth: 400,
            height: 320,
            marginBottom: 24,
            border: "1.5px solid var(--border-color)",
            boxShadow: "0 10px 40px var(--boxShadow)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "0px",
          }}
        >
          <div
            style={{
              width: "92%",
              height: "82%",
              borderRadius: 12,
              background: "var(--background)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 2px 12px 0 var(--boxShadow)",
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
                  background: "var(--background)",
                  color: "var(--foreground)",
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
                  background: "var(--background)",
                  color: "var(--muted-text)",
                  fontWeight: 500,
                  fontSize: 13,
                  borderRadius: 7,
                  padding: "4px 14px",
                  border: "1px solid var(--border-color)",
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
                      background: "var(--codeinnerdiv)",
                      borderRadius: 8,
                      padding: "10px 12px",
                      opacity: idx === 3 ? 0.6 : 1,
                      border: "1px solid var(--border-color)",
                      boxShadow: "0px 2px 12px 0px var(--boxShadow)",
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 600, fontSize: 14, color: "var(--muted-text)", }}>
                        {task.title}
                      </span>
                      <div style={{ color: "var(--muted-text)", fontSize: 12 }}>
                        {task.time}
                      </div>
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: "var(--background)",
                        // color: "#8b5cf6",
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
              height: "75%",
              // background:
              // "linear-gradient(to bottom, var(--grad1) 40%, var(--grad2) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* CTA Content */} v
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 500,
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href=""
            className="btn mb-3 px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--border-color)",
            }}
          >
            Custom Websites
          </a>
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Website Tasks & Workflow Automation
          </h3>
          <p
            style={{
              color: "var(--muted-text)",
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
            className=" px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--card-border)",
            }}
          >
            Get Started
          </a>
        </motion.div>
      </div>
      <div
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* CTA Content 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 500,
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href=""
            className="btn mb-3 px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--border-color)",
            }}
          >
            E-commerce
          </a>
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Online Store Development
          </h3>
          <p
            style={{
              color: "var(--muted-text)",
              fontSize: 16,
              marginBottom: 18,
              textAlign: "left",
            }}
          >
            We build secure, scalable online stores with seamless checkout,
            payment integration, and mobile-friendly design to help you sell
            more effectively.
          </p>
          <h4 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 12 }}>
            Ready to launch your store?
          </h4>
          <a
            href="/contact"
            className=" px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--card-border)",
            }}
          >
            Get Started
          </a>
        </motion.div>

        {/* Animated Task Card - E-Commerce (Improved & Unique) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            marginTop: "20px",
            position: "relative",
            background: "var(--background)",
            borderRadius: 18,
            width: "100%",
            maxWidth: 400,
            height: 320,
            marginBottom: 24,
            border: "1.5px solid var(--border-color)",
            boxShadow: "0 10px 40px var(--boxShadow)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        
          }}
        >
          <div
            style={{
              width: "92%",
              height: "82%",
              borderRadius: 12,
              // background: "linear-gradient(to bottom right, #1a1a1d, #18181b)",
              backgroundColor: "var(--background)",
              border: "1px solid var(--border-color)",
              padding: "18px 18px 0 18px",
              color: "var(--foreground)",
              fontSize: 15,
              fontWeight: 500,
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {/* Header Buttons */}
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <span
                style={{
                  background: "#8b5cf6",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 6,
                  padding: "4px 12px",
                }}
              >
                E-Commerce
              </span>
              <span
                style={{
                  background: "var(--background)",
                  color: "var(--foregound)",
                  fontWeight: 500,
                  fontSize: 13,
                  borderRadius: 6,
                  padding: "4px 12px",
                  border: "1px solid var(--border-color)",
                }}
              >
                Orders / Cart
              </span>
            </div>

            {/* Task Scroll */}
            <div className="task-scroll-wrapper">
              <div className="task-scroll">
                {[
                  {
                    title: "Add New Products",
                    time: "24 items uploaded",
                    icon: "🛍️",
                  },
                  {
                    title: "Payment Gateway",
                    time: "Stripe + PayPal setup",
                    icon: "💳",
                  },
                  {
                    title: "Shopping Cart UI",
                    time: "Custom animation",
                    icon: "🛒",
                  },
                  {
                    title: "Promo Code Engine",
                    time: "Save20 is live",
                    icon: "🎫",
                  },
                  {
                    title: "Email Notifications",
                    time: "Trigger confirmed",
                    icon: "📧",
                  },
                  {
                    title: "Order Tracking",
                    time: "Live delivery status",
                    icon: "📦",
                  },
                ].map((task, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "var(--codeinnerdiv)",
                      borderRadius: 8,
                      padding: "10px 12px",
                      borderLeft: "3px solid #8b5cf6",
                      boxShadow: "0 2px 12px 0 var(--boxshadow)",
                      marginBottom: 8,
                      opacity: idx === 3 ? 0.7 : 1,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>
                        {task.title}
                      </div>
                      <div style={{ color: "var(--foreground)", fontSize: 12 }}>
                        {task.time}
                      </div>
                    </div>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        background: "rgba(139,92,246,0.12)",
                        color: "#8b5cf6",
                        borderRadius: 6,
                        fontSize: 16,
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      {task.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fade Bottom */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "25%",
              background:
                "linear-gradient(to bottom, var(--grad3) 0%, var(--grad4) 40%);)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>
      {/* 🔹 Social Media Marketing Section 🔹 */}
      <div
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100"
        style={{ maxWidth: 1100, margin: "60px auto 0 auto" }}
      >
        {/* Animated Card - Social Media Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            marginTop: "20px",
            position: "relative",
            background: "var(--background)",
            borderRadius: 18,
            width: "100%",
            maxWidth: 400,
            height: "auto",
            marginBottom: 24,
            border: "1.5px solid var(--border-color)",
            boxShadow: "0 12px 40px var(--boxShadow)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginRight: "0px",
          }}
        >
          {/* Card Header */}
          <div
            style={{
              background: "var(--background)",
              padding: "16px 20px",
              borderBottom: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14, color: "var(--foreground)" }}>
              SMM Campaign Tracker
            </div>
            <div
              style={{
                fontSize: 12,
                background: "rgba(139,92,246,0.15)",
                color: "#8b5cf6",
                padding: "4px 10px",
                borderRadius: 6,
                fontWeight: 500,
              }}
            >
              6 Tasks
            </div>
          </div>

          {/* Task List */}
          <div
            className="task-scroll-wrapper"
            style={{ height: 200, padding: "16px 20px" }}
          >
            <div className="task-scroll">
              {[
                {
                  title: "Instagram Reels Batch",
                  status: "Scheduled for Friday",
                  progress: 80,
                  icon: "🎞️",
                },
                {
                  title: "Facebook Ads (Split Test)",
                  status: "Running 2 versions",
                  progress: 60,
                  icon: "📣",
                },
                {
                  title: "Analytics Report",
                  status: "3.2% engagement",
                  progress: 100,
                  icon: "📊",
                },
                {
                  title: "Twitter Hashtag Storm",
                  status: "Planned for Monday",
                  progress: 30,
                  icon: "🏷️",
                },
                {
                  title: "Pinterest Pins",
                  status: "10 images uploaded",
                  progress: 90,
                  icon: "📌",
                },
                {
                  title: "YouTube Shorts",
                  status: "In editing phase",
                  progress: 50,
                  icon: "🎬",
                },
              ].map((task, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--background)",
                    borderRadius: 10,
                    padding: "10px 12px",
                    marginBottom: 10,
                    border: "1px solid var(--border-color)",
                    boxShadow: "0px 2px 12px 0px var(--boxShadow)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <div
                      style={{
                        display: "flex", alignItems: "center", gap: 8,

                      }}
                    >
                      <div
                        style={{
                          background: "var(--background)",
                          color: "#8b5cf6",
                          width: 26,
                          height: 26,
                          borderRadius: 6,
                          textAlign: "center",
                          lineHeight: "26px",
                          fontSize: 15,
                        }}
                      >
                        {task.icon}
                      </div>
                      <div
                        style={{ fontWeight: 600, fontSize: 14, color: "var(--forreground)" }}
                      >
                        {task.title}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--muted-text)",
                      }}
                    >
                      {task.status}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div
                    style={{
                      height: 6,
                      borderRadius: 4,
                      background: "var(--foreground)",
                      overflow: "hidden",
                      marginTop: 6,
                    }}
                  >
                    <div
                      style={{
                        width: `${task.progress}%`,
                        height: "100%",
                        background:
                          "linear-gradient(to right, #8b5cf6, #a78bfa)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer / Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background:
                "linear-gradient(to bottom, var(--grad3) 0%, var(--grad4) 100%)",
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
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 500,
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href=""
            className="btn mb-3 px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--border-color)",
            }}
          >
            Social Media Marketing
          </a>
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Build Engagement, Get Leads & Go Viral
          </h3>
          <p
            style={{
              color: "var(--muted-text)",
              fontSize: 16,
              marginBottom: 18,
              textAlign: "left",
            }}
          >
            From content calendars to platform strategy, we help you reach your
            audience through smart campaigns that boost your brand presence.
          </p>
          <h4 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 12 }}>
            Let’s build your digital voice together.
          </h4>
          <a
            href="/contact"
            className="btn px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--border-color)",
            }}
          >
            Get Started
          </a>
        </motion.div>
      </div>
      {/* 🔹 Flyer Design Section 🔹 */}
      <div
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 w-100"
        style={{ maxWidth: 1100, margin: "60px auto 0 auto" }}
      >
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 500,
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href=""
            className="btn mb-3 px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--border-color)",
            }}
          >
            Flyer Design
          </a>
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Flyers That Catch Eyes & Convert
          </h3>
          <p
            style={{
              color: "var(--muted-text)",
              fontSize: 16,
              marginBottom: 18,
              textAlign: "left",
            }}
          >
            We create compelling flyer designs with bold visuals, structured
            layout, and a strong call-to-action to make your event or offer
            stand out.
          </p>
          <h4 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 12 }}>
            Let’s make something worth printing.
          </h4>
          <a
            href="/contact"
            className="btn px-2 py-1"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: 13,
              borderRadius: 7,
              padding: "4px 14px",
              border: "1px solid var(--border-color)",
            }}
          >
            Get Started
          </a>
        </motion.div>
        {/* 🎨 Flyer Design Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            background:
              "radial-gradient(circle at top left, var(--grad3) 0%, var(--grad3) 100%)",
            borderRadius: 18,
            width: "100%",
            maxWidth: 400,
            height: 360,
            marginTop: "20px",
            marginBottom: 24,
            border: "1.5px solid var(--border-color)",
            boxShadow: "0 20px 50px var(--boxShadow)",
            overflow: "hidden",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "var(--foreground)", fontSize: 15, fontWeight: 600 }}>
              Design Showcase
            </h4>
            <span
              style={{
                background: "var(--grad2)",
                color: "var(--accent)",
                padding: "4px 10px",
                fontSize: 12,
                borderRadius: 6,
                fontWeight: 500,
              }}
            >
              3 Concepts
            </span>
          </div>

          {/* Poster Preview Layer */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {["#8b5cf6", "#ec4899", "#38bdf8"].map((color, i) => (
              <div
                key={i}
                style={{
                  width: 80,
                  height: 100,
                  background: `linear-gradient(145deg, ${color} 20%,var(--grad2) 100%)`,
                  borderRadius: 12,
                  boxShadow: `0 4px 12px ${color}55`,
                  border: "2px solid var(--boxShadow)",
                  transform: `rotate(${i === 1 ? 0 : i === 0 ? -4 : 4}deg)`,
                  transition: "transform 0.4s ease",
                }}
              />
            ))}
          </div>

          {/* Info */}
          <div style={{ marginTop: 24 }}>
            <p
              style={{
                color: "var(--foreground)",
                fontSize: 13,
                lineHeight: 1.5,
                marginBottom: 8,
              }}
            >
              • Aesthetic Color Balance
              <br />
              • Print-Ready 300 DPI
              <br />• Modern Typography
            </p>
            <div
              style={{
                background: "linear-gradient(to right, #8b5cf6, #a78bfa)",
                height: 4,
                borderRadius: 4,
                width: "60%",
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 80,
              background:
                "linear-gradient(to bottom, var(--grad2), transparent)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
