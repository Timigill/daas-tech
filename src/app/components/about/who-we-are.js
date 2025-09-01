"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { AiFillSignal } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaBolt } from "react-icons/fa6";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/globals.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Card content
const cardData = [
  {
    icon: <AiFillSignal size={23} style={{ color: "var(--foreground)" }} />,
    title: "150+ Businesses",
    description:
      "Companies have streamlined their workflows with DaaS Digital solutions.",
    custom: 1.5,
  },
  {
    icon: <GoClockFill size={23} style={{ color: "var(--foreground)" }} />,
    title: "1M+ Hours",
    description:
      "Reducing time and boosting productivity through Digital Solutions.",
    custom: 2,
  },
  {
    icon: <FaBolt size={23} style={{ color: "var(--foreground)" }} />,
    title: "95% Faster",
    description:
      "Clients see improved efficiency within the first two to three months.",
    custom: 2.5,
  },
];

const cardStyle = {
  background: "var(--card-bg)",
  borderRadius: 12,
  padding: 24,
  flex: "1 1 260px",
  minHeight: 150,
  maxWidth: 270,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  border: "1px solid var(--border-color)",
};

export default function Who() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false, // we will use custom dots
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      { breakpoint: 999, settings: { slidesToShow: 2 } },
      { breakpoint: 550, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center my-5 py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      {/* Section Tag */}
      <motion.span
        variants={fadeInUp}
        custom={0.6}
        whileHover={{ scale: 1.1 }}
        className="btn px-3 py-2"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 500,
          fontSize: "12px",
          marginBottom: "12px",
          width: "fit-content",
        }}
      >
        Who We Are
      </motion.span>

      {/* Heading */}
      <motion.h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "var(--foreground)",
          maxWidth: 700,
          margin: "0 auto",
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={0.5}
        viewport={{ once: true }}
       
      >
        Who We Are
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-3"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          color: "var(--muted-text)",
          maxWidth: 620,
          margin: "0 auto",
        }}
      >
        DaaS Tech is a team of innovators dedicated to making your Digital
        Presence simple and effective. We help businesses streamline workflows,
        boost efficiency, and scale with smart.
      </motion.p>

      {/*  Carousel */}
      <div className="slick-container">
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={card.custom}
              className="d-flex justify-content-center"
            >
              <div className="p-3 shadow rounded text-start" style={cardStyle}>
                <div className="d-flex gap-2 mb-2" style={{ height: "auto" }}>
                  {card.icon}
                  <h5
                    className="mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      color: "var(--foreground)",
                    }}
                  >
                    {card.title}
                  </h5>
                </div>
                <p
                  style={{
                    margin: "0 auto",
                    color: "var(--muted-text)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    maxWidth: 400,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/*  Desktop Dots */}
        <div className="custom-dots d-none d-md-flex">
          {cardData.map((_, i) => (
            <div
              key={i}
              className={`dot ${activeSlide === i ? "active" : ""}`}
              onClick={() => sliderRef.current?.slickGoTo(i)}
            />
          ))}
        </div>

        {/* Mobile Circle Buttons */}
        <div className="mobile-controls d-md-none">
          <button onClick={() => sliderRef.current?.slickPrev()}>◀</button>
          <button onClick={() => sliderRef.current?.slickNext()}>▶</button>
        </div>
      </div>
    </motion.div>
  );
}

