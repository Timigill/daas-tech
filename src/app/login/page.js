"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";

// Theme detection hook
const useThemeFromHtmlClass = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
};

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
  const theme = useThemeFromHtmlClass();

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
        window.location.href = "/admin";
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        style={{
          minHeight: "100vh",
          background: "var(--background)",
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
            boxShadow: "0 8px 40px 0 var(--boxShadow)",
            display: "flex",
            border: "1px solid var(--border-color)",
            width: "900px",
            maxWidth: "98vw",
            minHeight: "500px",
            overflow: "hidden",
          }}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Form */}
          <div
            style={{
              flex: 1,
              background: "var(--background)",
              color: "var(--foreground)",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 340,
            }}
          >
            <div style={{ marginBottom: 32 }}>
              <Image
                src={theme === "dark" ? "/logo2.png" : "/llogo.png"}
                alt="DaaS Tech"
                width={120}
                height={40}
                style={{ width: 120, marginBottom: 24 }}
              />
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 26, marginBottom: 8 }}>Welcome!</h2>
            <p style={{ color: "var(--muted-text)", fontSize: 14, marginBottom: 24 }}>
              Log in to continue to Admin Panel.
            </p>

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="email" style={{ fontSize: 14, color: "var(--muted-text)" }}>
                  Email
                </label>
                <input
                  // id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    width: "100%",
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid var(--border-color)",
                    background: "var(--input-bg)",
                    color: "var(--muted-text)",
                    marginTop: 4,
                    fontSize: 15,
                  }}
                />
              </div>

              <div style={{ marginBottom: 8 }}>
                <label htmlFor="password" style={{ fontSize: 14, color: "var(--muted-text)" }}>
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid var(--border-color)",
                    background: "var(--input-bg)",
                    color: "var(--muted-text)",
                    marginTop: 4,
                    fontSize: 15,
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
                <Link
                  href="/forgot-password"
                  style={{ color: "var(--accent)", fontSize: 13, textDecoration: "none", opacity: 0.8 }}
                >
                  Forgot password?
                </Link>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%",
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                Log in
              </motion.button>
            </form>

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <span style={{ color: "var(--muted-text)", fontSize: 13 }}>
                Don&apos;t have an account?{" "}
                <Link href="/signup" style={{ color: "var(--accent)", textDecoration: "none" }}>
                  Sign up
                </Link>
              </span>
            </div>
          </div>

          {/* Right Side - Banner */}
          <motion.div
            style={{
              flex: 1,
              background: "linear-gradient(135deg, var(--grad4) 0%, var(--grad3) 50%, var(--grad4) 100%)",
              color: "var(--foreground)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              padding: "4.5rem 20px",
              minWidth: 350,
              overflow: "hidden",
            }}
            variants={rightVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Background Image */}
            <Image
              src="/Loginbg.jpg"
              alt="Login Background"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                zIndex: -1,
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "var(--overlay-bg)",
                zIndex: -1,
              }}
            />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontWeight: 600, fontSize: 28, marginBottom: 16 }}>
                Welcome to DaaS Tech
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  opacity: 0.9,
                  marginBottom: 24,
                }}
              >
                Access your admin panel to manage content, quotes, and meetings with full control over your platform.
              </p>
              {["Secure authentication", "Full admin control", "Real-time updates"].map((text, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: 12, marginTop: index ? 8 : 0 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }}
                  />
                  <span style={{ fontSize: 14, opacity: 0.8 }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
