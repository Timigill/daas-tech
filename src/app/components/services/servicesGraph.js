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
import { motion } from "framer-motion";
const CustomBar = (props) => {
  const { x, y, width, height, fill, index, activeIndex } = props;

  const isActive = index === activeIndex;

  return (
    <g>
      <rect
        x={x}
        y={isActive ? y - 5 : y}
        width={width}
        height={height}
        fill={fill}
        rx={8}
        ry={8}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      />
    </g>
  );
};
const data = [
  { name: "Website", value: 90 },
  { name: "E-com", value: 80 },
  { name: "Mobile Apps", value: 75 },
  { name: "SEO & SEM", value: 92 },
  { name: "Content", value: 85 },
  { name: "SMM", value: 78 },
  { name: "Branding", value: 70 },
  { name: "UI/UX", value: 88 },
  { name: "Flyers", value: 65 },
  { name: "Data ", value: 72 },
];

const gradientColors = [
  "#8b5cf6", "#ec4899", "#22d3ee", "#f59e0b", "#10b981",
  "#3b82f6", "#ef4444", "#a855f7", "#f43f5e", "#14b8a6"
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "linear-gradient(to top left , var(--grad1), var(--grad2))",
          borderRadius: 10,
          padding: "12px 16px",
          boxShadow: "0 4px 14px var(--boxShadow))",
          color: "#fff",
          fontSize: 13,
          border: "1px solid  var(--card-border)",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>{label}</p>
        <p style={{ margin: 0, color: "var(--muted text)" }}>
          {`Value: ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

export default function ServiceImpactChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background:
          "linear-gradient(to bottom right,var(--grad4), var(--grad3))",
        padding: "30px 20px",
        borderTop: "1px solidv ar(--card-border)",
        margin: "60px auto 0",
        maxWidth: 900,
        borderRadius: 14,
        boxShadow: "0 8px 20px var(--boxShadow)",
      }}
    >
      <h3
        style={{
          color: "var(--foreground)",
          fontSize: "1.4rem",
          marginBottom: 6,
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        Our Full Spectrum of Services
      </h3>
      <p style={{ color: "var(--foreground)", fontSize: 13, marginBottom: 20 }}>
        Performance overview across key digital transformation areas.
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          onMouseMove={(e) => setActiveIndex(e?.activeTooltipIndex ?? null)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "var(--muted-text)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            angle={0}
            // textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fill: "var(--muted-text)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
  dataKey="value"
  shape={(props) => (
    <CustomBar {...props} activeIndex={activeIndex} />
  )}
>
  {data.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={gradientColors[index % gradientColors.length]}
      cursor="pointer"
    />
  ))}
</Bar>


        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
