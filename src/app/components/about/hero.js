import React from 'react';
import "@/app/globals.css";

function Hero() {
  return (
    <div className="d-flex flex-column align-items-center text-center mt-5 px-3">
      <div>
        {/* Tagline */}
        <span
          className="badge px-3 py-2"
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "1px solid #222",
            fontFamily: "Inter, sans-serif",
          }}
        >
          About Us
        </span>

        {/* Main Heading */}
        <h1
          className="mt-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Helping Businesses Grow
        </h1>

        {/* Subheading */}
        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Xtract helps businesses streamline operations and grow faster with AI-powered automation.
        </p>
      </div>
    </div>
  );
}

export default Hero;
