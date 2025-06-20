import React from 'react';
import { PiLightbulbFill, PiRocketLaunchFill, PiHandshakeFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";

function Values() {
  return (
    <div className="d-flex flex-column align-items-center text-center my-5 py-5 px-3">
      {/* Header */}
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
          Our Values
        </span>

        <h1
          className="mt-"
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
          The Values Behind DaaS Tech 
        </h1>

        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            maxWidth: 620,
          }}
        >
          Our values shape everything we do at DaaS. From innovation to integrity,
          we’re committed to building Digital solutions that empower businesses and drive real impact.
        </p>
      </div>

      <div className="d-flex justify-content-center py-5 position-relative">
        {/* Radial Gradient Circle Background */}
        <div
          style={{
            position: "absolute",
            top: "150%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(circle, #241142 0%, #0b0b0b 80%)",
            borderRadius: "50%",
            zIndex: 0,
            filter: "blur(60px)",
          }}
        ></div>

        {/* Cards Row */}
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="p-4 shadow rounded  text-white h-100"
              style={{      border: " 1px solid #222 ", background: "linear-gradient(to top left, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}
                >
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
                  We embrace cutting-edge solutions to create smarter, more efficient digital solutions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="p-4 shadow rounded  text-white h-100"
              style={{      border: " 1px solid #222 ", background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}
>
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
              <div className="p-4 shadow rounded  text-white h-100"
                              style={{      border: " 1px solid #222 ", background: "linear-gradient(to bottom left, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}
>
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
                  We help businesses scale faster with  efficiency, reducing time and unlocking new opportunities.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="p-4 shadow rounded  text-white h-100"
                              style={{      border: " 1px solid #222 ", background: "linear-gradient(to bottom right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}
>
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
    </div>
  );
}

export default Values;
