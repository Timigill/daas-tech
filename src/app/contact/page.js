'use client';
import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{ minHeight: "100vh", background: "#000", color: "#fff" }}
    >
      {/* Badge */}
      <motion.span
        className="badge px-3 py-2 mb-2"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{
          fontSize: 12,
          color: "#fff",
          border: "1px solid rgb(17 17 17)",
          borderRadius: 8,
          fontWeight: 500,
        }}
      >
        Contact
      </motion.span>

      {/* Heading */}
      <motion.h1
        className="fw-bold display-3 mb-3"
        variants={fadeInUp}
        custom={0.5}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "#fff",
          maxWidth: 700,
          margin: "0 auto",
          fontSize: "2.5rem",
        }}
      >
        Get in Touch with Us
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        className="mb-4"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
        style={{
          color: "#d1d1d1",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        Have questions or need AI solutions? Let us know by filling out the form,
        and we’ll be in touch!
      </motion.p>

      {/* Contact Info Cards */}
      <div className="container px-3 px-md-4 mb-4" >
        <div className="row g-3 justify-content-center">
          {/* Email */}
          <motion.div
            className="col-12 col-md-6 col-lg-4"
            variants={fadeInUp}
            custom={1.5}
            viewport={{ once: true }}
          >
            <div
              className="p-4 shadow rounded text-white h-100"
              style={{
                border: "1px solid #222",
                background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
              }}
            >
              <div className="d-flex align-items-center mb-1">
                <i className="bi bi-envelope-fill me-3 fs-5"></i>
                <div className="text-start">
                  <h6 className="mb-0 fw-bold" style={{ fontSize: 15 }}>
                    E-mail
                  </h6>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    founder@daastech.info
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="col-12 col-md-6 col-lg-4"
            variants={fadeInUp}
            custom={2}
            viewport={{ once: true }}
          >
            <div
              className="p-4 shadow rounded text-white h-100"
              style={{
                border: "1px solid #222",
                background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
              }}
            >
              <div className="d-flex align-items-center mb-1">
                <i className="bi bi-telephone-fill me-3 fs-5"></i>
                <div className="text-start">
                  <h6 className="mb-0 fw-bold" style={{ fontSize: 15 }}>
                    Phone
                  </h6>
                  <p className="mb-0" style={{ fontSize: 14 }}>
                    +92 3188672096
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container px-3 px-md-4" style={{ maxWidth: 780 }}>
        <motion.form
          className="bg-black p-4 rounded-3 shadow-sm w-100"
          variants={fadeInUp}
          custom={2.5}
          viewport={{ once: true }}
          style={{
            border: "1px solid #222",
            boxShadow: "0 2px 16px 0 #181028",
            // background: "linear-gradient(to top right, rgba(164, 122, 255, 0.08), #000 90%)",
          }}
        >
          <div className="row g-3">
            <div className="col-md-6">
             <div className="text-start"><label htmlFor="firstName" className="form-label fw-semibold " style={{ fontSize: 14 }}>
                First Name
              </label></div> 
              <input
                type="text"
                id="firstName"
                className="form-control bg-dark text-white border-0"
                placeholder="Jane"
                style={{ height: "38px", fontSize: "0.9rem" }}
              />
            </div>
            <div className="col-md-6">
              <div className="text-start"><label htmlFor="lastName" className="form-label fw-semibold text-start" style={{ fontSize: 14 }}>
                Last Name
              </label></div>
              <input
                type="text"
                id="lastName"
                className="form-control bg-dark text-white border-0"
                placeholder="Smith"
                style={{ height: "38px", fontSize: "0.9rem" }}
              />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
             <div className="text-start"><label htmlFor="email" className="form-label fw-semibold text-start" style={{ fontSize: 14 }}>
                Email
              </label></div> 
              <input
                type="email"
                id="email"
                className="form-control bg-dark text-white border-0"
                placeholder="Jane@mail.com"
                style={{ height: "38px", fontSize: "0.9rem" }}
              />
            </div>
            <div className="col-md-6">
             <div className="text-start"><label htmlFor="phone" className="form-label fw-semibold text-start" style={{ fontSize: 14 }}>
                Phone
              </label></div> 
              <input
                type="tel"
                id="phone"
                className="form-control bg-dark text-white border-0"
                placeholder="+1(969) 819-8061"
                style={{ height: "38px", fontSize: "0.9rem" }}
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="text-start"><label htmlFor="message" className="form-label fw-semibold text-start" style={{ fontSize: 14 }}>
              Message
            </label></div>
            <textarea
              id="message"
              rows={3}
              className="form-control bg-dark text-white border-0"
              placeholder="Hi, I am Jane. I want help with…"
              style={{ fontSize: "0.9rem", minHeight: "80px" }}
            ></textarea>
          </div>

          <div className="d-grid mt-3">
            <button
              type="submit"
              className="btn"
              style={{
              background: "linear-gradient(to bottom right, rgba(164, 122, 255, 0.4), rgba(0, 0, 0, 1))",                color: "#fff",
                fontWeight: "600",
                fontSize: "1rem",
                height: "44px",
                border: "none",
                borderRadius: 8,
              }}
            >
              Submit Form
            </button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
