import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  return (
    <div
      className="min-vh-100 py-5"
      style={{ background: "#000", color: "#fff" }}
    >
      <div className="container text-center mb-4">
        <button className="btn btn-outline-light mb-3">Contact</button>
        <h1 className="fw-bold display-3 mb-3" style={{ fontFamily: "inherit" }}>
          Get in Touch with Us
        </h1>
        <p className="fs-5 mb-0" style={{ color: "#d1d1d1" }}>
          Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch!
        </p>
      </div>

      <div className="container mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <div
              className="p-3 rounded-3 h-100 d-flex flex-column justify-content-center"
              style={{
                background: "linear-gradient(90deg, #181028 80%, #a259ff 120%)",
                minHeight: "90px",
              }}
            >
              <div className="d-flex align-items-center mb-1">
                <i className="bi bi-envelope-fill me-2 fs-5"></i>
                <h6 className="mb-0 fw-bold">E-mail</h6>
              </div>
              <p className="mb-0 ms-4" style={{ color: "#fff" }}>
                Admin@xtract.com
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="p-3 rounded-3 h-100 d-flex flex-column justify-content-center"
              style={{
                background: "linear-gradient(90deg, #181028 80%, #a259ff 120%)",
                minHeight: "90px",
              }}
            >
              <div className="d-flex align-items-center mb-1">
                <i className="bi bi-telephone-fill me-2 fs-5"></i>
                <h6 className="mb-0 fw-bold">Phone</h6>
              </div>
              <p className="mb-0 ms-4" style={{ color: "#fff" }}>
                +1(969) 819-8061
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <form
          className="bg-black p-4 rounded-3 shadow-sm"
          style={{
            maxWidth: "100%",
            border: "none",
            boxShadow: "0 2px 16px 0 #181028",
          }}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label fw-semibold">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control bg-dark text-white border-0"
                placeholder="Jane"
                style={{ height: "48px", fontSize: "1rem" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label fw-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control bg-dark text-white border-0"
                placeholder="Smith"
                style={{ height: "48px", fontSize: "1rem" }}
              />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control bg-dark text-white border-0"
                placeholder="Jane@mail.com"
                style={{ height: "48px", fontSize: "1rem" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label fw-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control bg-dark text-white border-0"
                placeholder="+1(969) 819-8061"
                style={{ height: "48px", fontSize: "1rem" }}
              />
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="message" className="form-label fw-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="form-control bg-dark text-white border-0"
              placeholder="Hi, I am Jane. I want help with…"
              style={{ fontSize: "1rem", minHeight: "80px" }}
            ></textarea>
          </div>

          <div className="d-grid mt-3">
            <button
              type="submit"
              className="btn"
              style={{
                background: "#a259ff",
                color: "#fff",
                fontWeight: "600",
                fontSize: "1rem",
                height: "44px",
                border: "none",
              }}
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}