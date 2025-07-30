'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const thStyle = {
  padding: '14px 16px',
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '0.95rem',
  lineHeight: '1.5',
  verticalAlign: 'middle',
  color: '#8b5cf6'
};

const tdStyle = {
  padding: '14px 16px',
  fontSize: '0.95rem',
  lineHeight: '1.5',
  verticalAlign: 'middle',
  color: '#ccc'
};

const buttonStyle = {
  padding: '6px 16px',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: 600,
  backgroundColor: 'rgba(139, 92, 246, 0.2)',
  color: 'rgba(139, 92, 246)',
  border: '1px solid rgba(139, 92, 246, 0.4)',
  cursor: 'pointer',
  margin: '0 8px'
};

const customSelectStyles = {
  control: base => ({
    ...base,
    backgroundColor: '#111',
    borderColor: '#8b5cf6',
    borderRadius: '6px',
    color: '#fff',
    padding: '4px',
    marginBottom: '12px'
  }),
  menu: base => ({
    ...base,
    backgroundColor: '#111',
    border: '1px solid #8b5cf6'
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? 'rgba(139, 92, 246, 0.4)'
      : isFocused
        ? 'rgba(139, 92, 246, 0.2)'
        : '#111',
    color: '#fff',
    cursor: 'pointer'
  }),
  singleValue: base => ({
    ...base,
    color: '#fff'
  })
};

