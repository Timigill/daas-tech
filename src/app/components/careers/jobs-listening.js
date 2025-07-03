'use client';
import React, { useState, useEffect } from 'react';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        if (res.ok) {
          setJobs(data.jobs || []);
        } else {
          setError(data.error || 'Failed to fetch jobs');
        }
      } catch (err) {
        setError('Failed to fetch jobs');
      }
      setLoading(false);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container-fluid px-3 px-md-5 my-5" style={{ overflowX: 'hidden' }}>
      {/* Loading/Error States */}
      {loading && <div className="text-white-50 my-5">Loading jobs...</div>}
      {error && <div className="text-danger my-5">{error}</div>}

      {/* ✅ Job Details Modal */}
      {selectedJob && !showApplicationForm && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <span onClick={() => setSelectedJob(null)} style={closeBtnStyle}>
              &times;
            </span>

            <h3 className="fw-bold mb-2">{selectedJob.title}</h3>
            <p className="text-white-50 mb-3">{selectedJob.category} • {selectedJob.type}</p>

            <div className="mb-3"><strong>Location:</strong> {selectedJob.location}</div>
            <div className="mb-3"><strong>Degree Required:</strong> {selectedJob.degree}</div>
            <div className="mb-3"><strong>Experience:</strong> {selectedJob.experience}</div>
            <div className="mb-3"><strong>Job Timing:</strong> {selectedJob.timing}</div>
            <div className="mb-3">
              <strong>Requirements:</strong>
              <ul className="mt-2">
                {selectedJob.requirements && selectedJob.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <strong>Description:</strong>
              <p className="mt-2">{selectedJob.description}</p>
            </div>

            <button
              className="btn btn-light rounded-pill px-4"
              onClick={() => setShowApplicationForm(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* ✅ Application Modal */}
      {showApplicationForm && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <span onClick={() => setShowApplicationForm(false)} style={closeBtnStyle}>
              &times;
            </span>

            <h4 className="fw-bold mb-3">Apply for: {selectedJob?.title}</h4>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setSubmitError('');
                setSubmitSuccess(false);
                const data = new FormData();
                data.append('job', selectedJob._id);
                data.append('name', formData.name);
                data.append('email', formData.email);
                data.append('phone', formData.phone);
                data.append('experience', formData.experience);
                if (formData.resume) data.append('resume', formData.resume);
                try {
                  const res = await fetch('/api/job-applications', {
                    method: 'POST',
                    body: data,
                  });
                  if (res.ok) {
                    setSubmitSuccess(true);
                    setShowApplicationForm(false);
                    setSelectedJob(null);
                    setFormData({ name: '', email: '', phone: '', experience: '', resume: null });
                  } else {
                    const err = await res.json();
                    setSubmitError(err.error || 'Failed to submit application');
                  }
                } catch (err) {
                  setSubmitError('Failed to submit application');
                }
                setSubmitting(false);
              }}
            >
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Any Experience</label>
                <select
                  className="form-select"
                  required
                  value={formData.experience}
                  onChange={e => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="">Select Experience</option>
                  <option value="lt6months">Less than 6 months</option>
                  <option value="lt1year">Less than 1 year</option>
                  <option value="lt2years">Less than 2 years</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Resume</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={e => setFormData({ ...formData, resume: e.target.files[0] })}
                />
              </div>

              {submitError && <div className="text-danger mb-2">{submitError}</div>}
              {submitSuccess && <div className="text-success mb-2">Application submitted successfully!</div>}

              <button type="submit" className="btn btn-light rounded-pill px-4" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
        <div>
          <h2 className="fw-bold text-white">All Jobs</h2>
          <p className="text-white-50 mb-0">Showing {jobs.length} results</p>
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
          <span className="text-white-50">Sort by:</span>
          <select className="form-select form-select-sm w-100 w-sm-auto border-0 bg-dark text-white">
            <option>Most relevant</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* ✅ Job Cards */}
      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-12 col-md-6" key={job._id}>
            <div
              className="p-4 rounded h-100 d-flex flex-column justify-content-between"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid #333',
                boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                color: '#fff',
              }}
            >
              <div>
                <h4 className="fw-bold">{job.title}</h4>
                <p className="text-white-50 mb-3">{job.category} • {job.type}</p>
              </div>
              <button
                onClick={() => setSelectedJob(job)}
                className="btn btn-outline-light rounded-pill w-100 mt-2"
                style={{ borderColor: '#6a1b9a', transition: '0.3s' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1b1525, #6a1b9a)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#6a1b9a';
                }}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Styles
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  padding: '1rem',
};

const modalStyle = {
  background: 'linear-gradient(135deg, #1b1525, #6a1b9a)',
  padding: '2rem',
  borderRadius: '12px',
  color: '#fff',
  width: '100%',
  maxWidth: '600px',
  position: 'relative',
  overflowY: 'auto',
  maxHeight: '90vh',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '16px',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#fff',
};
