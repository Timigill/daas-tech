'use client';
import React from "react";
import ParticlesBg from "../ParticlesBg";
import "@/app/globals.scss";

function Hero() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        minHeight: "90vh",
        width: "100%", // Changed from 100vw to 100%
        overflow: "hidden",
        background: "#000",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Background Image Overlay with Opacity */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%", // Ensure overlay matches section
          height: "100%",
          // backgroundImage: "url('/purpleblur.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      {/* Animated Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%" }}>
        <ParticlesBg />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <span
          className="badge mb-3"
          style={{
            background: "rgba(139,92,246)",
            color: "#8b5cf6",
            fontWeight: 600,
            fontSize: 16,
            color: "#fff",
            letterSpacing: 1,
            fontFamily: "Inter, sans-serif",
          }}
        >
          New
        </span>
        <h1
          className="fw-bold hero-title mb-2"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "2.7rem",
            lineHeight: 1.1,
            color: "#fff",
            maxWidth: 700,
          }}
        >
          Intelligent Automation for <br className="d-none d-md-block" />
          Modern Businesses.
        </h1>
        <p
          className="mb-4 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            maxWidth: 550,
            margin: "0 auto",
          }}
        >
          Xtract brings AI automation to your fingertips & streamline tasks. 
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <a
            href="/signup"
            className="btn btn-primary  px-3 py-2"
            style={{
              background: "#8b5cf6",
              border: "none",
              fontWeight: 600,
              fontSize: 15,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Get in Touch
          </a>
          <a
            href="/portfolio"
            className="btn btn-outline-light  px-3 py-2"
            style={{
              fontWeight: 600,
              fontSize: 15,
              borderColor: "rgba(255, 255, 255, 0.1)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;