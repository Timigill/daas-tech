"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";

function Footer() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Detect theme on mount
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-section "  style={{ padding: "12px 30px", background: "var(--background)", color: "var(--foreground)" }}>
      <hr className="mt-4 mb-0 w-100" style={{ borderColor: "var(--border-color)" }} />

      <div className="container-fluid footer-gradient pt-4" style={{ overflowX: "hidden" }}>
        <div className="row">
          {/* Left Column */}
          <div className="col-12 col-md-6 mb-4">
            <div className="mb-3">
              <img
                src={theme === "dark" ? "/logo2.png" : "/llogo.png"}
                alt="DaaS Logo"
                style={{ width: "170px", height: "auto", opacity: 1 }}
              />
            </div>

            <p
              className="mb-4 px-2"
              style={{
                maxWidth: "350px",
                color: "var(--footer-text)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              DaaS Tech – Where Problems Meets Possibilities.
            </p>

            <div style={{ maxWidth: "350px" }}>
              <p className="fw-bold px-2 mb-2">Join our newsletter</p>
              <div className="position-relative mb-4 ps-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@email.com"
                  style={{
                    background: "var(--input-bg)",
                    color: "var(--footer-text)",
                    padding: "6px 90px 6px 12px",
                    height: "50px",
                    border: "1px solid var(--border-color)",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
                <button
                  className="btn position-absolute top-0 end-0 mt-1 me-1"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "#fff",
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
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 mb-3">
                <h6 className="fw-bold mt-3">Links</h6>
                <ul className="list-unstyled footer-li" style={{ color: "var(--footer-text)" }}>
                  <li>Services</li>
                  <li>Process</li>
                  <li>Case studies</li>
                  <li>Benefits</li>
                  <li>Pricing</li>
                  
                </ul>
              </div>

              <div className="col-sm-3 col-md-4 mb-3">
                <h6 className="fw-bold mt-3">Pages</h6>
                <ul className="list-unstyled footer-li" style={{ color: "var(--footer-text)" }}>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><a href="/blog" style={{ color: "var(--footer-text)", textDecoration: "none" }}>Blog</a></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/quote">Get a Quote</Link></li>
                </ul>
              </div>

              <div className="col-md-4 mb-3">
                <h6 className="fw-bold mt-3">Socials</h6>
                <ul className="list-unstyled footer-li" style={{ color: "var(--footer-text)" }}>
                  <li><a href="https://g.co/kgs/gLLDsjr" target="_blank" rel="noopener noreferrer">Google Reviews</a></li>
                  <li><a href="https://www.linkedin.com/company/daas-tech-innovations/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://www.facebook.com/61574573447669" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://www.trustpilot.com/review/daastech.info" target="_blank" rel="noopener noreferrer">Trustpilot</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12">
          <ul className="list-unstyled footer-li d-flex justify-content-around m-0" style={{ color: "var(--footer-text)" }}>
            <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <hr className="mt-0 mb-3 w-100" style={{ borderColor: "var(--border-color)" }} />

        <div className="row text-center d-flex justify-content-center text-md-start small" style={{ color: "var(--footer-text)" }}>
          <div className="col-12 col-md-4 px-3 mb-2">Logo by DaaS-Tech</div>
          <div className="col-12 col-md-4 mb-2 d-flex justify-content-center">
            Visioned and Crafted by <b className="ms-2">Taimoor Gill</b>
          </div>
          <div className="col-12 col-md-4 mb-2 d-flex justify-content-end">
            <div>© All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
