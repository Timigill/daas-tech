import React from 'react'
import { LiaLinkedin } from "react-icons/lia";

function team() {
  return (
    <div className="d-flex flex-column align-items-center text-center mt-5 px-3">
      <div>
        {/* Tagline */}
        <span
          className="badge px-3 py-2"
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "1px solid #222",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Our Team
        </span>

        {/* Main Heading */}
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
          Meet the Minds Behind Xtract
        </h1>

        {/* Subheading */}
        <p
          className="mt-3 text-white-50"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            maxWidth: 550,
            margin: "0 auto",
          }}
        >
          We bring together technology and strategy to create smarter automation solutions.
        </p>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center g-3">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded bg-gradient text-white"
              style={{
                border: " 1px solid #222 ",
              }}>
              <img src="/About-Us/Alex.png" alt="" style={{ width: "280px", height: "280px" }} />
              <div className="d-flex mt-2 justify-content-between">
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  Alex Carter
                </h5>
                <LiaLinkedin size={23} className='text-white-50' />
              </div>
              <p
                className="text-white-50 text-start mt-2"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}
              >
                Co-Founder & AI Strategist.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded bg-gradient text-white"
              style={{
                border: " 1px solid #222 ",
              }}>
              <img src="/About-Us/Sophia.png" alt="" style={{ width: "280px", height: "280px" }} />
              <div className="d-flex mt-2 justify-content-between">
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  Sophia Nguyen
                </h5>
                <LiaLinkedin size={23} className='text-white-50' />
              </div>
              <p
                className="text-white-50 text-start mt-2"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}>
                Head of Automation Engineering
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <div className="p-3 shadow rounded bg-gradient text-white"
              style={{
                border: " 1px solid #222 ",
              }}>
              <img src="/About-Us/Riyan.png" alt="" style={{ width: "280px", height: "280px" }} />
              <div className="d-flex mt-2 justify-content-between">
                <h5
                  className="mb-0 text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15",
                  }}
                >
                  Ryan Mitchell
                </h5>
                <LiaLinkedin size={23} className='text-white-50' />
              </div>
              <p
                className="text-white-50 text-start mt-2"
                style={{
                  margin: "0 auto",
                  color: "#ccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}>
                Lead Data Scientist
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default team
