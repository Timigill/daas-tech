"use client";

import React, { useEffect, useState, useCallback } from "react";
import BlogCard from "@/app/components/BlogCard";
import { motion } from "framer-motion";
import AdminAddBlogForm from "@/app/components/BlogForm";
import AdminEditBlogForm from "@/app/components/EditBlogForm";
// Simple Modal (copied from EditorToolbar.js for reuse)
function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'var(--background)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#181622', padding: 24, borderRadius: 10, minWidth: 320, boxShadow: '0 4px 32px var(--boxShadow)', color: 'var(--foreground)', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 12, background: 'none', border: 'none', color: 'var(--foreground)', fontSize: 20, cursor: 'pointer' }}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

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
    setDeleting(true);
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
        credentials: "include",
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
    setDeleting(false);
    setPendingDeleteId(null);
  };

  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{
        padding: "48px 0",
        background: "var(--background)",
        color: "var(--foreground)",
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
          color: "var(--muted-text)",
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
            className="btn"
            onClick={() => {
              setShowAddForm(!showAddForm);
              setEditingId(null); // Hide edit form if open
            }}
            style={{color:"var(--foreground)",
              background:"var(--background)",
              border:"2px solid var(--border-color)"
            }}
          >
            {showAddForm ? "Close Add Form" : "Add New Blog"}
          </button>
        </div>

        {showAddForm && <AdminAddBlogForm onBlogAdded={fetchBlogs} onClose={() => setShowAddForm(false)} />}
        {editingId && (
          <AdminEditBlogForm
            blogId={editingId}
            onClose={() => setEditingId(null)}
            onBlogUpdated={fetchBlogs}
          />
        )}

        <div className="container">
          {/* Blog List (not grid) */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <li key={blog._id} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--accent)',
                  gap: 20,
                  width: '100%',
                }}>
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
                        background: 'var(--background)',
                        boxShadow: '0 1px 6px var(--boxShadow)',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ fontWeight: 600, fontSize: 18, color: 'var(--foreground)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.title}</div>
                    {blog.content && (
                      <div style={{ fontSize: 15, color: 'var(--muted-text)', margin: '2px 0 0 0', whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {(() => {
                          // Strip HTML tags from content
                          const text = blog.content.replace(/<[^>]+>/g, '');
                          return text.length > 120 ? text.slice(0, 240) + '...' : text;
                        })()}
                      </div>
                    )}
                    <div style={{ fontSize: 14, color: 'var(--muted-text)', marginTop: 2 }}>
                      {blog.date?.slice(0, 10)} | {blog.category}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginLeft: 8 }}>
                    <button
                      className="btn btn-sm btn-outline-info"
                      style={{border:"2px solid var(--border-color)"}}
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingId(blog._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => setPendingDeleteId(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li><p className="text-muted">No blogs available.</p></li>
            )}
          </ul>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      <Modal open={!!pendingDeleteId} onClose={() => setPendingDeleteId(null)}>
        <div style={{ textAlign: 'center', minWidth: 260 }}>
          <h5 style={{ color: 'var(--foreground)', marginBottom: 16 }}>Delete Blog?</h5>
          <p style={{ color: 'var(--muted-text)', marginBottom: 24 }}>Are you sure you want to delete this blog? This action cannot be undone.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button
              className="btn btn-danger"
              style={{ minWidth: 90 }}
              onClick={() => handleDelete(pendingDeleteId)}
              disabled={deleting}
            >
              {deleting ? 'Deleting...' : 'Yes, Delete'}
            </button>
            <button
              className="btn btn-secondary"
              style={{ minWidth: 90 }}
              onClick={() => setPendingDeleteId(null)}
              disabled={deleting}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
} 