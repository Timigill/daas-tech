"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminDashboard() {
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        toast.success("Logged out successfully!");
        // Redirect to home page after a short delay
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong during logout.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="d-flex flex-column align-items-center text-center px-3"
        style={{
          padding: "48px 0",
          background: "#000",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          overflowX: "hidden",
        }}
      >
        <motion.span
          className="badge mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(139,92,246,0.15)",
            color: "#8b5cf6",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: 1,
            padding: "8px 18px",
            borderRadius: 20,
          }}
        >
          Admin Dashboard
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 700,
          }}
        >
          Manage Your Platform Seamlessly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: 15,
            color: "#bdbdbd",
            maxWidth: 600,
            margin: "0 auto 40px auto",
          }}
        >
          Control your content with full authority — blogs, meetings, and motivational quotes all in one place.
        </motion.p>

        {/* Navigation Cards */}
        <div className="w-100 px-4 mb-5">
          <div className="row g-4 justify-content-center">
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/admin/quotes" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="p-4 h-100"
                  style={{
                    background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(164, 122, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3 className="mb-3">📌 Quote Requests</h3>
                  <p className="text-white-50 mb-0">Manage and review all quote requests from potential clients.</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/admin/meetings" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="p-4 h-100"
                  style={{
                    background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(164, 122, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3 className="mb-3">📅 Meeting Requests</h3>
                  <p className="text-white-50 mb-0">View and manage all meeting requests from clients and prospects.</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/admin/blogs" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="p-4 h-100"
                  style={{
                    background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(164, 122, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3 className="mb-3">📝 Blog Manager</h3>
                  <p className="text-white-50 mb-0">Create, edit, and manage all your blog posts with full control over your content.</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/admin/jobs" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="p-4 h-100"
                  style={{
                    background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(164, 122, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3 className="mb-3">💼 Job Openings</h3>
                  <p className="text-white-50 mb-0">Add, edit, or remove job openings for your company.</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Logout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-5"
        >
          <button
            onClick={handleLogout}
            style={{
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(239, 68, 68, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.3)";
            }}
          >
            🚪 Logout
          </button>
        </motion.div>
      </section>
    </>
  );
}
