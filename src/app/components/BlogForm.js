
'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcawsddxm/upload';
const CLOUDINARY_PRESET = 'DaaS Tech';

const AdminAddBlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    metaDescription: '',
    image: '',
    content: '',
    category: '',
    seoKeywords: '',
  });

  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSizeMB = 2;
    const maxWidth = 1200;
    const maxHeight = 800;

    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.src = objectUrl;

    image.onload = async () => {
      if (
        file.size / 1024 / 1024 > maxSizeMB ||
        image.width > maxWidth ||
        image.height > maxHeight
      ) {
        setErrors((prev) => ({
          ...prev,
          image: `Image too large. Max ${maxSizeMB}MB, ${maxWidth}x${maxHeight}px.`,
        }));
        URL.revokeObjectURL(objectUrl);
        return;
      }

      setUploading(true);
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', CLOUDINARY_PRESET);

      try {
        const res = await fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: data,
        });
        const json = await res.json();
        if (json.secure_url) {
          setFormData((prev) => ({ ...prev, image: json.secure_url }));
          toast.success('Image uploaded successfully!');
        } else {
          setErrors((prev) => ({ ...prev, image: 'Image upload failed' }));
        }
      } catch {
        setErrors((prev) => ({ ...prev, image: 'Image upload failed' }));
      }

      setUploading(false);
    };
  };

  const validate = () => {
    const errs = {};
    if (!formData.title) errs.title = 'Title is required';
    if (!formData.metaDescription) errs.metaDescription = 'Meta description is required';
    if (!formData.image) errs.image = 'Image is required';
    if (!formData.category) errs.category = 'Category is required';
    if (!formData.content || formData.content.trim() === '') errs.content = 'Content is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const token = localStorage.getItem('adminToken');
    if (!token) {
      toast.error('Admin token not found. Please login.');
      return;
    }

    const payload = {
      ...formData,
      status: 'published',
    };

    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Blog added successfully!');
        setFormData({
          title: '',
          metaDescription: '',
          image: '',
          content: '',
          category: '',
          seoKeywords: '',
        });
        onBlogAdded?.();
      } else {
        toast.error(data.message || 'Failed to add blog');
      }
    } catch {
      toast.error('Something went wrong!');
    }
  };

  const inputStyle = {
    backgroundColor: '#111',
    color: '#fff',
    border: '1px solid #8b5cf6',
  };

  const labelStyle = {
    color: '#8b5cf6',
    fontWeight: '500',
    textAlign: 'left',
    display: 'block',
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded mb-5" style={{ backgroundColor: '#000', color: '#fff', border: '1px solid #8b5cf6' }}>
      <h4 className="mb-4" style={{ color: '#8b5cf6' }}>Add New Blog</h4>

      <div className="d-flex gap-4 flex-wrap">
        <div style={{ flex: 1, minWidth: 280 }}>
          {['title', 'metaDescription', 'seoKeywords', 'category'].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label" style={labelStyle}>
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-control"
                style={inputStyle}
              />
              {errors[field] && <div className="text-danger small">{errors[field]}</div>}
            </div>
          ))}

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
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                style={{ maxWidth: 120, marginTop: 8, borderRadius: 8 }}
              />
            )}
            {errors.image && <div className="text-danger small">{errors.image}</div>}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '50%' }} className="mb-4">
          <label className="form-label" style={labelStyle}>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="form-control"
            rows={10}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          {errors.content && <div className="text-danger small mt-1">{errors.content}</div>}
        </div>
      </div>

      <div className="d-flex justify-content-center gap-2">
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#8b5cf6', border: 'none' }}>
          Add Blog
        </button>
        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#8b5cf6', border: 'none' }} onClick={() => setPreview(true)}>
          Preview
        </button>
      </div>

      {preview && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#181622', borderRadius: 12, padding: 32, maxWidth: 700, width: '100%', color: '#fff', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setPreview(false)} style={{ position: 'absolute', top: 12, right: 12, background: 'transparent', border: 'none', fontSize: 24, color: '#fff', cursor: 'pointer' }}>
              &times;
            </button>
            <h2>{formData.title}</h2>
            <div className="mb-2 text-white-50">{formData.category}</div>
            {formData.image && (
              <img
                src={formData.image}
                alt="Blog"
                style={{ maxWidth: '100%', borderRadius: 8, marginBottom: 16 }}
              />
            )}
            <div className="mb-2"><strong>SEO Keywords:</strong> {formData.seoKeywords}</div>
            <div className="mb-2"><strong>Meta Description:</strong> {formData.metaDescription}</div>
            <div className="mt-4">{formData.content}</div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AdminAddBlogForm;
