"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Website", value: 85 },
  { name: "E-commerce", value: 75 },
  { name: "SEO", value: 90 },
  { name: "Marketing", value: 70 },
  { name: "Branding", value: 65 },
];

const gradientColors = ["#8b5cf6", "#ec4899", "#22d3ee", "#f59e0b", "#10b981"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "linear-gradient(to bottom, #1f1f24, #131316)",
          borderRadius: 10,
          padding: "12px 16px",
          boxShadow: "0 4px 14px rgba(139,92,246,0.2)",
          color: "#fff",
          fontSize: 13,
          border: "1px solid #2e2e38",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>{label}</p>
        <p
          style={{ margin: 0, color: "#bdbdbd" }}
        >{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function ServiceImpactChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      style={{
        background: "#0f0f11",
        padding: "40px 20px",
        borderTop: "1px solid #23232a",
        margin: "80px auto 0",
        maxWidth: 800,
        borderRadius: 14,
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
      }}
    >
      <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: 8 }}>
        📊 Service Delivery Impact
      </h3>
      <p style={{ color: "#bdbdbd", fontSize: 14, marginBottom: 20 }}>
        Breakdown of performance across core service areas.
      </p>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          onMouseMove={(e) => setActiveIndex(e?.activeTooltipIndex ?? null)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#ffffff", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#ffffff", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={gradientColors[index % gradientColors.length]}
                style={{
                  filter:
                    index === activeIndex
                      ? "drop-shadow(0 0 8px rgba(139,92,246,0.5))"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
