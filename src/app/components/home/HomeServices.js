'use client';
import React from "react";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        padding: "64px 0 48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
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
          }}
        >
          {/* Replace below with your actual UI or image */}
          <div style={{
            width: "92%",
            height: "82%",
            borderRadius: 12,
            background: "rgba(24,24,27,0.85)",
            border: "1px solid #23232a",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: 500,
            position: "relative",
            zIndex: 1,
            overflow: "hidden"
          }}>
            {/* You can use an <img src="/your-card-screenshot.png" ... /> here for pixel-perfect clone */}
            <span style={{ opacity: 0.7, fontSize: 15, color: "#bdbdbd" }}>
              {/* Placeholder for your card UI */}
              All Tasks &nbsp; | &nbsp; Waiting for approval
              <br /><br />
              Payroll management<br />
              Employee Tracking<br />
              Social media post<br />
              Lead list<br />
              {/* ... */}
            </span>
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
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Build a Beautiful Website
          </h3>
          <p style={{ color: "#bdbdbd", fontSize: 16, marginBottom: 18 }}>
            We help you create an engaging, responsive website that showcases your services, attracts more visitors, and builds your brand.
          </p>
          <ul style={{ textAlign: "left", color: "#fff", fontSize: 15, paddingLeft: 0, listStyle: "none", marginBottom: 0 }}>
            <li style={{ marginBottom: 8 }}>✅ Fast & Secure</li>
            <li style={{ marginBottom: 8 }}>✅ Mobile-Friendly</li>
            <li style={{ marginBottom: 8 }}>✅ SEO-Ready</li>
          </ul>
          <h4 style={{ fontWeight: 600, fontSize: "1.1rem", margin: "24px 0 12px 0" }}>
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
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}