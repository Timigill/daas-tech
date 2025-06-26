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
      const res = await fetch("/api/blogs", {
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
        onBlogAdded(); // Refetch blogs
      } else {
        toast.error(data.message || "Failed to add blog");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark p-4 rounded mb-5 text-white">
      <h4 className="mb-3">Add New Blog</h4>

      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Meta Description</label>
        <input
          type="text"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="form-control"
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Blog
      </button>
    </form>
  );
};

export default AdminAddBlogForm;
