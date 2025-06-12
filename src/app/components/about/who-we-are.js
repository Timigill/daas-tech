import React from 'react'
import { AiFillSignal } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaBolt } from "react-icons/fa6";
import "@/app/globals.css"
function Who() {
  return (
    <div>
      <div
        className='d-flex flex-column align-items-center text-center mt-5 px-3'
      >
        <span
          className="badge px-3 py-2"
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "1px solid #222",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Who We Are
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
            margin: "0 auto",
          }}
        >
          Who We Are
        </h1>
        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          Xtract is a team of innovators dedicated to making AI automation simple and effective.
          We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.
        </p>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center g-3">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded bg-gradient text-white" >
              <div className="d-flex gap-2 mb-2">
                <AiFillSignal size={23} style={{ color: "white" }} />
                <h5
                 className="mb-0 text-white"
                 style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15",
                  }}
                  >
                  150+ Businesses
                  </h5>
              </div>
              <p
                className="text-white-50"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}
              >
                Companies have streamlined their workflows with Xtract’s AI solutions.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded bg-gradient text-white">
              <div className="d-flex gap-2 mb-2">
                <GoClockFill size={23} style={{ color: "white" }} />
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  1M+ Hours
                </h5>
              </div>
              <p
                className="text-white-50"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}>
                Reducing manual work and boosting productivity through automation.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded bg-gradient text-white">
              <div className="d-flex gap-2 mb-2">
                <FaBolt size={23} style={{ color: "white", }} />
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  95% Faster
                </h5>
              </div>
              <p
                className="text-white-50"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}>
                Clients see improved efficiency within the first three months of usage.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Who
