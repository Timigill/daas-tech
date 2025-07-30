"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import dynamic from "next/dynamic";
import { color } from "framer-motion";

const Select = dynamic(() => import("react-select"), { ssr: false });

// 🎨 Custom styles for react-select
const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "var(-card-bg)",
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
    color: "var(--muted-text)",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor:"var(--card-bg)",
    border: "1px solid #222",
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused
      ? "linear-gradient(135deg, var(--grad1), var(--grad2))"
      : "transparent",
    color: "var(--muted-text)",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};

// 🔻 Dropdown options
const jobTypeOptions = [
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Half-Time", label: "Part-Time" },
];

const jobLevelOptions = [
  { value: "Fresher", label: "Fresher" },
  { value: "InternShip", label: "InternShip" },
  { value: "Intermediate-Level", label: "Intermediate-Level" },
  { value: "Senior-Level", label: "Senior-Level" },
];

function Opening() {
  return (
    <div
      className="container-fluid px-3 px-md-5 py-5"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        width: "100%",
      }}
    >
      {/* ✅ Title */}
      <h1 className="text-center fw-bold mb-3"
      style={{color:"var(--foreground)"}}
      >Job Openings</h1>

      {/* ✅ Search + Filters */}
      <div
        className="rounded mt-5 p-4"
        style={{
          backgroundColor: "var(-card-bg)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.6)",
          border: "1px solid #222",
        }}
      >
        <div className="row g-3">
          {/* 🔍 Search Input */}
          <div
            className="col-12 col-md-4 d-flex align-items-center pb-1"
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderBottom =
                "1px solid hsl(0deg 0% 80%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderBottom =
                "1px solid rgba(255, 255, 255, 0.3)")
            }
          >
            <FaSearch className="me-2 text-white-50" />
            <input
              type="text"
              className="form-control border-0 bg-transparent  px-0"
              placeholder="Job title or keyword"
              style={{
                boxShadow: "none",
                fontFamily: "Inter, sans-serif",
                paddingBottom: "6px",
                backgroundColor: "var(-card-bg)",
                color:"var(-muted-text)",
              }}
            />
          </div>

          {/* 📁 JOb-type Dropdown */}
          <div className="col-12 col-md-4">
            <Select
              options={jobTypeOptions}
              styles={customSelectStyles}
              placeholder="Job Type"
              menuPortalTarget={typeof window !== "undefined" ? document.body : null}
              menuPosition="fixed"
              
            />
          </div>

          {/* 📍 Job-Level Dropdown */}
          <div className="col-12 col-md-4">
            <Select
              options={jobLevelOptions}
              styles={customSelectStyles}
              placeholder="Job Level"
              menuPortalTarget={typeof window !== "undefined" ? document.body : null}
              menuPosition="fixed"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opening;
