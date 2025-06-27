'use client';
import React, { useEffect, useState } from "react";

export default function MeetingsList() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/meetings")
      .then(res => res.json())
      .then(data => setMeetings(data.meetings || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading meetings...</div>;

  return (
    <div>
      <h2>Manager's Meetings</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Call Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, idx) => (
            <tr key={meeting._id || idx}>
              <td>{meeting.date || "-"}</td>
              <td>{meeting.time || "-"}</td>
              <td>{meeting.callType || "-"}</td>
              <td>{meeting.name || "-"}</td>
              <td>{meeting.email || "-"}</td>
              <td>{meeting.purpose || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
