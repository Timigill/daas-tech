"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = ({ _id, category, title, image, description, isAdmin, onEdit, onDelete }) => {
  const cardStyle = {
    backgroundColor: "#111",
    padding: "18px",
    borderRadius: "16px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 0 12px rgba(139, 92, 246, 0.05)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    display: "block",
    transition: "transform 0.4s ease-in-out",
  };

  const categoryStyle = {
    color: "#8b5cf6",
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: 600,
  };

  const titleStyle = {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.4,
    marginTop: "4px",
  };

  const descriptionStyle = {
    marginTop: "12px",
    color: "#ccc",
    fontSize: "14px",
    lineHeight: 1.5,
  };

  const buttonGroupStyle = {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    fontSize: "13px",
    padding: "6px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <motion.div
      className="col-lg-6 col-md-6 col-sm-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div style={cardStyle}>
        <Link href={`/blog/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <img src={image} alt={title} style={imageStyle} />
          <span style={categoryStyle}>{category || "AI/Tech"}</span>
          <h5 style={titleStyle}>{title}</h5>
          <p style={descriptionStyle}>{description?.slice(0, 100)}...</p>
        </Link>

        {isAdmin && (
          <div style={buttonGroupStyle}>
            <button
              style={{ ...buttonStyle, background: "#8b5cf6", color: "#fff" }}
              onClick={onEdit}
            >
              Edit
            </button>
            <button
              style={{ ...buttonStyle, background: "#ff4d4f", color: "#fff" }}
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
