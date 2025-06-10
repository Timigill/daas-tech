'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI in Modern Business",
      excerpt: "How artificial intelligence is transforming enterprise operations",
      category: "Trends",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Automation Best Practices",
      excerpt: "Top strategies for implementing workflow automation",
      category: "Guide",
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "Machine Learning Insights",
      excerpt: "Understanding ML models for business applications",
      category: "Technical",
      date: "June 18, 2023"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="blog"
      className="d-flex flex-column align-items-center"
      style={{
        padding: '80px 20px',
        background: '#0d0d0d',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh'
      }}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <motion.div 
          className="text-center mb-5"
          variants={item}
        >
          <span
            className="badge mb-3"
            style={{
              background: 'rgba(139,92,246,0.15)',
              color: '#8b5cf6',
              fontWeight: 600,
              fontSize: '15px',
              letterSpacing: '1px',
              padding: '8px 18px',
              borderRadius: '20px',
            }}
          >
            Blog
          </span>
          <motion.h2
            style={{
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}
          >
            Unlock AI Insights with Us
          </motion.h2>
          <motion.p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#bdbdbd',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="row g-4"
          variants={container}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="col-md-4"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div
                style={{
                  background: '#1a1a1d',
                  borderRadius: '16px',
                  padding: '24px',
                  height: '100%',
                  border: '1px solid #23232a',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span
                  style={{
                    background: 'rgba(139,92,246,0.15)',
                    color: '#8b5cf6',
                    fontWeight: 600,
                    fontSize: '12px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}
                >
                  {post.category}
                </span>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    marginBottom: '12px',
                    color: '#fff'
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    color: '#bdbdbd',
                    fontSize: '0.875rem',
                    marginBottom: '16px'
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    color: '#8b5cf6',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-5"
          variants={item}
        >
          <button
            style={{
              background: '#8b5cf6',
              border: 'none',
              color: '#fff',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              background: '#7c4dff',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
            }}
          >
            View All Articles
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;