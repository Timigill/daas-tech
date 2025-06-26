'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const callTypes = [
  { label: "30-Min Call", value: "30" },
  { label: "60-Min Call", value: "60" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" }
  }),
};

// Helper to generate slots based on duration
function generateTimeSlots(start = 9, end = 18, duration = 30) {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    for (let min = 0; min < 60; min += duration) {
      const startHour = formatHour(hour);
      const endMinutes = min + duration;
      let endHour = hour;
      let endMin = endMinutes;
      if (endMinutes >= 60) {
        endHour = hour + 1;
        endMin = endMinutes - 60;
      }
      const label = `${startHour}:${pad(min)} - ${formatHour(endHour)}:${pad(endMin)}`;
      const value = `${pad(hour)}:${pad(min)}`;
      slots.push({ label, value });
    }
  }
  return slots;
}
function formatHour(h) {
  const hour = h % 12 === 0 ? 12 : h % 12;
  return hour;
}
function pad(n) {
  return n < 10 ? `0${n}` : n;
}

export default function BookACall() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [callType, setCallType] = useState(callTypes[0].value);
  const [form, setForm] = useState({ name: "", email: "", purpose: "" });
  const [submitted, setSubmitted] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Dynamically generate slots based on callType
  const timeSlots = React.useMemo(
    () => generateTimeSlots(9, 18, parseInt(callType, 10)),
    [callType]
  );

  React.useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots([]);
      return;
    }
    setLoadingSlots(true);
    fetch(`/api/available-slots?date=${selectedDate.toISOString().slice(0,10)}&duration=${callType}`)
      .then(res => res.json())
      .then(data => setAvailableSlots(data.slots || []))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate, callType]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCallTypeChange = e => {
    setCallType(e.target.value);
    setSelectedTime(""); // Reset time when duration changes
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !form.name || !form.email) {
      alert("Please fill all required fields.");
      return;
    }
    const bookingData = {
      ...form,
      date: selectedDate.toISOString().slice(0, 10),
      time: selectedTime,
      callType,
    };
    // Store in DB via API
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

  // In your component, after fetching availableSlots from the backend:
  const allSlots = React.useMemo(
    () => generateTimeSlots(9, 18, parseInt(callType, 10)),
    [callType]
  );

  // Get booked slot values for the selected date
  const bookedSlotValues = selectedDate && availableSlots.length > 0
    ? allSlots.filter(slot => !availableSlots.some(av => av.value === slot.value)).map(slot => slot.value)
    : [];

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center py-5 px-3"
      style={{
        background: "#181622",
        color: "#fff",
        borderRadius: 18,
        maxWidth: 600,
        margin: "40px auto",
        boxShadow: "0 8px 40px 0 rgba(0,0,0,0.25)",
        minHeight: "90vh"
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontWeight: 700,
          fontSize: "2.2rem",
          marginBottom: 10,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Book a Call
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ color: "#bdbdbd", marginBottom: 24 }}
      >
        Select a date and time to schedule your call.
      </motion.p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: "#8b5cf6", fontWeight: 600, fontSize: 18, minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          Thank you! Your call is booked.<br />
          You’ll receive a confirmation email soon.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          style={{
            width: "100%",
            maxWidth: 440,
            background: "#1e1b2e",
            borderRadius: 16,
            padding: 24,
            margin: "0 auto",
            boxShadow: "0 2px 16px 0 #181028",
            textAlign: "left"
          }}
        >
          {/* Call Type */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500 }}>Call Type</label>
            <select
              name="callType"
              value={callType}
              onChange={handleCallTypeChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {callTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          {/* Calendar */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Date</label>
            <Calendar
              onChange={date => {
                setSelectedDate(date);
                setSelectedTime("");
              }}
              value={selectedDate}
              minDate={new Date()}
              locale="en-US"
              next2Label={null}
              prev2Label={null}
              className="w-100"
              tileClassName={({ date }) =>
                selectedDate &&
                date.toDateString() === selectedDate.toDateString()
                  ? "selected-calendar-tile"
                  : ""
              }
            />
          </div>
          {/* Time slots */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Time</label>
            <select
              value={selectedTime}
              onChange={e => setSelectedTime(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                marginTop: 4,
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
                  {slot.label} {bookedSlotValues.includes(slot.value) ? "(Booked)" : ""}
                </option>
              ))}
            </select>
          </div>
          {/* Name */}
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
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          {/* Email */}
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
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #23232a",
                background: "#18181b",
                color: "#fff",
                marginTop: 4,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
          {/* Purpose */}
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
              padding: "12px",
              fontWeight: 600,
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Book Call
          </button>
        </motion.form>
      )}

      {/* Custom calendar styling */}
      <style jsx global>{`
        .react-calendar {
          background: #18181b;
          border: none;
          border-radius: 12px;
          color: #fff;
          font-family: Inter, sans-serif;
          box-shadow: 0 2px 16px 0 #181028;
        }
        .react-calendar__tile {
          background: transparent;
          color: #fff;
          border-radius: 8px;
          font-size: 1rem;
          transition: background 0.15s, color 0.15s;
        }
        .react-calendar__tile--active,
        .selected-calendar-tile {
          background: #8b5cf6 !important;
          color: #fff !important;
        }
        .react-calendar__tile:disabled {
          color: #444 !important;
          background: #23232a !important;
          cursor: not-allowed;
        }
        .react-calendar__navigation button {
          color: #fff;
          background: transparent;
          font-size: 1.2rem;
        }
        .react-calendar__month-view__days__day--weekend {
          color: #bdbdbd;
        }
      `}</style>
    </section>
  );
}