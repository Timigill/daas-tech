'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

if (typeof window !== "undefined") {
  const styleId = "hide-country-names";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .react-phone-input-2 .country-list .country .country-name {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}

export default function Contact() {
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // Remove non-digits for phone validation
    const phoneDigits = phone.replace(/\D/g, "");

    // Validation
    if (!firstName) {
      toast.error("First name is required.");
      return;
    }
    if (!lastName) {
      toast.error("Last name is required.");
      return;
    }
    if (!email) {
      toast.error("Email is required.");
      return;
    }
    // Simple email regex
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!phoneDigits || phoneDigits.length < 7) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (!message) {
      toast.error("Message is required.");
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(resData.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    }
  };


  return (
    <motion.div
      className="d-flex flex-column align-items-center text-center py-5 px-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      style={{ minHeight: "100vh", background: "#000", color: "#fff" }}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        toastStyle={{
          background: "#181622",
          color: "#fff",
          borderRadius: 8,
          textAlign: "left",
          fontFamily: 'Inter, sans-serif',
          fontSize: '1rem',
          boxShadow: '0 2px 16px 0 #181028',
          border: '1px solid #8b5cf6',
        }}
        bodyStyle={{ textAlign: "left" }}
        progressStyle={{ background: "#8b5cf6" }}
      />
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
        Have questions or need solutions? Let us know by filling out the form,
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
          onSubmit={handleSubmit}

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
              <PhoneInput
                country={'pk'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  textAlign: "left",
                  width: "100%",
                  height: "38px",
                  background: "#212529",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: "0.9rem"
                }}
                buttonStyle={{
                  background: "#181028",
                  border: "none"
                }}
                dropdownStyle={{
                  background: "#181028",
                  color: "#fff"
                }}
                containerStyle={{
                  width: "100%"
                }}
                inputClass="bg-dark text-white"
                placeholder="+1(969) 819-8061"
                enableSearch={false}
                // Hide country names in dropdown
                renderCountry={(country) => (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className={`flag ${country.iso2}`}></div>
                    <span style={{ color: "#fff" }}>+{country.dialCode}</span>
                  </div>
                )}
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
                background: "linear-gradient(to bottom right, rgba(164, 122, 255, 0.4), rgba(0, 0, 0, 1))", color: "#fff",
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
      <style>
        {`
.react-phone-input-2 .country-list .country .country-name {
  display: none !important;
}
`}
      </style>
    </motion.div>
  );
}
