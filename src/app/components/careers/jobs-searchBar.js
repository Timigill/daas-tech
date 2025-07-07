'use client';

import { useRef } from "react";
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
    zIndex: 9999,
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
  const jobsSectionRef = useRef(null);

  return (
    <div
      ref={jobsSectionRef}
      id="jobs-searchBar"
      className="container-fluid px-3 px-md-5 py-5"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        width: "100%",
      }}
    >
      {/* ✅ Title */}
      <h1 className="text-center fw-bold mb-3 text-white">Job Openings</h1>

      {/* ✅ Search + Filters */}
      <div
        className="rounded mt-5 p-4"
        style={{
          backgroundColor: "#111",
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
              className="form-control border-0 bg-transparent text-white px-0"
              placeholder="Job title or keyword"
              style={{
                boxShadow: "none",
                fontFamily: "Inter, sans-serif",
                paddingBottom: "6px",
              }}
            />
          </div>

          {/* 📁 Job-type Dropdown */}
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
