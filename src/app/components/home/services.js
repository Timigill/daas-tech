'use client';
import React from "react";

export default function HomeServices() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        padding: "48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5"
        style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Left: Call to Action */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minWidth: 320,
            maxWidth: 400,
            padding: "32px 28px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: 10 }}>
            Delegate Daily Tasks
          </h3>
          <p style={{ color: "#bdbdbd", fontSize: 16, marginBottom: 18 }}>
            From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.
          </p>
          <div
            className="d-flex flex-wrap justify-content-center gap-2 mt-3"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <a href="#" className="btn btn-outline-light px-3 py-2">Summaries</a>
            <a href="#" className="btn btn-outline-light px-3 py-2">Scheduling</a>
            <a href="#" className="btn btn-outline-light px-3 py-2">Many more</a>
          </div>
        </div>

        {/* Right: Updated Simple Card */}
        <div
          style={{
            background: "#111114",
            borderRadius: 18,
            minWidth: 340,
            maxWidth: 420,
            width: 370,
            height: 320,
            marginBottom: 24,
            border: "1.5px solid #23232a",
            boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: "92%",
              height: "82%",
              borderRadius: 12,
              background: "rgba(24,24,27,0.85)",
              border: "1px solid #23232a",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
              color: "#fff",
              fontSize: 15,
              fontWeight: 500,
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              padding: "18px 18px 0 18px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
              What can I help with?
            </h4>
            <p style={{ fontSize: 15, color: "#bdbdbd", lineHeight: 1.6 }}>
              Whether you want help in customer handling or make changes in your system, just give me a command.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
