
"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const [theme, setTheme] = useState("dark");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Detect theme on mount
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

const handleSubscribe = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  // Trim only leading spaces
  const cleanedEmail = email.trimStart();
  setEmail(cleanedEmail);

  if (!cleanedEmail) {
    setError("Email is required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanedEmail)) {
    setError("Invalid email address.");
    return;
  }

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cleanedEmail }),
    });

    if (res.ok) {
      setSuccess("Thanks for subscribing!");
      setEmail(""); // reset input
    } else {
      setError("Something went wrong. Try again later.");
    }
  } catch (err) {
    setError("Server error. Please try again.");
  }
};



  return (
    <footer
      className="footer-section footer-gradient"
      style={{
        padding: "12px 30px",
        // background: "var(--background)",

        color: "var(--foreground)",
      }}
    >
      <hr
        className="mt-4 mb-0 w-100"
        style={{ borderColor: "var(--border-color)" }}
      />

      <div
        className="container-fluid  pt-4"
        style={{ overflowX: "hidden" }}
      >
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
              <div className="position-relative mb-2 ps-2">
                {/* <input
                  type="email"
                  className="form-control"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: "var(--input-bg)",
                    color: "var(--footer-text)",
                    padding: "6px 90px 6px 12px",
                    height: "50px",
                    border: "1px solid var(--border-color)",
                    outline: "none",
                    boxShadow: "none",
                  }}
                /> */}

                <input
                  type="email"
                  className="form-control"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trimStart())}
                  // trims spaces from start while typing
                  aria-label="Email address"
                  required
                  autoComplete="email"
                  style={{
                    background: "var(--input-bg)",
                    color: "var(--footer-text)",
                    padding: "6px 90px 6px 12px",
                    height: "50px",
                    border: "1px solid var(--border-color)",
                    outline: "none",
                    boxShadow: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
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
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
          </div>

          {/* Right Column */}



          <div className="col-6 col-md-12 footer-links">
            <div className="row ">
              <div className="col-4 mb-3">
                <h6 className="fw-bold mt-3 footerh6">Links</h6>
                <ul
                  className="list-unstyled footer-li"
                  style={{ color: "var(--footer-text)" }}
                >
                  <li>Services</li>
                  <li>Process</li>
                  <li>Case studies</li>
                  <li>Benefits</li>
                  <li>Pricing</li>
                </ul>
              </div>

              <div className="col-4  mb-3">
                <h6 className="fw-bold mt-3 footerh6">Pages</h6>
                <ul
                  className="list-unstyled footer-li"
                  style={{ color: "var(--footer-text)" }}
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      style={{
                        color: "var(--footer-text)",
                        textDecoration: "none",
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/quote">Get a Quote</Link>
                  </li>
                </ul>
              </div>

              <div className="col-4  mb-3">
                <h6 className="fw-bold mt-3 footerh6">Socials</h6>
                <ul
                  className="list-unstyled footer-li"
                  style={{ color: "var(--footer-text)" }}
                >
                  <li>
                    <a
                      href="https://g.co/kgs/gLLDsjr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/daas-tech-innovations/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/61574573447669"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.trustpilot.com/review/daastech.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trustpilot
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="mt-0 mb-3 w-100"
          style={{ border: "1px solid var(--border-color)" }}
        />
        <div className="col-12 col-md-12  w-100 ">
          <ul
            className="list-unstyled footer-li d-flex  m-0  justify-content-around w-100"
            style={{ color: "var(--footer-text)" }}
          >
            <li>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <hr
          className="mt-0 mb-3 w-100"
          style={{ border: "1px solid var(--border-color)" }}
        />

        <div
          className="row text-center d-flex justify-content-center text-md-start small"
          style={{ color: "var(--footer-text)" }}
        >
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
