"use client";

import React, { useState, useRef } from "react";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsCode,
  BsTextLeft,
  BsTextCenter,
  BsTextRight,
  BsJustify,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsParagraph,
  BsListUl,
  BsListOl,
  BsCheck2Square,
  BsBlockquoteLeft,
  BsCodeSquare,
  BsDash,
  BsPalette,
  BsLink45Deg,
  BsImage,
  BsArrowCounterclockwise,
  BsArrowClockwise
} from "react-icons/bs";

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcawsddxm/upload';
const CLOUDINARY_PRESET = 'DaaS Tech';

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.35)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#181622', padding: 24, borderRadius: 10, minWidth: 320, boxShadow: '0 4px 32px #0008', color: '#fff', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 12, background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer' }}>&times;</button>
        {children}
      </div>
    </div>
  );
}

const groups = (editor, openLinkModal, openImageModal) => [
  [
    { icon: <BsTypeBold size={18} />, label: "Bold", onClick: () => editor && editor.chain().focus().toggleBold().run() },
    { icon: <BsTypeItalic size={18} />, label: "Italic", onClick: () => editor && editor.chain().focus().toggleItalic().run() },
    { icon: <BsTypeUnderline size={18} />, label: "Underline", onClick: () => editor && editor.chain().focus().toggleUnderline().run() },
    { icon: <BsTypeStrikethrough size={18} />, label: "Strikethrough", onClick: () => editor && editor.chain().focus().toggleStrike().run() },
    { icon: <BsCode size={18} />, label: "Inline Code", onClick: () => editor && editor.chain().focus().toggleCode().run() },
  ],
  [
    { icon: <BsTextLeft size={18} />, label: "Align Left", onClick: () => editor && editor.chain().focus().setTextAlign('left').run() },
    { icon: <BsTextCenter size={18} />, label: "Align Center", onClick: () => editor && editor.chain().focus().setTextAlign('center').run() },
    { icon: <BsTextRight size={18} />, label: "Align Right", onClick: () => editor && editor.chain().focus().setTextAlign('right').run() },
    { icon: <BsJustify size={18} />, label: "Justify", onClick: () => editor && editor.chain().focus().setTextAlign('justify').run() },
  ],
  [
    { icon: <BsTypeH1 size={18} />, label: "Heading 1", onClick: () => editor && editor.chain().focus().toggleHeading({ level: 1 }).run() },
    { icon: <BsTypeH2 size={18} />, label: "Heading 2", onClick: () => editor && editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { icon: <BsTypeH3 size={18} />, label: "Heading 3", onClick: () => editor && editor.chain().focus().toggleHeading({ level: 3 }).run() },
    { icon: <BsParagraph size={18} />, label: "Paragraph", onClick: () => editor && editor.chain().focus().setParagraph().run() },
  ],
  [
    { icon: <BsListUl size={18} />, label: "Bullet List", onClick: () => editor && editor.chain().focus().toggleBulletList().run() },
    { icon: <BsListOl size={18} />, label: "Numbered List", onClick: () => editor && editor.chain().focus().toggleOrderedList().run() },
  ],
  [
    { icon: <BsBlockquoteLeft size={18} />, label: "Blockquote", onClick: () => editor && editor.chain().focus().toggleBlockquote().run() },
    { icon: <BsCodeSquare size={18} />, label: "Code Block", onClick: () => editor && editor.chain().focus().toggleCodeBlock().run() },
    { icon: <BsDash size={18} />, label: "Horizontal Rule", onClick: () => editor && editor.chain().focus().setHorizontalRule().run() },
  ],
  [
    { icon: <BsLink45Deg size={18} />, label: "Add Link", onClick: openLinkModal },
    { icon: <BsImage size={18} />, label: "Add Image", onClick: openImageModal },
  ],
  [
    { icon: <BsArrowCounterclockwise size={18} />, label: "Undo", onClick: () => editor && editor.chain().focus().undo().run() },
    { icon: <BsArrowClockwise size={18} />, label: "Redo", onClick: () => editor && editor.chain().focus().redo().run() },
  ],
];

const toolbarStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center", // Center toolbar horizontally
  // background: "#0f172a",
  borderRadius: "12px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
  padding: "6px 10px",
  gap: "14px",
  marginBottom: "32px",
  minHeight: "48px",
};

const groupStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Center group content
  gap: "2px",
  background: "#1e293b",
  borderRadius: "8px",
  padding: "2px 6px",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)",
};

const btnStyle = {
  background: "none",
  border: "none",
  borderRadius: "6px",
  padding: "5px 7px",
  fontSize: "16px",
  color: "#cbd5e1",
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  minHeight: "28px",
};

const btnHoverStyle = {
  background: "#334155",
  color: "#3b82f6",
  boxShadow: "0 2px 10px rgba(59,130,246,0.2)",
};

