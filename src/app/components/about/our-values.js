import React from 'react';
import { PiLightbulbFill, PiRocketLaunchFill, PiHandshakeFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";

function Values() {
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
          Our Values
        </span>

        <h1
          className="mt-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "2.5rem",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: 700,
          }}
        >
          The Values Behind Xtract
        </h1>

        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 580,
          }}
        >
          Our values shape everything we do at Xtract. From innovation to integrity,
          we’re committed to building AI solutions that empower businesses and drive real impact.
        </p>
      </div>

      {/* Value Cards */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="p-4 shadow rounded bg-gradient text-white h-100">
              <div className="d-flex gap-2 mb-2">
                <PiLightbulbFill size={23} />
                <h5
                  className="mb-0"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                >
                  Driving Innovation Forward
                </h5>
              </div>
              <p
                className="text-white-50 text-start"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
              >
                We embrace cutting-edge AI to create smarter, more efficient automation solutions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="p-4 shadow rounded bg-gradient text-white h-100">
              <div className="d-flex gap-2 mb-2">
                <PiHandshakeFill size={23} />
                <h5
                  className="mb-0"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                >
                  Committed to Integrity & Trust
                </h5>
              </div>
              <p
                className="text-white-50 text-start"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
              >
                 Trust and transparency are at the core of everything we do for our clients.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="p-4 shadow rounded bg-gradient text-white h-100">
              <div className="d-flex gap-2 mb-2">
                <PiRocketLaunchFill size={23} />
                <h5
                  className="mb-0"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                >
                  Empowering Business Growth
                </h5>
              </div>
              <p
                className="text-white-50 text-start"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
              >
               We help businesses scale faster with AI-driven efficiency, reducing manual tasks and unlocking new opportunities.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="p-4 shadow rounded bg-gradient text-white h-100">
              <div className="d-flex gap-2 mb-2">
                <FaUserGroup size={23} />
                <h5
                  className="mb-0"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                >
                  Putting Customers First
                </h5>
              </div>
              <p
                className="text-white-50 text-start"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: 460 }}
              >
                Your success is our priority — we build solutions that truly make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
