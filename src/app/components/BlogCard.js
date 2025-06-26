"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogCard = ({
  _id,
  category,
  title,
  image,
  description,
  isOpen,
  onToggle,
  isAdmin = false,
  onDelete = () => {},
  onEdit = () => {},
}) => {
  const cardStyle = {
    backgroundColor: "#111",
    padding: "18px",
    borderRadius: "16px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 12px rgba(139, 92, 246, 0.05)",
    cursor: "pointer",
  };

  const imageWrapperStyle = {
    overflow: "hidden",
    borderRadius: "12px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    display: "block",
    transition: "transform 0.4s ease-in-out",
  };

  const textContentStyle = {
    marginTop: "1rem",
    textAlign: "left",
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
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "10px",
  };

  const buttonStyle = {
    fontSize: "13px",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    fontWeight: 500,
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
      <div style={cardStyle} onClick={onToggle}>
        <div style={imageWrapperStyle}>
          <motion.img
            src={image}
            alt={title}
            style={imageStyle}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div style={textContentStyle}>
          <span style={categoryStyle}>{category || "AI/Tech"}</span>
          <h5 style={titleStyle}>{title}</h5>
          <AnimatePresence>
            {isOpen && (
              <motion.p
                style={descriptionStyle}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Admin Buttons */}
          {isAdmin && (
            <div style={buttonGroupStyle}>
              <button
                style={{ ...buttonStyle, backgroundColor: "#6b7280", color: "#fff" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(_id);
                }}
              >
                Edit
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: "#ef4444", color: "#fff" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(_id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