export default function MeetingsList() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updating, setUpdating] = useState(false);

  const fetchMeetings = () => {
    setLoading(true);
    fetch('/api/meetings')
      .then(res => res.json())
      .then(data => setMeetings(data.meetings || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const handleSubmit = async (meetingData) => {
    setUpdating(true);
    try {
      const res = await fetch(`/api/meetings/${meetingData._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: meetingData.status,
          declineReason: meetingData.declineReason,
          currentStatus: meetingData.currentStatus,
          result: meetingData.result,
          resultReason: meetingData.resultReason,
          decisionAt: meetingData.decisionAt,
        }),
      });
      if (res.ok) {
        toast.success('Meeting updated successfully!');
        // setShowModal(false);
        // setSelectedMeeting(null);
        fetchMeetings();
      } else {
        const err = await res.json();
        toast.error(err.message || 'Failed to update meeting');
      }
    } catch (err) {
      toast.error('Failed to update meeting');
    }
    setUpdating(false);
  };

  // Update select options for currentStatus
  const statusOptions = [
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'conducted', label: 'Conducted' },
    { value: 'missed', label: 'Missed' },
    { value: 'rescheduled', label: 'Rescheduled' }
  ];

  if (loading) return <div style={{ color: '#fff' }}>Loading meetings...</div>;

  return (
    <div>


      <div style={{
        background: 'linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))',
        border: '1px solid #333',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(164, 122, 255, 0.1)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{
              background: 'linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(0, 0, 0, 0.8))',
              borderBottom: '1px solid #333'
            }}>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Current Status</th>
              <th style={thStyle}>Result</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Call Type</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, idx) => {
              let statusDisplay = meeting.status ? meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1) : '-';
              if (meeting.status === 'declined' && meeting.declineReason) {
                statusDisplay += `: ${meeting.declineReason}`;
              }
              let currentStatusDisplay = meeting.currentStatus ? meeting.currentStatus.charAt(0).toUpperCase() + meeting.currentStatus.slice(1) : '-';
              let resultDisplay = meeting.result || '-';
              return (
                <tr key={meeting._id || idx} style={{
                  backgroundColor: idx % 2 === 0 ? 'rgba(0, 0, 0, 0.3)' : 'rgba(139, 92, 246, 0.05)',
                  borderBottom: '1px solid #222'
                }}>
                  <td style={tdStyle}>{statusDisplay}</td>
                  <td style={tdStyle}>{currentStatusDisplay}</td>
                  <td style={tdStyle}>{resultDisplay}</td>
                  <td style={tdStyle}>{meeting.date || '-'}</td>
                  <td style={tdStyle}>{meeting.time || '-'}</td>
                  <td style={tdStyle}>{meeting.callType || '-'}</td>
                  <td style={tdStyle}>{meeting.name || '-'}</td>
                  <td style={tdStyle}>{meeting.email || '-'}</td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => {
                        setSelectedMeeting({ ...meeting, statusUpdateMode: null });
                        setShowModal(true);
                      }}
                      style={buttonStyle}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedMeeting && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            position: 'relative',
            background: 'linear-gradient(to top right, rgba(12, 12, 15, 1), rgba(26, 17, 36, 1))',
            color: '#fff',
            padding: '24px 55px',
            borderRadius: '20px',
            maxWidth: '650px',
            width: '100%',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
          }}>
            <button onClick={() => setShowModal(false)} style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              color: '#fff',
              cursor: 'pointer'
            }}>&times;</button>
            <h2 style={{ textAlign: 'center', color: '#8b5cf6', marginBottom: '24px' }}>
              Meeting Details
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <p><strong style={{ color: '#8b5cf6' }}>Date:</strong> {selectedMeeting.date}</p>
              <p><strong style={{ color: '#8b5cf6' }}>Time:</strong> {selectedMeeting.time}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <p><strong style={{ color: '#8b5cf6' }}>Name:</strong> {selectedMeeting.name}</p>
              <p><strong style={{ color: '#8b5cf6' }}>Call Type:</strong> {selectedMeeting.callType}</p>
            </div>
            <p style={{ marginBottom: '12px', display: "flex", textAlign: "flex-start" }}>
              <strong style={{ color: '#8b5cf6' }}>Email:</strong> {selectedMeeting.email}
            </p>
            <div style={{ border: '2px solid #8b5cf6', borderRadius: '8px', marginBottom: '12px', padding: '6px' }}>
              <p><strong style={{ color: '#8b5cf6', display: "flex", textAlign: "flex-start" }}>Purpose:</strong></p>
              <p style={{ display: "flex", textAlign: "flex-start" }}>{selectedMeeting.purpose}</p>
            </div>
            {/* Approval/Decline controls if status is pending */}
            {selectedMeeting.status === 'pending' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button
                    onClick={() => setSelectedMeeting(prev => ({ ...prev, statusUpdateMode: 'approve' }))}
                    style={buttonStyle}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setSelectedMeeting(prev => ({ ...prev, statusUpdateMode: 'decline', declineReason: '' }))}
                    style={buttonStyle}
                  >
                    Decline
                  </button>
                </div>
                {/* Decline reason input if declining */}
                {selectedMeeting.statusUpdateMode === 'decline' && (
                  <>
                    <textarea
                      placeholder='Reason for decline'
                      value={selectedMeeting.declineReason || ''}
                      onChange={e => setSelectedMeeting(prev => ({ ...prev, declineReason: e.target.value }))}
                      rows={3}
                      style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#111', color: '#fff', border: '1px solid #8b5cf6', marginBottom: '12px' }}
                    />
                    <button onClick={async () => {
                      setUpdating(true);
                      await handleSubmit({
                        ...selectedMeeting,
                        status: 'declined',
                        decisionAt: new Date(),
                      });
                      setUpdating(false);
                    }} style={{ ...buttonStyle, display: 'block', margin: 'auto' }} disabled={updating}>
                      {updating ? 'Updating...' : 'Submit Decline'}
                    </button>
                  </>
                )}
                {/* Approve action */}
                {selectedMeeting.statusUpdateMode === 'approve' && (
                  <button onClick={async () => {
                    setUpdating(true);
                    await handleSubmit({
                      ...selectedMeeting,
                      status: 'approved',
                      decisionAt: new Date(),
                    });
                    setUpdating(false);
                  }} style={{ ...buttonStyle, display: 'block', margin: 'auto' }} disabled={updating}>
                    {updating ? 'Updating...' : 'Submit Approval'}
                  </button>
                )}
              </div>
            )}
            {/* After decision: allow updating currentStatus/result/resultReason */}
            {selectedMeeting.status !== 'pending' && selectedMeeting.status !== 'declined' && (
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <strong style={{ color: '#8b5cf6', whiteSpace: 'nowrap' }}>
                    Current Status:
                  </strong>
                  <div style={{ minWidth: 'fit-content' }}>
                    <Select
                      options={(() => {
                        // Only show valid next statuses, not the current one
                        const curr = selectedMeeting.currentStatus;
                        if (curr === 'scheduled') {
                          return statusOptions.filter(opt => opt.value !== 'scheduled');
                        } else if (curr === 'conducted') {
                          return [];
                        } else if (curr === 'missed' || curr === 'rescheduled') {
                          // Optionally allow going to conducted from missed/rescheduled
                          return statusOptions.filter(opt => opt.value === 'conducted');
                        } else {
                          return statusOptions;
                        }
                      })()}
                      value={statusOptions.find(opt => opt.value === selectedMeeting.currentStatus) || null}
                      onChange={selected => setSelectedMeeting(prev => ({ ...prev, currentStatus: selected.value }))}
                      isDisabled={selectedMeeting.currentStatus === 'conducted'}
                      styles={{
                        ...customSelectStyles,
                        control: (base) => ({
                          ...base,
                          backgroundColor: '#111',
                          borderColor: '#8b5cf6',
                          borderRadius: '6px',
                          color: '#fff',
                          padding: '4px',
                          width: 'auto',
                          minWidth: '150px'
                        })
                      }}
                    />
                  </div>
                </div>
                {/* Show Result only if conducted, Reason only if missed or rescheduled */}
                {selectedMeeting.currentStatus === 'conducted' && (
                  <textarea
                    placeholder='Result (notes, outcome, etc.)'
                    value={selectedMeeting.result || ''}
                    onChange={e => setSelectedMeeting(prev => ({ ...prev, result: e.target.value }))}
                    rows={2}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#111', color: '#fff', border: '1px solid #8b5cf6', marginBottom: '12px' }}
                  />
                )}
                {(selectedMeeting.currentStatus === 'missed' || selectedMeeting.currentStatus === 'rescheduled') && (
                  <textarea
                    placeholder='Reason (e.g., why missed/rescheduled)'
                    value={selectedMeeting.resultReason || ''}
                    onChange={e => setSelectedMeeting(prev => ({ ...prev, resultReason: e.target.value }))}
                    rows={2}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#111', color: '#fff', border: '1px solid #8b5cf6', marginBottom: '12px' }}
                  />
                )}
                <button onClick={async () => {
                  setUpdating(true);
                  await handleSubmit(selectedMeeting);
                  setUpdating(false);
                }} style={{ ...buttonStyle, display: 'block', margin: 'auto' }} disabled={updating}>
                  {updating ? 'Updating...' : 'Update Meeting'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
