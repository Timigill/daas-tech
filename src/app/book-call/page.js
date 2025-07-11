'use client';
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

const callTypes = [
  { label: "30 Minute Meeting", value: "30" },
  { label: "60 Minute Meeting", value: "60" },
];

function pad(n) {
  return n < 10 ? `0${n}` : n;
}

function formatTime(hour, minute) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${pad(minute)} ${suffix}`;
}

function generateTimeSlots(start = 9, end = 18, duration = 30) {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    for (let min = 0; min < 60; min += duration) {
      const endMinutes = min + duration;
      let endHour = hour;
      let endMin = endMinutes;
      if (endMinutes >= 60) {
        endHour = hour + 1;
        endMin = endMinutes - 60;
      }
      const label = `${formatTime(hour, min)} - ${formatTime(endHour, endMin)}`;
      const value = `${pad(hour)}:${pad(min)}`;
      slots.push({ label, value });
    }
  }
  return slots;
}

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function BookACall() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [callType, setCallType] = useState(callTypes[0].value);
  const [form, setForm] = useState({ name: "", email: "", purpose: "" });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlotValues, setBookedSlotValues] = useState([]);
  const [phase, setPhase] = useState("info");
  const isMobile = useIsMobile();
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = useMemo(() => generateTimeSlots(9, 18, parseInt(callType, 10)), [callType]);

  useEffect(() => {
  if (!selectedDate) {
    setAvailableSlots([]);
    setBookedSlotValues([]);
    return;
  }

  // Convert date to YYYY-MM-DD in UTC+5 manually
  const localDate = new Date(selectedDate);
  const pkOffset = 5 * 60; // minutes
  const pkDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000 + pkOffset * 60000);
  const formattedDate = pkDate.toISOString().slice(0, 10);

  fetch(`/api/available-slots?date=${formattedDate}&duration=${callType}`)
    .then(async (res) => {
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error("Invalid or empty JSON response:", text);
        return { slots: [], booked: [] }; // safe fallback
      }
    })
    .then(data => {
      setAvailableSlots(data.slots || []);
      setBookedSlotValues(data.booked || []);
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setAvailableSlots([]);
      setBookedSlotValues([]);
    });
}, [selectedDate, callType]);


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !form.name || !form.email) {
      alert("Please fill all required fields.");
      return;
    }

    // Ensure UTC+5 consistency
    const localDate = new Date(selectedDate);
    const pkOffset = 5 * 60;
    const pkDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000 + pkOffset * 60000);
    const formattedDate = pkDate.toISOString().slice(0, 10);

    const bookingData = {
      ...form,
      date: formattedDate,
      time: selectedTime,
      callType,
    };

    const res = await fetch("/api/book-call", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  const allSlots = useMemo(() => generateTimeSlots(9, 18, parseInt(callType, 10)), [callType]);

  return (
    <div className="book-call-main" style={{
      background: "linear-gradient(to top right, rgba(164, 122, 255, 0.2), rgba(0, 0, 0, 0.5))",
      color: "#fff",
      borderRadius: 18,
      maxWidth: 900,
      margin: "40px auto",
      boxShadow: "0 8px 40px 0 rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <motion.div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        minHeight: 440,
        position: "relative",
      }}>
        <motion.div
          initial={false}
          animate={isMobile
            ? { y: phase === "form" ? "-100%" : "0%", opacity: phase === "form" ? 0 : 1, height: phase === "form" ? 0 : "auto" }
            : { x: phase === "form" ? "-100%" : "0%", opacity: phase === "form" ? 0 : 1, width: phase === "form" ? 0 : "40%" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{
            padding: "30px 32px 0 32px",
            display: "flex",
            flexDirection: "column",
            borderRight: isMobile ? "none" : "1px solid #23232a",
            overflow: "hidden",
            minWidth: isMobile ? "100%" : undefined,
            alignItems: isMobile ? "center" : undefined,
            textAlign: isMobile ? "center" : undefined,
            justifyContent: isMobile ? "center" : undefined,
          }}
        >
          {phase === "info" && (
            <>
              <div style={{ fontWeight: 600, fontSize: 18 }}>
                <Image src="/logo2.png" alt="Logo" width={120} height={30} />
              </div>
              <div className="mt-5" style={{ fontWeight: 700, fontSize: 30, margin: "12px 0 16px 0" }}>
                Schedule a Meeting
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 12, color: "#bdbdbd" }}>
                <span style={{ fontSize: 15, marginRight: 8 }}>⏰</span> 30/60 mins
              </div>
              <div style={{ display: "flex", alignItems: "center", color: "#bdbdbd" }}>
                <span style={{ fontSize: 15, marginRight: 8 }}>💻</span> Web conferencing details provided upon confirmation.
              </div>
              <Image
                src="/meet.jpeg"
                alt="DaaS Tech"
                width={400}
                height={300}
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "40%",
                  height: "50%",
                  objectFit: "cover",
                  opacity: 0.1,
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
            </>
          )}
        </motion.div>

        <motion.div
          animate={isMobile ? { y: 0, width: "100%" } : { x: phase === "form" ? "-15%" : "0%", width: "50%" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{ padding: "48px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
        >
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 24 }}>Select a Date & Time</div>
          <Calendar
            onChange={date => {
              setSelectedDate(date);
              setSelectedTime("");
              setPhase("form");
            }}
            value={selectedDate}
            minDate={new Date()}
            locale="en-US"
            next2Label={null}
            prev2Label={null}
            className="w-100"
            tileClassName={({ date }) =>
              selectedDate && date.toDateString() === selectedDate.toDateString() ? "selected-calendar-tile" : ""}
          />
          <div style={{ marginTop: 12, color: "#bdbdbd", fontSize: 14 }}>
            <span role="img" aria-label="timezone">🌐</span> All time slots are shown in Pakistan Standard Time (UTC+5).
          </div>
        </motion.div>

        <motion.div
          animate={isMobile
            ? { y: phase === "form" ? 0 : "100%", opacity: phase === "form" ? 1 : 0, height: phase === "form" ? "auto" : 0 }
            : { x: phase === "form" ? 0 : "0%", opacity: phase === "form" ? 1 : 0, width: phase === "form" ? 0 : 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{
            padding: "48px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "center" : "flex-start",
            minWidth: isMobile ? "100%" : "50%",
            position: isMobile ? "static" : "absolute",
            right: 0,
            top: 0,
            height: isMobile ? "auto" : "100%",
            overflow: "hidden",
            pointerEvents: phase === "form" ? "auto" : "none",
          }}
        >
          {phase === "form" && !submitted && (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 500 }}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: 8,
                    border: "1px solid #23232a",
                    background: "#18181b",
                    color: "#fff",
                    marginTop: 4,
                    fontFamily: "Inter, sans-serif",
                  }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 500 }}>Time</label>
                <select
                  value={selectedTime}
                  onChange={e => setSelectedTime(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: 8,
                    border: "1px solid #23232a",
                    background: "#18181b",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                  }}
                  disabled={!selectedDate}
                >
                  <option value="">Select a time slot</option>
                  {allSlots.map(slot => (
                    <option
                      key={slot.value}
                      value={slot.value}
                      disabled={bookedSlotValues.includes(slot.value)}
                      style={bookedSlotValues.includes(slot.value) ? { color: "#888" } : {}}
                    >
                      {slot.label} {bookedSlotValues.includes(slot.value) ? "(Booked or Unavailable)" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 500 }}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: 8,
                    border: "1px solid #23232a",
                    background: "#18181b",
                    color: "#fff",
                    marginTop: 4,
                    fontFamily: "Inter, sans-serif",
                  }}
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontWeight: 500 }}>Purpose</label>
                <textarea
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: 8,
                    border: "1px solid #23232a",
                    background: "#18181b",
                    color: "#fff",
                    marginTop: 4,
                    fontFamily: "Inter, sans-serif",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#8b5cf6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "5px",
                  fontWeight: 600,
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                Book Call
              </button>
            </form>
          )}
          {phase === "form" && submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                color: "#8b5cf6",
                fontWeight: 600,
                fontSize: 20,
                minHeight: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#23232a",
                borderRadius: 12,
                padding: 32,
                marginTop: 24,
                boxShadow: "0 2px 16px 0 #181028",
              }}
            >
              <div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🎉</div>
                Booking Confirmed!<br />
                You&apos;ll receive a confirmation email soon.
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
