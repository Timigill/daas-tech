"use client";

import React from "react";
import { motion } from "framer-motion";
import MeetingsList from "../MeetingsList";

export default function AdminMeetingsPage() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center px-3"
      style={{
        padding: "48px 0",
        background: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <motion.span
        className="badge mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: "rgba(139,92,246,0.15)",
          color: "#8b5cf6",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 1,
          padding: "8px 18px",
          borderRadius: 20,
        }}
      >
        Admin Meetings
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: 16,
          maxWidth: 700,
        }}
      >
        Manage Meeting Requests
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: 15,
          color: "#bdbdbd",
          maxWidth: 600,
          margin: "0 auto 40px auto",
        }}
      >
        View and manage all meeting requests from your clients and prospects.
      </motion.p>

      <div className="w-100 px-4">
        <MeetingsList />
      </div>
    </section>
  );
} 