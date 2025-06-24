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
          Why Us
        </span>

        <h1
          className=""
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
          What Makes Us Stand Out in the Industry
        </h1>

        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            maxWidth: 580,
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
                Other Digital Solutions
              </h5>

              {[
                "Generic templates & designs",
                "Limited customizability",
                "Poor brand identity",
                "Inconsistent quality",
                "No post-delivery support",
                "One-size-fits-all solutions",
              
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
                DaaS Digital Solutions
              </h5>

              {[
                "Tailored design & branding",
                "Professional, human-driven creativity",
                "Strategic social media presence",
                "Custom-built websites & flyers",
                "Dedicated client support",
                "Consistent quality & attention to detail",
                
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
