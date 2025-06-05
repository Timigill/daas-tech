'use client';
import React, { useState } from "react";

export default function InternHireForm() {
  const [form, setForm] = useState({
    legalName: "",
    phone: "",
    address: "",
    email: "",
    lastDegree: "",
    experience: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Submit logic here
    setSubmitted(true);
  }

  return (
    <div className="bg-dark py-5"><section
      className="d-flex flex-column align-items-center text-center"
      style={{
        padding: "48px 0",
        background: "#111114",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        borderRadius: 18,
        margin: "0px auto",
        maxWidth: 500,
        boxShadow: "0 8px 40px 0 rgba(0,0,0,0.25)",
      }}
    >
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 10 }}>
        Intern Application Form
      </h2>
      <p style={{ color: "#bdbdbd", marginBottom: 24 }}>
        Apply for an internship (MERN stack or related fields)
      </p>
      {submitted ? (
        <div style={{ color: "#8b5cf6", fontWeight: 600, fontSize: 18 }}>
          Thank you for applying! We will get in touch soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: 400, textAlign: "left" }}
          autoComplete="off"
        >
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500 }}>Legal Name</label>
            <input
              type="text"
              name="legalName"
              required
              value={form.legalName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500 }}>Phone No</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500 }}>Address</label>
            <input
              type="text"
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500 }}>Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500 }}>Last Degree</label>
            <input
              type="text"
              name="lastDegree"
              required
              value={form.lastDegree}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontWeight: 500 }}>
              Any Past Experience in MERN stack or other related fields
            </label>
            <textarea
              name="experience"
              required
              value={form.experience}
              onChange={handleChange}
              rows={4}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
                resize: "vertical",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#8b5cf6",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px",
              fontWeight: 600,
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Submit Application
          </button>
        </form>
      )}
    </section></div>
  );
}