const ToolbarButton = ({ icon, label, onClick, disabled }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      style={{ ...btnStyle, ...(hover ? btnHoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      aria-label={label}
      title={label}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default function EditorToolbar({ editor }) {
  // Modal state
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [linkError, setLinkError] = useState("");
  const [imageError, setImageError] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const fileInputRef = useRef();

  // Add Link logic
  const openLinkModal = () => {
    setLinkUrl(editor?.getAttributes('link').href || "");
    setLinkText(editor?.state?.selection?.empty ? "" : editor?.state?.doc.textBetween(editor.state.selection.from, editor.state.selection.to) || "");
    setLinkError("");
    setLinkModalOpen(true);
  };
  const handleLinkSubmit = () => {
    setLinkError("");
    if (!editor) {
      setLinkError("Editor is not ready.");
      console.log("[Toolbar] Editor is not ready");
      return;
    }
    if (!linkUrl) {
      setLinkError("Please enter a valid URL.");
      return;
    }
    try {
      let result = false;
      const displayText = linkText || linkUrl;
      if (editor.state.selection.empty) {
        // Insert new link with text (or URL if no text)
        result = editor.chain().focus().insertContent(`<a href=\"${linkUrl}\" target=\"_blank\" rel=\"noopener noreferrer\">${displayText}</a>`).run();
        console.log("[Toolbar] Inserted new link with text", result);
      } else {
        // Update link for selected text
        result = editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
        console.log("[Toolbar] Updated link for selection", result);
      }
      if (result) {
        setLinkModalOpen(false);
        setLinkUrl("");
        setLinkText("");
      } else {
        setLinkError("Failed to insert or update link. Please try again.");
      }
    } catch (err) {
      setLinkError("Failed to insert link. Please try again.");
      console.error("[Toolbar] Link error:", err);
    }
  };

  // Add Image logic
  const openImageModal = () => {
    setImageFile(null);
    setImageError("");
    setImageWidth("");
    setImageHeight("");
    setImageModalOpen(true);
  };
  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setImageError("");
  };
  const handleImageSubmit = async () => {
    setImageError("");
    if (!editor) {
      setImageError("Editor is not ready.");
      console.log("[Toolbar] Editor is not ready");
      return;
    }
    if (!imageFile) {
      setImageError("Please select an image file.");
      return;
    }
    setUploading(true);
    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', CLOUDINARY_PRESET);
    let url = "";
    try {
      const res = await fetch(CLOUDINARY_URL, { method: 'POST', body: data });
      const json = await res.json();
      url = json.secure_url;
      if (!url) throw new Error("No image URL returned");
      let style = "";
      if (imageWidth) style += `width: ${imageWidth}px;`;
      if (imageHeight) style += ` height: ${imageHeight}px;`;
      const attrs = { src: url };
      if (style) attrs.style = style.trim();
      const result = editor.chain().focus().setImage(attrs).run();
      console.log("[Toolbar] Inserted image", result);
      if (result) {
        setImageModalOpen(false);
        setImageFile(null);
        setImageWidth("");
        setImageHeight("");
      } else {
        setImageError("Failed to insert image. Please try again.");
      }
    } catch (err) {
      setImageError("Image upload failed. Please try again.");
      console.error("[Toolbar] Image error:", err);
    }
    setUploading(false);
  };

  return (
    <>
      <nav style={toolbarStyle} aria-label="Editor toolbar">
        {groups(editor, openLinkModal, openImageModal).map((group, i) => (
          <div style={groupStyle} key={i}>
            {group.map((btn, j) => (
              <ToolbarButton key={j} icon={btn.icon} label={btn.label} onClick={btn.onClick} disabled={!editor || uploading} />
            ))}
          </div>
        ))}
      </nav>
      {/* Link Modal */}
      <Modal open={linkModalOpen} onClose={() => setLinkModalOpen(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} autoComplete="off">
          <label style={{ fontWeight: 500 }}>Link Text</label>
          <input
            type="text"
            value={linkText}
            onChange={e => setLinkText(e.target.value)}
            placeholder="Text to display"
            style={{ padding: 8, borderRadius: 6, border: '1px solid #333', background: '#23232a', color: '#fff' }}
            autoComplete="off"
          />
          <label style={{ fontWeight: 500 }}>Link URL</label>
          <input
            type="url"
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            placeholder="https://example.com"
            style={{ padding: 8, borderRadius: 6, border: '1px solid #333', background: '#23232a', color: '#fff' }}
            required
            autoComplete="off"
          />
          {linkError && <div style={{ color: '#f87171', fontSize: 13 }}>{linkError}</div>}
          <button type="button" onClick={handleLinkSubmit} style={{ background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 0', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Insert Link</button>
        </div>
      </Modal>
      {/* Image Modal */}
      <Modal open={imageModalOpen} onClose={() => setImageModalOpen(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} autoComplete="off">
          <label style={{ fontWeight: 500 }}>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageFileChange}
            style={{ color: '#fff' }}
            required
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500, fontSize: 13 }}>Width (px)</label>
              <input
                type="number"
                min="1"
                value={imageWidth}
                onChange={e => setImageWidth(e.target.value)}
                placeholder="auto"
                style={{ width: '100%', padding: 6, borderRadius: 6, border: '1px solid #333', background: '#23232a', color: '#fff', fontSize: 14 }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500, fontSize: 13 }}>Height (px)</label>
              <input
                type="number"
                min="1"
                value={imageHeight}
                onChange={e => setImageHeight(e.target.value)}
                placeholder="auto"
                style={{ width: '100%', padding: 6, borderRadius: 6, border: '1px solid #333', background: '#23232a', color: '#fff', fontSize: 14 }}
              />
            </div>
          </div>
          {imageError && <div style={{ color: '#f87171', fontSize: 13 }}>{imageError}</div>}
          <button type="button" onClick={handleImageSubmit} style={{ background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 0', fontWeight: 600, fontSize: 15, cursor: 'pointer' }} disabled={uploading}>{uploading ? 'Uploading...' : 'Insert Image'}</button>
        </div>
      </Modal>
    </>
  );
}
