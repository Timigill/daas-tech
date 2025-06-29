"use client";

import Image from "next/image";

export default function BlogDetailClient({ blog }) {
  return (
    <div className="container py-5 text-white" style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <button onClick={() => history.back()} className="btn btn-outline-light mb-4">← Go Back</button>
      <h1>{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        className="img-fluid my-3"
        style={{ maxHeight: "400px", width: "auto", height: "auto" }}
        width={800}
        height={400}
        priority
      />
      <p><strong>Category:</strong> {blog.category}</p>
      <p><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>
      <p className="text-secondary">{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
