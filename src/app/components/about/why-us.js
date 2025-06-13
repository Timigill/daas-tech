import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

function Why() {
  return (
    <div className="d-flex flex-column align-items-center text-center mt-5 px-3">
      {/* Header Section */}
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
          Why Us
        </span>

        <h1
          className="mt-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 460,
            margin: "0 auto",
          }}
        >
          What Makes Us Stand Out in the Industry
        </h1>

        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 510,
            margin: "0 auto",
          }}
        >
          Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition.
        </p>
      </div>

      {/* Comparison Section */}
      <div className="container my-4">
        <div className="row justify-content-center g-5">
          {/* Manual Work */}
          <div className="col-md-4">
            <div className="p-4 shadow rounded text-white h-100"
            style={{
              border: " 1px solid #222 " ,
            }}>
              <h5
                className="mb-4 text-white-50 text-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Manual Work
              </h5>

              {[
                "Prone to human errors",
                "Limited by work hours",
                "High labor costs & overhead",
                "Slow & time-consuming tasks",
                "Disconnected & repetitive work",
                "Inconsistent & dependent on workforce",
              ].map((text, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 mb-3 text-white-50">
                  <RxCross2 size={20} style={{ flexShrink: 0 }} />
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Xtract AI Automation */}
          <div className="col-md-4">
            <div
              className="p-4 shadow rounded text-white h-100"
              style={{
                background: "radial-gradient(circle at top center, #2e0f54 0%, #0b0b0b 40%)",
                border: " 1px solid #222 " ,
              }}
            >
              <h5
                className="mb-4 text-white text-start"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Xtract AI Automation
              </h5>

              {[
                "Smart AI-driven decisions",
                "24/7 automated workflows",
                "Scalable & cost-effective",
                "Instant data processing",
                "Seamless system integration",
                "Consistent & reliable output",
              ].map((text, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 mb-3 text-white">
                  <FaCheck size={20} style={{ flexShrink: 0 }} />
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Why;
