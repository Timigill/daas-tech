'use client';
import React from "react";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        padding: "48px 0 48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif", // Use Inter font everywhere
      }}
    >
      <span
        className="badge mb-3"
        style={{
          background: "rgba(139,92,246,0.15)",
          color: "#8b5cf6",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 1,
          padding: "8px 18px",
          borderRadius: 20,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Our Services
      </span>
      <h2
        style={{
          fontWeight: 700,
          fontSize: "2.5rem",
          lineHeight: 1.15,
          marginBottom: 16,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Web Solutions That Take Your Business Online
      </h2>
      <p
        style={{
          fontSize: 18,
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 40px auto",
          fontFamily: "Inter, sans-serif",
        }}
      >
        We design, develop, and launch websites that help you reach more customers and grow your business with ease.
      </p>

      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5"
        style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Left: Card with lighten/fade effect */}
        <div
          style={{
            position: "relative",
            background: "#111114",
            borderRadius: 18,
            minWidth: 340,
            maxWidth: 420,
            width: 370,
            height: 320,
            marginBottom: 24,
            border: "1.5px solid #23232a",
            boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* Card content */}
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
              color: "#fff",
              fontSize: 15,
              fontWeight: 500,
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              padding: "18px 18px 0 18px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {/* Tabs */}
            <div style={{
              display: "flex",
              gap: 8,
              marginBottom: 14,
              fontFamily: "Inter, sans-serif",
            }}>
              <span style={{
                background: "#23232a",
                color: "#fff",
                fontWeight: 600,
                fontSize: 13,
                borderRadius: 7,
                padding: "4px 14px",
                boxShadow: "0 1px 4px 0 rgba(0,0,0,0)",
                border: "1px solid #23232a",
                fontFamily: "Inter, sans-serif",
              }}>All Tasks</span>
              <span style={{
                background: "transparent",
                color: "#bdbdbd",
                fontWeight: 500,
                fontSize: 13,
                borderRadius: 7,
                padding: "4px 14px",
                border: "1px solid #23232a",
                fontFamily: "Inter, sans-serif",
              }}>Waiting for approval</span>
            </div>
            {/* Task list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "Inter, sans-serif" }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#18181b", borderRadius: 8, padding: "10px 12px"
              }}>
                <div>
                  <span style={{ fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif" }}>Payroll management</span>
                  <div style={{ color: "#bdbdbd", fontSize: 12, fontFamily: "Inter, sans-serif" }}>Due on 2nd July</div>
                </div>
                <span style={{
                  display: "inline-block",
                  width: 22, height: 22, borderRadius: 6,
                  background: "rgba(139,92,246,0.13)",
                  color: "#8b5cf6", textAlign: "center", lineHeight: "22px", fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}>⏰</span>
              </div>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#18181b", borderRadius: 8, padding: "10px 12px"
              }}>
                <div>
                  <span style={{ fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif" }}>Employee Tracking</span>
                  <div style={{ color: "#bdbdbd", fontSize: 12, fontFamily: "Inter, sans-serif" }}>2 days ago</div>
                </div>
                <span style={{
                  display: "inline-block",
                  width: 22, height: 22, borderRadius: 6,
                  background: "rgba(139,92,246,0.13)",
                  color: "#8b5cf6", textAlign: "center", lineHeight: "22px", fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}>✔️</span>
              </div>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#18181b", borderRadius: 8, padding: "10px 12px"
              }}>
                <div>
                  <span style={{ fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif" }}>Social media post</span>
                  <div style={{ color: "#bdbdbd", fontSize: 12, fontFamily: "Inter, sans-serif" }}>Cancelled by user</div>
                </div>
                <span style={{
                  display: "inline-block",
                  width: 22, height: 22, borderRadius: 6,
                  background: "rgba(139,92,246,0.13)",
                  color: "#8b5cf6", textAlign: "center", lineHeight: "22px", fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}>❌</span>
              </div>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#18181b", borderRadius: 8, padding: "10px 12px", opacity: 0.6
              }}>
                <div>
                  <span style={{ fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif" }}>Lead list</span>
                  <div style={{ color: "#bdbdbd", fontSize: 12, fontFamily: "Inter, sans-serif" }}>70% prepared</div>
                </div>
                <span style={{
                  display: "inline-block",
                  width: 22, height: 22, borderRadius: 6,
                  background: "rgba(139,92,246,0.13)",
                  color: "#8b5cf6", textAlign: "center", lineHeight: "22px", fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                }}>📋</span>
              </div>
            </div>
          </div>
          {/* Gradient overlay for lighten/fade effect */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "70%",
              background: "linear-gradient(to bottom, rgba(17,17,20,0) 40%, #111114 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Right: Call to Action */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minWidth: 320,
            maxWidth: 400,
            padding: "32px 28px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10, fontFamily: "Inter, sans-serif" }}>
            Build a Beautiful Website
          </h3>
          <p style={{ color: "#bdbdbd", fontSize: 16, marginBottom: 18, fontFamily: "Inter, sans-serif" }}>
            We help you create an engaging, responsive website that showcases your services, attracts more visitors, and builds your brand.
          </p>
          <ul style={{ textAlign: "left", color: "#fff", fontSize: 15, paddingLeft: 0, listStyle: "none", marginBottom: 0, fontFamily: "Inter, sans-serif" }}>
            <li style={{ marginBottom: 8 }}>✅ Fast & Secure</li>
            <li style={{ marginBottom: 8 }}>✅ Mobile-Friendly</li>
            <li style={{ marginBottom: 8 }}>✅ SEO-Ready</li>
          </ul>
          <h4 style={{ fontWeight: 600, fontSize: "1.1rem", margin: "24px 0 12px 0", fontFamily: "Inter, sans-serif" }}>
            Let’s build your online presence today.
          </h4>
          <a
            href="/contact"
            className="btn btn-primary px-4 py-2 mt-2"
            style={{
              background: "#8b5cf6",
              border: "none",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 24,
              color: "#fff",
              textDecoration: "none",
              marginTop: 8,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}