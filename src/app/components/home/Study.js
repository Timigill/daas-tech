"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    image: "/case1.png",
    title: "Digital Systems Accelerate Sales- Smart Workflow Helped Close 3× More Deals, Faster",
    description:
      "RetailRev faced issues with overstock and missed sales. We helped them implement a dynamic inventory management system with real-time tracking and automated reordering — minimizing waste and maximizing sales.",
    points: ["3x More Deals", "40% Faster Responses", "95% Lead Accuracy", "CRM Fully Synced"],
  },
  {
    id: 2,
    image: "/case2.png",
    title: "RetailRev Optimized Inventory with Smart Digital Solutions",
    description:
      "RetailRev reduced overstock and missed sales opportunities using AI-based inventory predictions and dynamic reordering strategies.",
    points: ["25% Inventory Reduction", "30% Increase in Sales", "Real-time Forecasting"],
  },
  {
    id: 3,
    image: "/case3.png",
    title: "ChatGenie Reduced Support Load by 60% With Smart Chat Solutions",
    description:
      "ChatGenie partnered with DaaS Tech Innovations to build an efficient support system. We developed a custom chatbot solution that delivered instant responses and resolved routine queries — easing the burden on human support teams.",
    points: ["60% Lower Support Costs", "24/7 Instant Help", "Higher Customer Satisfaction"],
  },
];

const Study = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || !isMobile) return;
    
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const newIndex = Math.round(scrollPosition / containerWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        background: "#000",
        color: "#fff",
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
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 40px auto",
        }}
      >
        See how Digital Solutions streamlines operations, boosts productivity, and drives growth.
      </motion.p>

      {isMobile ? (
        // Mobile horizontal scroll version
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            width: "100%",
            maxWidth: "100%",
            scrollBehavior: "smooth",
            gap: "20px",
            padding: "0 20px",
            marginBottom: "20px",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              style={{
                flex: "0 0 auto",
                width: "85vw",
                scrollSnapAlign: "start",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                minHeight: 420,
                backgroundColor: "#111",
              }}
            >
              {/* Image Section */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${study.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Text Section */}
              <div
                style={{
                  padding: "20px",
                  textAlign: "left",
                }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                  {study.title}
                </h3>
                <p style={{ color: "#ccc", marginBottom: "15px", fontSize: "0.9rem" }}>
                  {study.description}
                </p>
                <ul style={{ paddingLeft: 0, textAlign: "left", fontSize: "0.9rem" }}>
                  {study.points.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: "6px", listStyleType: "none" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Desktop version with arrows
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90vw",
            maxWidth: 1100,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Left Arrow */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "#111",
              border: "2px solid #8b5cf6",
              fontSize: "1.5rem",
              color: "#8b5cf6",
              cursor: "pointer",
              borderRadius: "50%",
              width: 50,
              height: 50,
              position: "absolute",
              left: -60,
              zIndex: 10,
            }}
          >
            ‹
          </motion.button>

          {/* Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={caseStudies[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 35px rgba(0,0,0,0.5)",
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                width: "100%",
                minHeight: 420,
                backgroundColor: "#111",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Image Section */}
              <div
                style={{
                  flex: 1,
                  backgroundImage: `url(${caseStudies[currentIndex].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 300,
                }}
              ></div>

              {/* Text Section */}
              <div
                style={{
                  flex: 1.2,
                  padding: 30,
                  textAlign: "left",
                }}
              >
                <h3 style={{ fontSize: "1.75rem", marginBottom: 10 }}>
                  {caseStudies[currentIndex].title}
                </h3>
                <p style={{ color: "#ccc", marginBottom: 20 }}>
                  {caseStudies[currentIndex].description}
                </p>
                <ul style={{ paddingLeft: 20 }}>
                  {caseStudies[currentIndex].points.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: 6 }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "#111",
              border: "2px solid #8b5cf6",
              fontSize: "1.5rem",
              color: "#8b5cf6",
              cursor: "pointer",
              borderRadius: "50%",
              width: 50,
              height: 50,
              position: "absolute",
              right: -60,
              zIndex: 10,
            }}
          >
            ›
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Study;