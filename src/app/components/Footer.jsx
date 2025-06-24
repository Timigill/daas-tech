import React from "react";
import "../globals.css";

function Footer() {
  return (
    <footer className="bg-black text-white" style={{ padding: "12px 30px" }}>
      <hr className="mt-4 mb-0 w-100" />
      <div className="container-fluid footer-gradient pt-4" style={{ overflowX: "hidden" }}>
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-md-6 mb-4">
            <div className="mb-3">
              <img
                src="/logo.jpg"
                alt="Xtract Logo"
                style={{ width: "170px", height: "auto", opacity: "2" }}
              />
            </div>

            <p
              className="mb-4 px-2"
              style={{
                maxWidth: "350px",
                color: "#bebaba",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              DaaS Tech– Where Problems Meets Possibilities.
            </p>

            <div style={{ maxWidth: "350px" }}>
              <p className="fw-bold px-2 mb-2">Join our newsletter</p>
              <div className="position-relative mb-4 ps-2">
                <input
                  type="email"
                  className="form-control bg-black text-white"
                  placeholder="name@email.com"
                  style={{
                    padding: "6px 90px 6px 12px",
                    height: "50px",
                    border: "1px solid rgb(90, 88, 90)",
                    outline: "none",
                    boxShadow: "none",
                    color: "white",
                  }}
                />
                <button
                  className="btn position-absolute top-0 end-0 mt-1 me-1 text-white"
                  style={{
                    backgroundColor: "rgb(139, 92, 246)",
                    height: "40px",
                    fontSize: "0.9rem",
                    padding: "4px 16px",
                  }}
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <h6 className="fw-bold mt-3">Links</h6>
                <ul className="list-unstyled footer-li" style={{ color: "#bebaba" }}>
                  <li>Services</li>
                  <li>Process</li>
                  <li>Case studies</li>
                  <li>Benefits</li>
                  <li>Pricing</li>
                  <li>Admin-Pannel</li>
                </ul>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <h6 className="fw-bold mt-3">Pages</h6>
                <ul className="list-unstyled footer-li" style={{ color: "#bebaba" }}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>404</li>
                </ul>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <h6 className="fw-bold mt-3">Socials</h6>
                <ul className="list-unstyled footer-li" style={{ color: "#bebaba" }}>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Linkedin</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-3 w-100" />

        <div className="row text-center d-flex justify-content-center text-md-start small">
          <div className="col-12 col-md px-3 mb-2">Logo by DaaS-Tech</div>
          <div className="col-12 col-md-3 mb-2">
            Visioned and Crafted by <b>Taimoor Gill</b>
          </div>
          <div className="col-12 col-md-3 mb-2 d-flex justify-content-center">
            {/* Optional Trustpilot */}
          </div>
          <div className="col-12 col-md-3 mb-2 d-flex justify-content-center">
            <div>© All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
