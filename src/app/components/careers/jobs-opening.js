"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

// 🎨 Custom styles for react-select
const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#111",
    border: "none",
    borderRadius: 0,
    borderBottom: state.isFocused
      ? "1px solid #6a1b9a"
      : "1px solid rgba(255, 255, 255, 0.3)",
    fontFamily: "Inter, sans-serif",
    paddingBottom: "6px",
    minHeight: "auto",
    boxShadow: "none",
    transition: "border-color 0.3s ease",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#000",
    border: "1px solid #222",
    zIndex: 999,
  }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused
      ? "linear-gradient(135deg, #1b1525, #6a1b9a)"
      : "transparent",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
  }),
};

// Dropdown options
const departmentOptions = [
  { value: "all", label: "All Departments" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "design", label: "Design" },
];

const locationOptions = [
  { value: "all", label: "All Job Locations" },
  { value: "remote", label: "Remote" },
  { value: "on-site", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

function Opening() {
  return (

    <div className="container justify-content-center py-4">
      {/* ✅ Title */}
      <h1 className="text-center fw-bold mb-3 text-white">Job Openings</h1>

      {/* ✅ Search Section */}
      <div
        className="rounded mt-5 p-4"
        style={{
          backgroundColor: "#111",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.6)",
          border: "1px solid #222",
        }}
      >
        <div className="row align-items-center g-3">
          {/* 🔍 Search Input */}
          <div
            className="col-12 col-md-4 mb-3 mb-md-0 d-flex align-items-center pb-1"
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderBottom = "1px solid hsl(0deg 0% 80%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderBottom =
                "1px solid rgba(255, 255, 255, 0.3)")
            }
          >
            <FaSearch className="me-2 text-white-50" />
            <input
              type="text"
              className="form-control border-0 bg-transparent text-white px-0"
              placeholder="Job title or keyword"
              style={{
                boxShadow: "none",
                fontFamily: "Inter, sans-serif",
                paddingBottom: "6px",
              }}
            />
          </div>

          {/* 📁 Department Filter */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <Select
              options={departmentOptions}
              styles={customSelectStyles}
              placeholder="All Departments"
            />
          </div>

          {/* 📍 Location Filter */}
          <div className="col-12 col-md-4">
            <Select
              options={locationOptions}
              styles={customSelectStyles}
              placeholder="All Job Locations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opening;
