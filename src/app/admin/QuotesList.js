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
      color: "var(--accent)",
      fontFamily: "Inter, sans-serif",
      fontSize: "1rem"
    }}>
      Loading quotes...
    </div>
  );

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <h2 style={{ 
        color: "var(--foreground)", 
        fontWeight: 600, 
        marginBottom: "1.5rem",
        fontSize: "1.8rem"
      }}>
        Quote Requests
      </h2>
      
      <div style={{
        background: "linear-gradient(to top right, var(--grad5), var(--grad6))",
        border: "1px solid var(--border-color)",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 0 15px var(--boxShadow)"
      }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          color: "var(--foreground)"
        }}>
          <thead>
            <tr style={{ 
              background: "linear-gradient(to right, var(--grad5), var(--grad6))",
              borderBottom: "1px solid var(--border-color)"
            }}>   
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Date</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Name</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Email</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Phone</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Company</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Project Type</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Budget</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Timeline</th>
              <th style={{ 
                padding: "16px 12px", 
                textAlign: "left",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--th-text)"
              }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote, idx) => (
              <tr key={quote._id || idx} style={{ 
                backgroundColor: idx % 2 === 0 ? "var(--grad6)" : "var(--grad5))",
                borderBottom: "1px solid var(--border-color)",
                transition: "background-color 0.2s ease"
              }}>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)"
                }}>
                  {new Date(quote.createdAt).toLocaleDateString()}
                </td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--foreground)"
                }}>{quote.contactName || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)"
                }}>{quote.email || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)"
                }}>{quote.phone || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)"
                }}>{quote.company || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)",
                  textAlign:'left'
                }}>{quote.projectType || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)",
                  
                }}>{quote.budget || "-"}</td>
                <td style={{ 
                  padding: "16px 12px",
                  fontSize: "0.9rem",
                  color: "var(--muted-text)"
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
          color: "var(--muted-text)",
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          background: "linear-gradient(to top right, var(--grad5) var(--grad6))",
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