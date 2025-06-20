import React from 'react'
import { AiFillSignal } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { FaBolt } from "react-icons/fa6";
import "@/app/globals.css"
function Who() {
  return (
    <div>
      <div
        className='d-flex flex-column align-items-center text-center my-5 py-5 px-3'
      >
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
          Who We Are
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
          Who We Are
        </h1>
        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          DaaS Tech is a team of innovators dedicated to making your Digital Presence simple and effective.
          We help businesses streamline workflows, boost efficiency, and scale with smart.
        </p>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center g-3">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded text-white" style={{  background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}>
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
                  fontSize: "0.9rem",
                  maxWidth: 230,
                }}
              >
                Companies have streamlined their workflows with DaaS Digital solutions.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded  text-white" style={{  background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}>
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
                  fontSize: "0.9rem",
                  maxWidth: 230,
                }}>
                Reducing time and boosting productivity through automation.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded text-white" style={{  background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))"}}>
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
                  fontSize: "0.9rem",
                  maxWidth: 230,
                }}>
                Clients see improved efficiency within the first three months.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Who
