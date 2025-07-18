"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Strike from "@tiptap/extension-strike";
import EditorToolbar from "@/app/components/EditorToolbar";
import { CustomImage } from "@/app/extensions/CustomImage";
const AdminEditBlogForm = ({ blogId, onClose, onBlogUpdated }) => {
  const [formData, setFormData] = useState({
    title: "",
    metaDescription: "",
    date: "",
    image: "",
    content: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);

  const editor = useEditor({
  extensions: [
    StarterKit,
    Underline,
    Link.configure({ openOnClick: false }),
    CustomImage,
    CodeBlock,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Color,
    Highlight.configure({ multicolor: true }),
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    Strike,
  ],
  content: formData.content,
  onUpdate: ({ editor }) => {
    setFormData((prev) => ({ ...prev, content: editor.getHTML() }));
  },
});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/${blogId}`);
        const data = await res.json();
        setFormData({
          title: data.title,
          metaDescription: data.metaDescription || "",
          date: data.date?.slice(0, 10) || "",
          image: data.image || "",
          content: data.content || "",
          category: data.category || "",
        });
        // ✅ Set content in TipTap editor
        editor?.commands.setContent(data.content || "");
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load blog data");
        setLoading(false);
      }
    };

    if (blogId && editor) fetchBlog();
  }, [blogId, editor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(`/api/blog/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog updated successfully!");
        onClose();
        onBlogUpdated();
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
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

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <form
      onSubmit={handleUpdate}
      className="p-4 rounded mb-5"
      style={{ backgroundColor: "#000", color: "#fff", border: "1px solid #8b5cf6" }}
    >
      <h4 className="mb-4" style={{ color: "#8b5cf6" }}>Edit Blog</h4>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" style={inputStyle} required />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Meta Description</label>
        <input type="text" name="metaDescription" value={formData.metaDescription} onChange={handleChange} className="form-control" style={inputStyle} />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Image URL</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} className="form-control" style={inputStyle} />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" style={inputStyle} required />
      </div>

      <div className="mb-3">
        <label className="form-label" style={labelStyle}>Category</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} className="form-control" style={inputStyle} />
      </div>

      {/* ✅ TipTap Rich Text Editor */}
      <div className="mb-4">
  <label className="form-label" style={labelStyle}>Content</label>
  <div style={{ background: "#181622", padding: "12px", borderRadius: 8, border: "1px solid #8b5cf6" }}>
    <EditorToolbar editor={editor} />
    <EditorContent editor={editor} />
  </div>
</div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#8b5cf6", border: "none" }}>
          Update Blog
        </button>
        <button type="button" onClick={onClose} className="btn btn-outline-light">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AdminEditBlogForm;
