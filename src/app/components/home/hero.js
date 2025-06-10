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
        width: "100%",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="hero-stars"
        style={{
          opacity: 0.3,
        }}
      />
      
      {/* Animated Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <ParticlesBg />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <span className="badge bg-primary mb-3 px-3 py-2">
          New
        </span>
        <h1 className="hero-title mb-2 display-4 fw-bold">
          Intelligent Automation for <br className="d-none d-md-block" />
          Modern Businesses.
        </h1>
        <p className="mb-4 text-white-50 lead">
          Xtract brings AI automation to your fingertips & streamline tasks. 
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <a href="/signup" className="btn btn-primary px-4">
            Get in Touch
          </a>
          <a href="/portfolio" className="btn btn-outline-light px-4">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;