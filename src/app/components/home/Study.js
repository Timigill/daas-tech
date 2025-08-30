"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

const caseStudies = [
  {
    id: 1,
    image: "/case1.png",
    title:
      "Smart Web Platforms Drove 3× More Client Conversions",
    description:
      "A growing service business was stuck with outdated manual processes and a slow, non-scalable website. This caused delays in client onboarding and missed opportunities. We designed a modern web platform with automated workflows and CRM integration. The system connected client data, optimized processes, and enabled seamless communication.",
    points: [
      "3× More Conversions",
      "40% Faster Client Onboarding",
      "95% Data Accuracy",
      "CRM Fully Integrated",

    ],
  },
  {
    id: 2,
    image: "/case2.png",
    title: "E-Commerce Brand Boosted Sales with Custom Web Development",
    description:
      "An online retailer was struggling with high cart abandonment and limited scalability on their old e-commerce store. We built a responsive, AI-powered e-commerce system with an optimized checkout process, real-time inventory management, and advanced analytics dashboards.",
    points: [
      "25% Inventory Reduction",
      "30% Increase in Sales",
      "Real-time Forecasting",
    ],
  },
  {
    id: 3,
    image: "/case3.png",
    title: "AI Chat & Support System Reduced Workload by 60%",
    description:
      "A service provider was overwhelmed with repetitive customer queries, which slowed down their support team. We developed a custom AI chatbot and integrated it with their website, providing instant answers and automating routine support tasks.",
    points: [
      "60% Lower Support Costs",
      "24/7 Instant Support Availability",
      "Higher Customer Retention & Satisfaction",],
  },
];

const Study = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const newIndex = Math.round(scrollPosition / containerWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "Inter, sans-serif",
        padding: "60px 20px",
        minHeight: "100vh",
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="badge mb-3"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 1,
          padding: "8px 18px",
          borderRadius: 20,
        }}
      >
        Case Studies
      </motion.span>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ fontWeight: 700, maxWidth: 800 }}
      >
        See How Smart Digital Solutions Transforms Businesses
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          fontSize: 17,
          color: "var(--muted-text)",
          maxWidth: 600,
          margin: "0 auto 40px auto",
        }}
      >
        See how Digital Solutions streamlines operations, boosts productivity, and drives growth.
      </motion.p>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          width: "80%",
          maxWidth: "80%",
          scrollBehavior: "smooth",
          gap: "20px",
          padding: "0 20px",
          marginBottom: "20px",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
          userSelect: "none",
        }}
      >
        {caseStudies.map((study) => (
         <div
  key={study.id}
  style={{
    flex: "0 0 auto",
    width: "76vw",
    scrollSnapAlign: "start",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "var(--border-color) 0px 0px 10px",
    minHeight: isMobile ? 320 : 420,   // ✅ shorter on small screens
    backgroundColor: "var(--card-bg)",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  }}
>
            {/* Image section */}
            <div
              style={{
                width: isMobile ? "100%" : "40%",
                height: isMobile ? "150px" : "auto",
                backgroundImage: `url(${study.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
              }}
            ></div>

            {/* Text section */}
            <div
              style={{
                padding: "20px",
                textAlign: "left",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                {study.title}
              </h3>
              <p
              className="study-text"
                style={{
                  color: "var(--muted-text)",
                  marginBottom: "15px",
                  fontSize: "0.9rem",
                }}
              >
                {study.description}
              </p>
              <ul style={{ paddingLeft: 0, fontSize: "0.9rem" }}>
                {study.points.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "6px",
                      listStyleType: "none",
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: 20,
        }}
      >
        {caseStudies.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                idx === currentIndex ? "#8b5cf6" : "var(--muted-text)",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Study;

