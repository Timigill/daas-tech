"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

const initialJob = {
  title: "",
  category: "",
  type: "",
  timing: "",
  location: "",
  degree: "",
  experience: "",
  requirements: "",
  description: "",
};

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [form, setForm] = useState(initialJob);
  const [loading, setLoading] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [applications, setApplications] = useState([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);
  const [applicationsError, setApplicationsError] = useState("");
  const [applicationsJob, setApplicationsJob] = useState(null);

  // Fetch jobs
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (err) {
      toast.error("Failed to fetch jobs");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle requirements as comma-separated string
  const handleRequirementsChange = (e) => {
    setForm((prev) => ({ ...prev, requirements: e.target.value }));
  };

  // Add or update job
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      ...form,
      requirements: form.requirements
        .split(",")
        .map((r) => r.trim())
        .filter(Boolean),
    };
    try {
      let res, data;
      if (editingJob) {
        res = await fetch(`/api/jobs/${editingJob._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        data = await res.json();
        if (res.ok) {
          toast.success("Job updated!");
        } else {
          toast.error(data.error || "Failed to update job");
        }
      } else {
        res = await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        data = await res.json();
        if (res.ok) {
          toast.success("Job added!");
        } else {
          toast.error(data.error || "Failed to add job");
        }
      }
      setShowForm(false);
      setEditingJob(null);
      setForm(initialJob);
      fetchJobs();
    } catch (err) {
      toast.error("Error saving job");
    }
    setLoading(false);
  };

  // Edit job
  const handleEdit = (job) => {
    setEditingJob(job);
    setForm({
      ...job,
      requirements: job.requirements ? job.requirements.join(", ") : "",
    });
    setShowForm(true);
  };

  // Delete job
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Job deleted");
        fetchJobs();
      } else {
        toast.error("Failed to delete job");
      }
    } catch (err) {
      toast.error("Error deleting job");
    }
    setLoading(false);
  };

  // Cancel form
  const handleCancel = () => {
    setShowForm(false);
    setEditingJob(null);
    setForm(initialJob);
  };

  // Fetch applications for a job
  const handleViewApplications = async (job) => {
    setApplicationsJob(job);
    setShowApplications(true);
    setApplicationsLoading(true);
    setApplicationsError("");
    try {
      const res = await fetch("/api/job-applications");
      const data = await res.json();
      if (res.ok) {
        setApplications((data.applications || []).filter(app => app.job && app.job._id === job._id));
      } else {
        setApplicationsError(data.error || "Failed to fetch applications");
      }
    } catch (err) {
      setApplicationsError("Failed to fetch applications");
    }
    setApplicationsLoading(false);
  };

  return (
    <>
      <ToastContainer />
      {/* Applications Modal */}
      <Modal
        isOpen={showApplications}
        onRequestClose={() => setShowApplications(false)}
        contentLabel="Job Applications"
        style={{
          overlay: { zIndex: 10000, background: "var(--overlay-bg)" },
          content: { maxWidth: 600, margin: "auto", borderRadius: 12, padding: 24, background: "var(--background)", color: "var(--foreground)" }
        }}
        ariaHideApp={false}
      >
        <h3 className="mb-3">Applications for: {applicationsJob?.title}</h3>
        {applicationsLoading && <div>Loading...</div>}
        {applicationsError && <div className="text-danger mb-3">{applicationsError}</div>}
        {!applicationsLoading && !applicationsError && applications.length === 0 && <div>No applications found.</div>}
        <div className="list-group">
          {applications.map((app) => (
            <div key={app._id} style={{ color: "var(--foreground)", background: "var(--background)" }} className="list-group-item  mb-2 rounded">
              <div><strong>Name:</strong> {app.name}</div>
              <div><strong>Email:</strong> {app.email}</div>
              <div><strong>Phone:</strong> {app.phone}</div>
              <div><strong>Experience:</strong> {app.experience}</div>
              {app.resume && (
                <div><strong>Resume:</strong> <a href={app.resume} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>Download</a></div>
              )}
              <div className="small" style={{ color: "var(--foreground)" }}>Applied: {new Date(app.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <button className="btn  mt-3" style={{ color: "var(--forebround)", border: "1px solid var(--foreground)" }} onClick={() => setShowApplications(false)}>Close</button>
      </Modal>

      <section
        className="d-flex flex-column align-items-center text-center px-3"
        style={{
          padding: "48px 0",
          background: "var(--background)",
          color: "var(--foreground)",
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
          Admin Jobs
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
          Manage Job Openings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: 15,
            color: "var(--muted-text)",
            maxWidth: 600,
            margin: "0 auto 40px auto",
          }}
        >
          Add, edit, or remove job openings for your company.
        </motion.p>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="w-100 px-4 mb-5">
            <form
              onSubmit={handleSubmit}
              className="p-4 rounded"
              style={{
                background: "linear-gradient(to top right, var(--grad5), var(--grad6))",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                maxWidth: 600,
                margin: "0 auto",
                color: "var(--foreground)",
              }}
            >
              <h3 className="mb-3 text-start">
                {editingJob ? "Edit Job" : "Add New Job"}
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Job Title"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    placeholder="Type (Full-Time, Part-Time, etc.)"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="timing"
                    value={form.timing}
                    onChange={handleChange}
                    placeholder="Timing"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="degree"
                    value={form.degree}
                    onChange={handleChange}
                    placeholder="Degree Required"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="Experience"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="requirements"
                    value={form.requirements}
                    onChange={handleRequirementsChange}
                    placeholder="Requirements (comma separated)"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Job Description"
                    rows={3}
                    required
                  />
                </div>
              </div>
              <div className="d-flex gap-2 mt-4 justify-content-end">
                <button
                  type="button"
                  className="btn "
                  onClick={handleCancel}
                  disabled={loading}
                  style={{
                    color: "var(--foreground)",
                    border:"1px solid var(--border-color)"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn "
                  style={{ background: "#8b5cf6", border: "none" }}
                  disabled={loading}
                >
                  {editingJob ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Add Job Button */}
        {!showForm && (
          <button
            className="btn mb-4"
            onClick={() => setShowForm(true)}
            style={{ borderColor: "var(--foreground)", color: "var(--foreground)" }}
          >
            + Add New Job
          </button>
        )}

        {/* Job List */}
        <div className="container">
          <div className="row gy-4">
            {loading ? (
              <p className="text-muted">Loading...</p>
            ) : jobs.length > 0 ? (
              jobs.map((job) => (
                <div className="col-12 col-md-6" key={job._id}>
                  <div
                    className="p-4 rounded h-100 d-flex flex-column"
                    style={{
                      // background: "var(--card-bg)",
                      background: "var(--background)",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 4px 20px var(--border-color)",
                      color: "var(--foreground)",
                      textAlign: "left"
                    }}
                  >
                    <div>
                      <h4 className="fw-bold">{job.title}</h4>
                      <p className="mb-2" style={{ color: "var(--foreground)" }}>
                        {job.category} • {job.type}
                      </p>
                      <div className="mb-1">
                        <strong>Location:</strong> {job.location}
                      </div>
                      <div className="mb-1">
                        <strong>Degree:</strong> {job.degree}
                      </div>
                      <div className="mb-1">
                        <strong>Experience:</strong> {job.experience}
                      </div>
                      <div className="mb-1">
                        <strong>Timing:</strong> {job.timing}
                      </div>
                      <div className="mb-1">
                        <strong>Requirements:</strong> {job.requirements && job.requirements.join(", ")}
                      </div>
                      <div className="mb-2">
                        <strong>Description:</strong> {job.description}
                      </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 justify-content-end">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        style={{ borderColor: "#8b5cf6", color: "#8b5cf6" }}
                        onClick={() => handleEdit(job)}
                        disabled={loading}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(job._id)}
                        disabled={loading}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-sm btn-outline-info"
                        onClick={() => handleViewApplications(job)}
                        disabled={loading}
                      >
                        View Applications
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No jobs available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 