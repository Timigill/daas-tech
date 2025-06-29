"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{ padding: "48px 0", background: "#000", color: "#fff", fontFamily: "Inter, sans-serif" }}
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
        Blog
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ fontWeight: 700, lineHeight: 1.15, marginBottom: 16, maxWidth: 700 }}
      >
        Unlock AI insights with us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ fontSize: 15, color: "#bdbdbd", maxWidth: 600, margin: "0 auto 40px auto" }}
      >
        Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth.
      </motion.p>

      <div className="container">
        <div className="row gy-4">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}