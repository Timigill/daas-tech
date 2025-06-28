"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Defs,
  LinearGradient,
  Stop,
} from "recharts";

const data = [
  { name: "Website", value: 85 },
  { name: "E-commerce", value: 75 },
  { name: "SEO", value: 90 },
  { name: "Marketing", value: 70 },
  { name: "Branding", value: 65 },
];

export default function ServiceImpactChart() {
  return (
    <div
      style={{
        background: "#0f0f11",
        padding: "40px 20px",
        borderTop: "1px solid #23232a",
        margin: "80px auto 0",
        maxWidth: 720,
        borderRadius: 14,
        boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
      }}
    >
      <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: 10 }}>
        📊 Service Performance Breakdown
      </h3>
      <p style={{ color: "#bdbdbd", fontSize: 14, marginBottom: 24 }}>
        Our expertise across core digital service areas.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="gradientWeb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="gradientEcom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ec4899" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#9d174d" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="gradientSEO" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0e7490" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="gradientMarketing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#b45309" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="gradientBranding" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#065f46" stopOpacity={0.8} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#bdbdbd" />
          <YAxis stroke="#bdbdbd" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181c",
              border: "none",
              color: "#fff",
              fontSize: 13,
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`bar-${index}`}
                fill={`url(#gradient${entry.name.replace(/\s/g, "")})`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
