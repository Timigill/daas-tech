"use client";

import Image from "next/image";

export default function BlogDetailClient({ blog }) {
  return (
    <div className="py-5 container"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        minHeight: "100vh",
        width: "100%",
      }}>
      <button onClick={() => history.back()} className="btn mb-4"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--border-color)",
        }}
      >← Go Back</button>
      
      <div style={{
        width:"70%"


      }}>

     
      <h1>{blog.title}</h1>
      <Image
      
        src={blog.image}
        alt={blog.title}
        className="img-fluid my-3"
        style={{ maxHeight: "400px", width: "100%", height: "auto" }}
        width={800}
        height={400}
        priority
      />
      <p><strong>Category:</strong> {blog.category}</p>
      <p><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>
      <p style={{ color: "var(--foreground)" }}>{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div >

    </div>
  );
}
