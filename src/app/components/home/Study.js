"use client";

import React, { useState } from "react";

const caseStudies = [
  {
    id: 1,
    image: "/images/case1.png", // Replace with your image path
    title: "AI integration helped ScaleByte close 3x more deals in less time",
    description:
      "ScaleByte’s sales team struggled with follow-up delays. Our AI assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
    points: [
      "3x More Deals",
      "40% Faster Responses",
      "95% Lead Accuracy",
      "CRM Fully Synced",
    ],
  },
  {
    id: 2,
    image: "/images/case2.png",
    title: "RetailRev optimized inventory with AI demand prediction",
    description:
      "RetailRev reduced overstock and missed sales opportunities using AI-based inventory predictions and dynamic reordering strategies.",
    points: [
      "25% Inventory Reduction",
      "30% Increase in Sales",
      "Real-time Forecasting",
    ],
  },
  {
    id: 3,
    image: "/images/case3.png",
    title: "ChatGenie cut support load by 60% with AI automation",
    description:
      "AI-driven chatbots helped ChatGenie provide 24/7 support, solving most queries instantly and reducing human workload dramatically.",
    points: [
      "60% Lower Support Costs",
      "24/7 Instant Help",
      "Higher Customer Satisfaction",
    ],
  },
];

const Study = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        padding: "60px 20px",
        position: "relative",
        overflow: "hidden",
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
        Case Studies
      </span>
      <h2 style={{ fontWeight: 700, fontSize: "2.5rem", maxWidth: 800 }}>
        See How Smart AI Automation Transforms Businesses
      </h2>
      <p
        style={{
          fontSize: 18,
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 40px auto",
        }}
      >
        See how AI automation streamlines operations, boosts and drives growth.
      </p>

      {/* CARD */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1100,
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "#fff",
            cursor: "pointer",
            position: "absolute",
            left: 0,
            zIndex: 1,
          }}
        >
          &#8592;
        </button>

        {/* Card Content */}
        <div
          style={{
            backgroundColor: "#111",
            display: "flex",
            flexDirection: "row",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            maxWidth: "100%",
            width: "100%",
            minHeight: 400,
            transition: "0.3s ease-in-out",
          }}
        >
          {/* Image */}
          <div
            style={{
              flex: 1,
              backgroundImage: `url(${caseStudies[currentIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 300,
            }}
          ></div>

          {/* Text Content */}
          <div style={{ flex: 1.2, padding: "30px", textAlign: "left" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: 10 }}>
              {caseStudies[currentIndex].title}
            </h3>
            <p style={{ color: "#ccc", marginBottom: 20 }}>
              {caseStudies[currentIndex].description}
            </p>
            <ul>
              {caseStudies[currentIndex].points.map((point, idx) => (
                <li key={idx} style={{ marginBottom: 6 }}>
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "#fff",
            cursor: "pointer",
            position: "absolute",
            right: 0,
            zIndex: 1,
          }}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Study;
