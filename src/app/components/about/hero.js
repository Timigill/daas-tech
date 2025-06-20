import React from 'react';
import "@/app/globals.css";

function Hero() {
  return (
    <div className="d-flex flex-column align-items-center text-center mt-5 p-5 px-3">
      <div>
        {/* Tagline */}
        <span
          className="badge px-3 py-2"
          
             style={{
          padding: "4px 10px",
          fontSize: 12,
          color: "#fff",
          // background: "#1e1e23",
          border: "1px solid rgb(17 17 17)",
          borderRadius: 8,
          width: "fit-content",
          fontWeight: 500,
          marginBottom: 12,
        }}
         
        >
          About Us
        </span>

        {/* Main Heading */}
        <h1
          className="mt-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            // fontSize: "3.5rem",
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
          DaaS Tech Innovations helps businesses streamline operations and grow faster with Digital Solutions.
        </p>
      </div>
    </div>
  );
}

export default Hero;
