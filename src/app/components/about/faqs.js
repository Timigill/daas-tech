"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqsData = [
  {
    question: "How can AI automation help my business?",
    answer:
      "AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.",
  },
  {
    question: "Is AI automation difficult to integrate?",
    answer:
      "No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.",
  },
  {
    question: "What industries can benefit from AI automation?",
    answer:
      "AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAnswer = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const totalCards = faqsData.length;

  return (
    <div className="d-flex flex-column align-items-center text-center mt-5 px-3">
      {/* Header */}
      <div>
        <span
          className="badge px-3 py-2"
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "1px solid #222",
            fontFamily: "Inter, sans-serif",
          }}
        >
          FAQS
        </span>

        <h1
          className="mt-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          We’ve Got the Answers You’re Looking For
        </h1>

        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          Quick answers to your AI automation questions.
        </p>
      </div>

      {/* Cards */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {faqsData.map((faq, index) => {
              const positionY = (index / (totalCards - 1)) * 100; // from 0% to 100%

              return (
                <div
                  key={index}
                  className="p-4 shadow rounded text-white mt-3"
                  onClick={() => toggleAnswer(index)}
                  style={{
                    cursor: "pointer",
                    background: `radial-gradient(circle at top right, #2e0f54 0%, #0b0b0b 80%)`,
                    backgroundSize: `100% ${totalCards * 100}px`,
                    backgroundPosition: `top right, 0 ${positionY}%`,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5
                      className="mb-0"
                      style={{ fontSize: "15px" }}
                    >
                      {faq.question}
                    </h5>
                    {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                  </div>

                  {openIndex === index && (
                    <p
                      className="text-white-50 text-start mt-4"
                      style={{
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
