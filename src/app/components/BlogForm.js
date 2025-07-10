"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";
import TextAlign from "@tiptap/extension-text-align";
import EditorToolbar from "@/app/components/EditorToolbar";

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcawsddxm/upload';
const CLOUDINARY_PRESET = 'DaaS Tech';

const AdminAddBlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    metaDescription: "",
    date: "",
    image: "",
    content: "",
    category: "",
    tags: "",
    seoTitle: "",
    seoKeywords: "",
    attachment: "",
  });
  const [preview, setPreview] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [attachmentUploading, setAttachmentUploading] = useState(false);
  const [errors, setErrors] = useState({});

  // Tiptap editor
 const editor = useEditor({
  extensions: [
    StarterKit,
    Underline,
    Link.configure({ openOnClick: false }),
    Image,
    CodeBlock,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
  ],
  content: formData.content,
  onUpdate: ({ editor }) => {
    setFormData((prev) => ({ ...prev, content: editor.getHTML() }));
  },
});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Cloudinary image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setErrors((prev) => ({ ...prev, image: undefined }));
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_PRESET);
    try {
      const res = await fetch(CLOUDINARY_URL, { method: 'POST', body: data });
      const json = await res.json();
      if (json.secure_url) {
        setFormData((prev) => ({ ...prev, image: json.secure_url }));
      } else {
        setErrors((prev) => ({ ...prev, image: 'Image upload failed' }));
      }
    } catch {
      setErrors((prev) => ({ ...prev, image: 'Image upload failed' }));
    }
    setUploading(false);
  };

  // Cloudinary file attachment upload
  const handleAttachmentUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAttachmentUploading(true);
    setErrors((prev) => ({ ...prev, attachment: undefined }));
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_PRESET);
    try {
      const res = await fetch(CLOUDINARY_URL, { method: 'POST', body: data });
      const json = await res.json();
      if (json.secure_url) {
        setFormData((prev) => ({ ...prev, attachment: json.secure_url }));
      } else {
        setErrors((prev) => ({ ...prev, attachment: 'File upload failed' }));
      }
    } catch {
      setErrors((prev) => ({ ...prev, attachment: 'File upload failed' }));
    }
    setAttachmentUploading(false);
  };

  // Validation
  const validate = () => {
    const errs = {};
    if (!formData.title) errs.title = 'Title is required';
    if (!formData.metaDescription) errs.metaDescription = 'Meta description is required';
    if (!formData.image) errs.image = 'Image is required';
    if (!formData.date) errs.date = 'Date is required';
    if (!formData.category) errs.category = 'Category is required';
    if (!formData.content || formData.content === '<p></p>') errs.content = 'Content is required';
    return errs;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
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
          tags: "",
          seoTitle: "",
          seoKeywords: "",
          attachment: "",
        });
        if (editor) editor.commands.setContent('');
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
        {errors.title && <div className="text-danger small">{errors.title}</div>}
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
        {errors.metaDescription && <div className="text-danger small">{errors.metaDescription}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Image Upload</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="form-control"
          style={inputStyle}
        />
        {uploading && <div className="text-info small">Uploading image...</div>}
        {formData.image && <img src={formData.image} alt="Blog" style={{ maxWidth: 120, marginTop: 8, borderRadius: 8 }} />}
        {errors.image && <div className="text-danger small">{errors.image}</div>}
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
        {errors.date && <div className="text-danger small">{errors.date}</div>}
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
        {errors.category && <div className="text-danger small">{errors.category}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Tags (comma-separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>SEO Title</label>
        <input
          type="text"
          name="seoTitle"
          value={formData.seoTitle}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>SEO Keywords (comma-separated)</label>
        <input
          type="text"
          name="seoKeywords"
          value={formData.seoKeywords}
          onChange={handleChange}
          className="form-control"
          style={inputStyle}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Attachment (PDF, DOCX, etc.)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
          onChange={handleAttachmentUpload}
          className="form-control"
          style={inputStyle}
        />
        {attachmentUploading && <div className="text-info small">Uploading file...</div>}
        {formData.attachment && <a href={formData.attachment} target="_blank" rel="noopener noreferrer" className="d-block mt-2" style={{ color: '#8b5cf6' }}>View Attachment</a>}
        {errors.attachment && <div className="text-danger small">{errors.attachment}</div>}
      </div>

      <div className="mb-4">
  <label className="form-label" style={labelStyle}>Content</label>
  <div style={{ background: "#181622", padding: "12px", borderRadius: 8, border: "1px solid #8b5cf6" }}>
    <EditorToolbar editor={editor} />
    <EditorContent editor={editor} />
  </div>
  {errors.content && <div className="text-danger small">{errors.content}</div>}
</div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#8b5cf6", border: "none" }}>
          Add Blog
        </button>
        <button type="button" className="btn btn-outline-info" onClick={() => setPreview(true)}>
          Preview
        </button>
      </div>

      {/* Preview Modal/Section */}
      {preview && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#181622', borderRadius: 12, padding: 32, maxWidth: 700, width: '100%', color: '#fff', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setPreview(false)} style={{ position: 'absolute', top: 16, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>&times;</button>
            <h2>{formData.title}</h2>
            <div className="mb-2 text-white-50">{formData.date} | {formData.category}</div>
            {formData.image && <img src={formData.image} alt="Blog" style={{ maxWidth: '100%', borderRadius: 8, marginBottom: 16 }} />}
            <div className="mb-2"><strong>Tags:</strong> {formData.tags}</div>
            <div className="mb-2"><strong>SEO Title:</strong> {formData.seoTitle}</div>
            <div className="mb-2"><strong>SEO Keywords:</strong> {formData.seoKeywords}</div>
            <div className="mb-2"><strong>Meta Description:</strong> {formData.metaDescription}</div>
            <div className="mb-2"><strong>Attachment:</strong> {formData.attachment && <a href={formData.attachment} target="_blank" rel="noopener noreferrer" style={{ color: '#8b5cf6' }}>View</a>}</div>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: formData.content }} />
          </div>
        </div>
      )}
    </form>
  );
};

export default AdminAddBlogForm;
