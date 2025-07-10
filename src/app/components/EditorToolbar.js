"use client";

import React from "react";

export default function EditorToolbar({ editor }) {
  if (!editor) return null;

  const btnStyle = {
    marginRight: "8px",
    padding: "4px 8px",
    fontSize: "0.9rem",
    background: "#222",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: 4,
    cursor: "pointer",
  };

  return (
    <div style={{ marginBottom: "12px", flexWrap: "wrap" }}>
      <button onClick={() => editor.chain().focus().toggleBold().run()} style={btnStyle}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} style={btnStyle}>
        Italic
      </button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} style={btnStyle}>
        Underline
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={btnStyle}>
        H2
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} style={btnStyle}>
        Bullet List
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} style={btnStyle}>
        Numbered List
      </button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} style={btnStyle}>
        Code Block
      </button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} style={btnStyle}>
        Quote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} style={btnStyle}>
        Line
      </button>
      <button onClick={() => editor.chain().focus().undo().run()} style={btnStyle}>
        Undo
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} style={btnStyle}>
        Redo
      </button>
    </div>
  );
}
