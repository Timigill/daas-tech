"use client";

import React, { useEffect, useState, useCallback } from "react";
import BlogCard from "@/app/components/BlogCard";
import { motion } from "framer-motion";
import AdminAddBlogForm from "@/app/components/BlogForm";
import AdminEditBlogForm from "@/app/components/EditBlogForm";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
        // You may want to add authentication headers here if needed
      });

      if (res.ok) {
        fetchBlogs();
      } else {
        const error = await res.json();
        alert("Delete failed: " + error.message);
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
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
        Admin Blogs
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
        Manage Your Blog Content
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
        Create, edit, and manage all your blog posts with full control over your content.
      </motion.p>

      {/* Blog Controls */}
      <div className="w-100 px-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-start">📝 Blog Manager</h3>
          <button
            className="btn btn-outline-light"
            onClick={() => {
              setShowAddForm(!showAddForm);
              setEditingId(null); // Hide edit form if open
            }}
          >
            {showAddForm ? "Close Add Form" : "Add New Blog"}
          </button>
        </div>

        {showAddForm && <AdminAddBlogForm onBlogAdded={fetchBlogs} />}
        {editingId && (
          <AdminEditBlogForm
            blogId={editingId}
            onClose={() => setEditingId(null)}
            onBlogUpdated={fetchBlogs}
          />
        )}

        <div className="container">
          <div className="row gy-4">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  {...blog}
                  isOpen={openCardId === blog._id}
                  onToggle={() => handleToggle(blog._id)}
                  isAdmin={true}
                  onDelete={() => handleDelete(blog._id)}
                  onEdit={() => {
                    setShowAddForm(false);
                    setEditingId(blog._id);
                  }}
                />
              ))
            ) : (
              <p className="text-muted">No blogs available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 