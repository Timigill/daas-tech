'use client';
import React, { useEffect, useState } from "react";

export default function QuotesList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quote")
      .then(res => res.json())
      .then(data => setQuotes(data.quotes || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div style={{ 
      textAlign: "center", 
      padding: "40px", 
      color: "#8b5cf6",
      fontFamily: "Inter, sans-serif",
      fontSize: "1rem"
    }}>
      Loading quotes...
    </div>
  );

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <h2 style={{ 
        color: "#fff", 
        fontWeight: 600, 
        marginBottom: "1.5rem",
        fontSize: "1.8rem"
      }}>
        Quote Requests
      </h2>
      
      <div style={{
        background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
        border: "1px solid #333",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 0 15px rgba(164, 122, 255, 0.1)"
      }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          color: "#fff"
        }}>
          <thead>
            <tr style={{ 
              background: "linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(0, 0, 0, 0.8))",
              borderBottom: "1px solid #333"
            }}>   
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Date</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Name</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Email</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Phone</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Company</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Project Type</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Budget</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Timeline</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote, idx) => (
              <tr key={quote._id || idx} style={{ 
                backgroundColor: idx % 2 === 0 ? "rgba(0, 0, 0, 0.3)" : "rgba(139, 92, 246, 0.05)",
                borderBottom: "1px solid #222",
                transition: "background-color 0.2s ease"
              }}>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>
                  {new Date(quote.createdAt).toLocaleDateString()}
                </td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#fff"
                }}>{quote.contactName || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>{quote.email || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>{quote.phone || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>{quote.company || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>{quote.projectType || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>{quote.budget || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "#ccc"
                }}>{quote.timeline || "-"}</td>
                <td style={{ padding: "16px 12px" }}>
                  <span style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    backgroundColor: 
                      quote.status === "pending" ? "rgba(139, 92, 246, 0.2)" :
                      quote.status === "reviewed" ? "rgba(164, 122, 255, 0.2)" :
                      quote.status === "contacted" ? "rgba(34, 197, 94, 0.2)" :
                      quote.status === "completed" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.2)",
                    color: 
                      quote.status === "pending" ? "#8b5cf6" :
                      quote.status === "reviewed" ? "#a47aff" :
                      quote.status === "contacted" ? "#22c55e" :
                      quote.status === "completed" ? "#16a34a" : "#ef4444",
                    border: `1px solid ${
                      quote.status === "pending" ? "rgba(139, 92, 246, 0.3)" :
                      quote.status === "reviewed" ? "rgba(164, 122, 255, 0.3)" :
                      quote.status === "contacted" ? "rgba(34, 197, 94, 0.3)" :
                      quote.status === "completed" ? "rgba(34, 197, 94, 0.4)" : "rgba(239, 68, 68, 0.3)"
                    }`
                  }}>
                    {quote.status || "pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {quotes.length === 0 && (
        <div style={{ 
          textAlign: "center", 
          padding: "60px 20px", 
          color: "#666",
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          background: "linear-gradient(to top right, rgba(164, 122, 255, 0.05), rgba(0, 0, 0, 0.8))",
          border: "1px solid #333",
          borderRadius: "12px",
          marginTop: "20px"
        }}>
          No quote requests found.
        </div>
      )}
    </div>
  );
} 