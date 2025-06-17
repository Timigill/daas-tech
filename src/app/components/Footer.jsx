import React from "react";
import "../globals.css";

function Footer() {
  return (
    <div className="footer pt-56px pb-48px">
      <div className="upperP row p-5">
        <div className="upperPLeft col-12 col-md-6">
          <div className="footer-logo-section">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="footer-logo w-25 h-25 px-3"
            />
            <div className="footer-brand">
              {/* <div className="footer-brand-title">TAIMOOR</div> */}
              <div className="footer-brand-desc w-50 text-wrap">
                Xtract – Automate Smarter, Optimize Faster, and Grow Stronger.
              </div>
            </div>
            <div className="footer-newsletter text-white mt-4">
              <div className="footer-newsletter-title mb-2 fw-bold">
                Join our newsletter
              </div>
              <div className="position-relative d-flex justify-content-center align-items-center" style={{ maxWidth: "350px" }}>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-0 rounded px-2 small"
                  placeholder="name@email.com"
                  id="newsletterEmail"
                  style={{
                    backgroundColor: "#2c3e50",
                    // borderRadius: "8px",
                    padding: "6px 90px 6px 12px", // right padding zyada for button
                    height: "42px",
                  }}
                />
                <button
                  className="btn text-white position-absolute top-0 end-0"
                  type="button"
                  style={{
                    backgroundColor: "#9b59b6",
                    padding: "6px 22px",
                    height: "32px",
                    margin: "5px 4px 2px 2px",
                    fontSize: "0.95rem",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="upperPRight col-12 col-md-6">
          <div className="footer-links-section row">
            <div className="footer-links col-12 col-md-4">
              <div className="footer-links-title">Links</div>
              <ul className="list-unstyled">
                <li>Services</li>
                <li>Process</li>
                <li>Case studies</li>
                <li>Benefits</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="footer-pages col-12 col-md-4">
              <div className="footer-links-title">Pages</div>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>404</li>
              </ul>
            </div>
            <div className="footer-socials col-12 col-md-4">
              <div className="footer-links-title">Socials</div>
              <ul className="list-unstyled">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerP" style={{ fontSize: "small" }}>
        <div className="footer-lower row">
          <div className="footer-lower-left col">Logo by flaticon</div>
          <div className="footer-lower-center col">
            Visioned and Crafted by <b>Kanishk Dubey</b>
          </div>
          <div className="footer-lower-right col">© All right reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
