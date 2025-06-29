"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./adminLogin.module.scss";
import Image from "next/image";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Welcome back, admin!");
        localStorage.setItem("adminToken", data.token);
        window.location.href = "/admin/dashboard";
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{
          minHeight: "100vh",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <motion.div
          style={{
            background: "transparent",
            borderRadius: 18,
            boxShadow: "0 8px 40px 0 rgba(0,0,0,0.25)",
            display: "flex",
            border: "1px solid #23232a",
            width: "900px",
            maxWidth: "98vw",
            minHeight: "500px",
            overflow: "hidden",
          }}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Login Form */}
          <div
            style={{
              flex: 1,
              background: "#000",
              color: "#fff",
              padding: "40px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 340,
            }}
          >
            <div style={{ marginBottom: 32 }}>
              <Image src="/logo.jpg" alt="DaaS Tech" width={120} height={40} style={{ width: 120, marginBottom: 24 }} />
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 26, marginBottom: 8 }}>Welcome!</h2>
            <p style={{ color: "#bebaba", fontSize: 14, marginBottom: 24 }}>
              Log in to continue to Admin Panel.
            </p>
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 14, color: "#bebaba" }}>Email</label>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid #23232a",
                    background: "#181622",
                    color: "#fff",
                    marginTop: 4,
                    fontSize: 15,
                  }}
                />
              </div>
              <div style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 14, color: "#bebaba" }}>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid #23232a",
                    background: "#181622",
                    color: "#fff",
                    marginTop: 4,
                    fontSize: 15,
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
                <a href="#" style={{ color: "#8b5cf6", fontSize: 13, textDecoration: "none", opacity: 0.8 }}>
                  Forgot password?
                </a>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
                  marginBottom: 12,
                }}
              >
                Log in
              </motion.button>
            </form>
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <span style={{ color: "#bebaba", fontSize: 13 }}>
                Don&apos;t have an account?{" "}
                <a href="#" style={{ color: "#8b5cf6", textDecoration: "none" }}>
                  Sign up
                </a>
              </span>
            </div>
          </div>
          {/* Right: Banner */}
          <motion.div
            style={{
              flex: 1,
              background: "linear-gradient(135deg, rgba(164, 122, 255, 0.1) 0%, #000 50%, rgba(164, 122, 255, 0.2) 100%)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              padding: "4.5rem 20px",
              minWidth: 350,
              overflow: "hidden", // Ensure child absolutely positioned image is clipped
            }}
            variants={rightVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Background Image */}
            <Image
              src="/Loginbg.jpg"
              alt="DaaS Tech"
              fill
              style={{
                position: "absolute",
                inset: 0,
                objectFit: "cover",
                opacity: 0.2,
                zIndex: 1,
                borderRadius: "0",
                pointerEvents: "none",
              }}
              priority
            />
            {/* Content */}
            <div style={{ zIndex: 2, textAlign: "center", position: "relative" }}>
              <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 12 }}>
                400K+ users. 50M+ Custom
                <br />Websites Build.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}>
                Join our community of developers and start building your
                website today!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
