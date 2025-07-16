"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";

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
        Unlock your Potiential with us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ fontSize: 15, color: "#bdbdbd", maxWidth: 600, margin: "0 auto 40px auto" }}
      >
        Stay informed with the latest trends, insights, and strategies to drive innovation and business growth.
      </motion.p>

      <div className="container">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <li key={blog._id} style={{
                padding: '0',
                border: 'none',
                background: 'none',
                margin: 0,
              }}>
                <Link href={`/blog/${blog._id}`} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid #23232a', gap: 20, width: '100%', textDecoration: 'none', color: 'inherit' }}>
                  {/* Cover image thumbnail */}
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt="cover"
                      style={{
                        width: 72,
                        height: 40,
                        objectFit: 'cover',
                        borderRadius: 8,
                        marginRight: 18,
                        background: '#181622',
                        boxShadow: '0 1px 6px rgba(0,0,0,0.10)',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ fontWeight: 600, fontSize: 18, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.title}</div>
                    {blog.content && (
                      <div style={{ fontSize: 15, color: '#bdbdbd', margin: '2px 0 0 0', whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {(() => {
                          // Strip HTML tags from content
                          const text = blog.content.replace(/<[^>]+>/g, '');
                          return text.length > 240 ? text.slice(0, 240) + '...' : text;
                        })()}
                      </div>
                    )}
                    <div style={{ fontSize: 14, color: '#bdbdbd', marginTop: 2 }}>
                      {blog.date?.slice(0, 10)} | {blog.category}
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li><p className="text-muted">No blogs available.</p></li>
          )}
        </ul>
      </div>
    </section>
  );
}