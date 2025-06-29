"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminAddBlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    metaDescription: "",
    date: "",
    image: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    if (!token) {
      toast.error("Admin token not found. Please login.");
      return;
    }

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog added successfully!");
        setFormData({
          title: "",
          metaDescription: "",
          date: "",
          image: "",
          content: "",
          category: "",
        });
        onBlogAdded();
      } else {
        toast.error(data.message || "Failed to add blog");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const inputStyle = {
    backgroundColor: "#111",
    color: "#fff",
    border: "1px solid #8b5cf6",
  };

  const labelStyle = {
    color: "#8b5cf6",
    fontWeight: "500",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded mb-5"
      style={{ backgroundColor: "#000", color: "#fff", border: "1px solid #8b5cf6" }}
    >
      <h4 className="mb-4" style={{ color: "#8b5cf6" }}>Add New Blog</h4>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Meta Description</label>
        <input
          type="text"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label className="form-label" style={labelStyle}>Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="form-control"
          style={inputStyle}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#8b5cf6", border: "none" }}>
        Add Blog
      </button>
    </form>
  );
};

export default AdminAddBlogForm;
