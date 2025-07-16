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

  useEffect(() => {
    fetch('/api/meetings')
      .then(res => res.json())
      .then(data => setMeetings(data.meetings || []))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = () => {
    if (!selectedMeeting) return;

    if (selectedMeeting.statusUpdateMode === 'approve') {
      if (!selectedMeeting.status) {
        toast.error('Please select a status');
        return;
      }

      if (
        (selectedMeeting.status === 'rescheduled' || selectedMeeting.status === 'missed') &&
        !selectedMeeting.reason
      ) {
        toast.error('Please enter a reason');
        return;
      }

      if (selectedMeeting.status === 'conducted' && !selectedMeeting.result) {
        toast.error('Please enter the meeting result');
        return;
      }

      // Show only status-based toast here
      switch (selectedMeeting.status) {
        case 'pending':
          toast.info('Meeting status set to Pending ⏳');
          break;
        case 'conducted':
          toast.success('Meeting marked as Conducted 🎯');
          break;
        case 'rescheduled':
          toast.warning('Meeting has been Rescheduled 📆');
          break;
        case 'missed':
          toast.error('Meeting marked as Missed ❌');
          break;
        default:
          toast.info(`Meeting status set to ${selectedMeeting.status}`);
      }
    }

    if (selectedMeeting.statusUpdateMode === 'decline') {
      if (!selectedMeeting.rejectionReason) {
        toast.error('Please provide a rejection reason');
        return;
      }

      toast.success('Meeting Rejected ❌');
    }

    setShowModal(false);
    setSelectedMeeting(null);
  };

  const selectOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'rescheduled', label: 'Rescheduled' },
    { value: 'missed', label: 'Missed' },
    { value: 'conducted', label: 'Conducted' }
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
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Call Type</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, idx) => (
              <tr key={meeting._id || idx} style={{
                backgroundColor: idx % 2 === 0 ? 'rgba(0, 0, 0, 0.3)' : 'rgba(139, 92, 246, 0.05)',
                borderBottom: '1px solid #222'
              }}>
                <td style={tdStyle}>{meeting.date || '-'}</td>
                <td style={tdStyle}>{meeting.time || '-'}</td>
                <td style={tdStyle}>{meeting.callType || '-'}</td>
                <td style={tdStyle}>{meeting.name || '-'}</td>
                <td style={tdStyle}>{meeting.email || '-'}</td>
                <td style={tdStyle}>{(meeting.purpose || '-').split(' ').slice(0, 3).join(' ') + '...'}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => {
                      setSelectedMeeting({ ...meeting, statusUpdateMode: null, status: undefined });
                      setShowModal(true);
                    }}
                    style={buttonStyle}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
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

            {!selectedMeeting.statusUpdateMode && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                  onClick={() => {
                    setSelectedMeeting(prev => ({ ...prev, statusUpdateMode: 'approve' }));
                    toast.success('Meeting Approved Successfully ✅');
                  }}
                  style={buttonStyle}
                >
                  Approve
                </button>

                <button onClick={() => setSelectedMeeting(prev => ({ ...prev, statusUpdateMode: 'decline' }))} style={buttonStyle}>Decline</button>
              </div>
            )}

            {selectedMeeting.statusUpdateMode === 'approve' && (
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
  <strong style={{ color: '#8b5cf6', whiteSpace: 'nowrap' }}>
    Select Status:
  </strong>
  <div style={{ minWidth: 'fit-content' }}>
    <Select
      options={selectOptions}
      value={selectOptions.find(opt => opt.value === selectedMeeting.status)}
      onChange={selected => setSelectedMeeting(prev => ({ ...prev, status: selected.value }))}
      styles={{
        ...customSelectStyles,
        control: (base) => ({
          ...base,
          backgroundColor: '#111',
          borderColor: '#8b5cf6',
          borderRadius: '6px',
          color: '#fff',
          padding: '4px',
          width: 'auto', // 👈 Width adjusts to content
          minWidth: '150px' // 👈 Optional: prevents collapsing too small
        })
      }}
    />
  </div>
</div>

                {(selectedMeeting.status === 'rescheduled' || selectedMeeting.status === 'missed') && (
                  <textarea
                    placeholder={`Reason for ${selectedMeeting.status}`}
                    value={selectedMeeting.reason || ''}
                    onChange={e => setSelectedMeeting(prev => ({ ...prev, reason: e.target.value }))}
                    rows={3}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#111', color: '#fff', border: '1px solid #8b5cf6', marginBottom: '12px' }}
                  />
                )}
                {selectedMeeting.status === 'conducted' && (
                  <textarea
                    placeholder='Enter meeting result'
                    value={selectedMeeting.result || ''}
                    onChange={e => setSelectedMeeting(prev => ({ ...prev, result: e.target.value }))}
                    rows={3}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#111', color: '#fff', border: '1px solid #8b5cf6', marginBottom: '12px' }}
                  />
                )}
                <button onClick={handleSubmit} style={{ ...buttonStyle, display: 'block', margin: 'auto' }}>
                  Submit
                </button>
              </div>
            )}

            {selectedMeeting.statusUpdateMode === 'decline' && (
              <div style={{ marginTop: '16px' }}>
                <textarea
                  placeholder='Reason for rejection'
                  value={selectedMeeting.rejectionReason || ''}
                  onChange={e => setSelectedMeeting(prev => ({ ...prev, rejectionReason: e.target.value }))}
                  rows={3}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#111', color: '#fff', border: '1px solid #8b5cf6', marginBottom: '12px' }}
                />
                <button onClick={handleSubmit} style={{ ...buttonStyle, display: 'block', margin: 'auto' }}>
                  Submit Rejection
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
