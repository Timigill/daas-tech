"use client";

import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion } from "framer-motion";

const services = [
    ["Website Development", "Artificial Intelligence", "IOS App Development"],
    ["Android App Development", "Hybrid Mobile App", "Flutter App Development"],
    ["Website Design", "UI/UX Design", "Video Ad", "Digital Marketing"],
    ["Social Media Marketing", "Search Engine Optimization(SEO)", "POS System"],
    ["Software Development", "Ecommerce Website", "CRM Development"],
    ["ERP Solution", "Consultation"],
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

export default function Page() {
    const [formData, setFormData] = useState({
        project: "",
        customerType: "",
        timeline: "",
        budget: "",
        fullName: "",
        selectedServices: [],
        file: null,
        fileName: '',
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        contactMethod: []
    });

    const [errors, setErrors] = useState({});

    const refs = {
        project: useRef(null),
        customerType: useRef(null),
        selectedServices: useRef(null),
        timeline: useRef(null),
        budget: useRef(null),
        fullName: useRef(null),
        contactName: useRef(null),
        contactEmail: useRef(null),
        contactPhone: useRef(null),
        contactMethod: useRef(null),
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const updatedServices = checked
                ? [...prev.selectedServices, value]
                : prev.selectedServices.filter((s) => s !== value);
            return { ...prev, selectedServices: updatedServices };
        });
    };

    const handleContactMethodChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const updatedMethods = checked
                ? [...prev.contactMethod, value]
                : prev.contactMethod.filter((m) => m !== value);
            return { ...prev, contactMethod: updatedMethods };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Project information validation
        if (!formData.project) newErrors.project = "Project name is required";
        if (!formData.customerType) newErrors.customerType = "Customer type is required";
        if (!formData.timeline) newErrors.timeline = "Timeline is required";
        if (!formData.budget) newErrors.budget = "Budget is required";
        if (!formData.fullName) newErrors.fullName = "Project description is required";

        // Contact information validation
        if (!formData.contactName) newErrors.contactName = "Full name is required";
        if (!formData.contactEmail || !/\S+@\S+\.\S+/.test(formData.contactEmail)) newErrors.contactEmail = "Valid email is required";
        if (!formData.contactPhone || formData.contactPhone.length < 10) newErrors.contactPhone = "Valid mobile number is required";

        // Project Category (checkbox group) validation
        if (formData.selectedServices.length === 0) {
            newErrors.selectedServices = "Please select at least one project category.";
        }

        // Contact method validation
        if (formData.contactMethod.length === 0) {
          newErrors.contactMethod = "Please select at least one preferred contact method.";
        }

        setErrors(newErrors);

        // Focus the first error field
        if (Object.keys(newErrors).length > 0) {
            const order = [
                "project",
                "customerType",
                "selectedServices",
                "timeline",
                "budget",
                "fullName",
                "contactName",
                "contactEmail",
                "contactPhone",
                "contactMethod"
            ];
            for (const key of order) {
                if (newErrors[key] && refs[key]?.current) {
                    refs[key].current.focus();
                    refs[key].current.scrollIntoView({ behavior: "smooth", block: "center" });
                    break;
                }
            }
            return;
        }

        // Show success toast
        toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        console.log("Form submitted", formData);
        // Handle form submission
    };

    return (

        <div className="mt-5 px-3 px-md-5">
            <ToastContainer />
            <div className="d-flex flex-column align-items-center text-center mt-5">
                <div>
                    {/* Tagline */}
                    <motion.span
                      className="badge px-3 py-2"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                      viewport={{ once: true }}
                      style={{
                          padding: "4px 10px",
                          fontSize: 12,
                          color: "#fff",
                          border: "1px solid rgb(17 17 17)",
                          borderRadius: 8,
                          width: "fit-content",
                          fontWeight: 500,
                          marginBottom: 12,
                      }}
                    >
                        Quote Page
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                      className="mt-1"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                      custom={0.5}
                      viewport={{ once: true }}
                      style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          lineHeight: 1.1,
                          color: "#ffffff",
                          maxWidth: 700,
                          margin: "0 auto",
                      }}
                    >
                        Precision Quotes for Premium Projects
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                      className="mt-3 text-white-50"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                      custom={1}
                      viewport={{ once: true }}
                      style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "1rem",
                          maxWidth: 500,
                          margin: "0 auto",
                      }}
                    >
                        No Guesswork, No Hidden Cost.Just Clear,Customized Pricing-in Minutes
                    </motion.p>
                </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                {/* Main Form Section */}
                <div className="row justify-content-center mt-3 g-5">
                    {/* Left Column - Form Fields */}
                    <motion.div
                      className='col-12 col-lg-7'
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                      custom={1.5}
                      viewport={{ once: true }}
                    >
                        <div className="d-flex flex-column" style={{
                            boxShadow: "inset 0 0 60px #212121",
                            borderRadius: "1rem 0 0 1rem",
                            padding: "2rem",
                            color: "#fff",
                            minHeight: "100%"
                        }}>
                            <h1 className="text-white py-2" style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 500,
                                fontSize: "1.5rem",
                                lineHeight: 1.1,
                                color: "#fff",
                                borderBottom: "1px solid #d9d9cb",
                            }}>
                                Get a Quote
                            </h1>

                            {/* Project Name */}
                            <div className="mt-4">
                                <label className="text-white-50">Project Name *</label>
                                <input
                                    ref={refs.project}
                                    name="project"
                                    type="text"
                                    value={formData.project}
                                    onChange={handleChange}
                                    placeholder="Enter name of the Project"
                                    className="form-control text-white mt-1"
                                    style={{
                                        backgroundColor: "#000",
                                        border: `1px solid ${errors.project ? "red" : "#444"}`,
                                        borderRadius: "4px",
                                    }}
                                />
                                {errors.project && <span className="text-danger" style={{ fontSize: "0.85rem", marginTop: "2px", display: "block" }}>{errors.project}</span>}
                            </div>

                            {/* Customer Type */}
                            <div className="mt-3">
                                <label className="text-white-50">Customer Type *</label>
                                <select
                                    ref={refs.customerType}
                                    name="customerType"
                                    value={formData.customerType}
                                    onChange={handleChange}
                                    className="form-control text-white mt-1"
                                    style={{
                                        backgroundColor: "#000",
                                        border: `1px solid ${errors.customerType ? "red" : "#444"}`,
                                        borderRadius: "4px",
                                    }}
                                >
                                    <option value="">-- Are you a new or existing customer? --</option>
                                    <option value="new">I am a new customer</option>
                                    <option value="existing">I am an existing customer</option>
                                </select>
                                {errors.customerType && <span className="text-danger" style={{ fontSize: "0.85rem", marginTop: "2px", display: "block" }}>{errors.customerType}</span>}
                            </div>

                            {/* Services */}
                            <div className="mt-4">
                                <label className="text-white-50">Project Category</label>
                                <div className="row mt-3 g-2">
                                    {services.map((group, idx) => (
                                        <div key={idx} className="col-12 col-md-6">
                                            {group.map((item, i) => (
                                                <div key={i} className="form-check">
                                                    <input
                                                      ref={idx === 0 && i === 0 ? refs.selectedServices : null}
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id={`item-${idx}-${i}`}
                                                      value={item}
                                                      checked={formData.selectedServices.includes(item)}
                                                      onChange={handleServiceChange}
                                                      style={{ backgroundColor: "#000", borderColor: "#6a1b9a" }}
                                                    />
                                                    <label className="form-check-label text-white-50" htmlFor={`item-${idx}-${i}`} style={{ fontSize: "0.9rem" }}>
                                                        {item}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                {errors.selectedServices && (
                                  <span className="text-danger" style={{ fontSize: "0.85rem", marginTop: "2px", display: "block" }}>
                                    {errors.selectedServices}
                                  </span>
                                )}
                            </div>

                            {/* Timeline */}
                            <div className="mt-4">
                                <label className="text-white-50">Project Timeline *</label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="form-control text-white mt-1"
                                    style={{
                                        backgroundColor: "#000",
                                        border: `1px solid ${errors.timeline ? "red" : "#444"}`,
                                        borderRadius: "4px",
                                    }}
                                >
                                    <option value="">Select Timeline</option>
                                    <option value="week">Less than 1 Week</option>
                                    <option value="1-month">1 Month</option>
                                    <option value="1-3-months">1-3 Months</option>
                                    <option value="3-6-months">3-6 Months</option>
                                    <option value="more-than-6">More than 6 Months</option>
                                    <option value="not-sure">Not Sure</option>
                                </select>
                                {errors.timeline && <span className="text-danger" style={{ fontSize: "0.85rem", marginTop: "2px", display: "block" }}>{errors.timeline}</span>}
                            </div>

                            {/* Budget */}
                            <div className="mt-4">
                                <label className="text-white-50">Select your Budget *</label>
                                <select
                                    ref={refs.budget}
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="form-control text-white mt-1"
                                    style={{
                                        backgroundColor: "#000",
                                        border: `1px solid ${errors.budget ? "red" : "#444"}`,
                                        borderRadius: "4px",
                                    }}
                                >
                                    <option value="">Select budget in USD</option>
                                    <option value="500-1000">$500–$1,000</option>
                                    <option value="1000-2000">$1,000–$2,000</option>
                                    <option value="2000-5000">$2,000–$5,000</option>
                                    <option value="5000-10000">$5,000–$10,000</option>
                                    <option value="10000-20000">$10,000–$20,000</option>
                                    <option value="20000-50000">$20,000–$50,000</option>
                                    <option value="50000+">$50,000+</option>
                                </select>
                                {errors.budget && <span className="text-danger" style={{ fontSize: "0.85rem", marginTop: "2px", display: "block" }}>{errors.budget}</span>}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Sidebar */}
                    <motion.div
                      className="col-12 getintouch col-lg-4 p-4"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInUp}
                      custom={2}
                      viewport={{ once: true }}
                      style={{
                          background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0, 0, 0, 1))",
                          boxShadow: "8px 0 10px rgba(164, 122, 255, 0.2)",
                          color: "#fff",
                          borderRadius: "0 1rem 1rem 0",
                          height: "80vh"
                      }}
                    >
                        <h1 className="text-start text-white-50 py-2" style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: "1rem",
                            lineHeight: 1.1,
                            borderBottom: "1px solid rgba(255,255,255,0.1)"
                        }}>
                            Get in Touch
                        </h1>
                        <p className="mt-4 text-white-50" style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.8rem",
                            lineHeight: "1.5"
                        }}>
                            Renowned mobile app and web development company delivering user-engaging mobile applications and responsive websites for multiple industry verticals.
                        </p>
                        <ol className="mt-4 text-white-50" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                            <li className="d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                                <HiOutlineMail size={18} />
                                <span><strong>Email:</strong> founder@daastech.info</span>
                            </li>
                            <li className="mt-3 d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                                <FaPhone size={18} />
                                <span><strong>Phone:</strong> +923188672096</span>
                            </li>
                            <li className="mt-3 d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                                <MdPhoneIphone size={18} />
                                <span><strong>Mobile:</strong> +923154537203</span>
                            </li>
                            <li className="mt-3 d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                                <TbWorld size={18} />
                                <span><strong>Int. Contact#:</strong> +92-31886-72096</span>
                            </li>
                        </ol>
                        <h1 className="text-start text-white-50 py-2 mt-4" style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: "1rem",
                            lineHeight: 1.1,
                            borderBottom: "1px solid rgba(255,255,255,0.1)"
                        }}>
                            Working Hours
                        </h1>
                        <p className="mt-4 text-white-50" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1.5" }}>
                            Monday - Friday: 09:00 AM – 06:00 PM
                        </p>
                        <p className="mt-2 text-white-50" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1.5" }}>
                            Saturday - Sunday: Closed
                        </p>
                    </motion.div>
                </div>

                {/* Contact Information Section */}
                <motion.div
                  className="row justify-content-center mt-3 g-0"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  custom={2.5}
                  viewport={{ once: true }}
                >
                  <div className="col-12 col-lg-7">
                    <div style={{
                      boxShadow: 'inset 0 0 60px #212121',
                      borderRadius: "1rem 0 0 1rem",
                      padding: '2rem',
                      color: '#fff',
                    }}>
                      <h1 className="text-start text-white-50 py-2" style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: '1.4rem'
                      }}>
                          Contact Information
                      </h1>

                      {/* Full Name */}
                      <div className="mt-3">
                          <label className="text-white-50">Full Name *</label>
                          <input
                              ref={refs.contactName}
                              name="contactName"
                              type="text"
                              value={formData.contactName}
                              onChange={handleChange}
                              placeholder="Enter full name"
                              className="form-control text-white mt-1"
                              style={{
                                  backgroundColor: '#000',
                                  border: `1px solid ${errors.contactName ? 'red' : '#444'}`,
                                  borderRadius: '4px',
                              }}
                          />
                          {errors.contactName && (
                              <span className="text-danger" style={{ fontSize: '0.85rem', marginTop: '2px', display: 'block' }}>
                                  {errors.contactName}
                              </span>
                          )}
                      </div>

                      {/* Email */}
                      <div className="mt-3">
                          <label className="text-white-50">Email Address *</label>
                          <input
                              ref={refs.contactEmail}
                              name="contactEmail"
                              type="email"
                              value={formData.contactEmail}
                              onChange={handleChange}
                              placeholder="Email Address"
                              className="form-control text-white mt-1"
                              style={{
                                  backgroundColor: '#000',
                                  border: `1px solid ${errors.contactEmail ? 'red' : '#444'}`,
                                  borderRadius: '4px',
                              }}
                          />
                          {errors.contactEmail && (
                              <span className="text-danger" style={{ fontSize: '0.85rem', marginTop: '2px', display: 'block' }}>
                                  {errors.contactEmail}
                              </span>
                          )}
                      </div>

                      {/* Mobile Number */}
                      <div className="mt-3">
                          <label className="text-white-50">Mobile Number *</label>
                          <PhoneInput
                              country={'pk'}
                              value={formData.contactPhone}
                              onChange={(value) => setFormData(prev => ({ ...prev, contactPhone: value }))}
                              inputStyle={{
                                  backgroundColor: '#000',
                                  color: '#fff',
                                  border: `1px solid ${errors.contactPhone ? 'red' : '#444'}`,
                                  borderRadius: '4px',
                                  width: '100%',
                                  height: 'calc(1.5em + 0.75rem + 2px)'
                              }}
                              buttonStyle={{
                                  backgroundColor: '#000',
                                  borderRight: '1px solid #444',
                              }}
                              placeholder="e.g. +92 3xx xxxxxxx"
                          />
                          {errors.contactPhone && (
                              <span className="text-danger" style={{ fontSize: '0.85rem', marginTop: '2px', display: 'block' }}>
                                  {errors.contactPhone}
                              </span>
                          )}
                      </div>

                      <h1 className="text-start text-white-50 py-2 mt-4" style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: '1.4rem'
                      }}>
                          Preferred contact method
                      </h1>

                      <div className="d-flex gap-3">
                          <div className="form-check">
                              <input
                                  ref={refs.contactMethod}
                                  className="form-check-input"
                                  type="checkbox"
                                  id="phone"
                                  value="phone"
                                  checked={formData.contactMethod.includes("phone")}
                                  onChange={handleContactMethodChange}
                                  style={{ backgroundColor: "#000", borderColor: "#6a1b9a" }}
                              />
                              <label className="form-check-label text-white-50" htmlFor="phone">
                                  Phone
                              </label>
                          </div>
                          <div className="form-check">
                              <input
                                  ref={refs.contactMethod}
                                  className="form-check-input"
                                  type="checkbox"
                                  id="email"
                                  value="email"
                                  checked={formData.contactMethod.includes("email")}
                                  onChange={handleContactMethodChange}
                                  style={{ backgroundColor: "#000", borderColor: "#6a1b9a" }}
                              />
                              <label className="form-check-label text-white-50" htmlFor="email">
                                  Email
                              </label>
                          </div>
                      </div>
                      {errors.contactMethod && (
                        <span className="text-danger" style={{ fontSize: "0.85rem", marginTop: "2px", display: "block" }}>
                          {errors.contactMethod}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Empty column to match layout */}
                  <div className="col-12 col-lg-4 d-none d-lg-block"></div>
                </motion.div>

                {/* Project Description Section */}
                <motion.div
                  className="row justify-content-center mt-3 g-0"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  custom={3}
                  viewport={{ once: true }}
                >
                  <div className="col-12 col-lg-7">
                    <div style={{
                      boxShadow: 'inset 0 0 60px #212121',
                      borderRadius: "1rem 0 0 1rem",
                      padding: '2rem',
                      color: '#fff',
                    }}>
                      <h1 className="text-start text-white-50 py-2" style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: '1.4rem'
                      }}>
                          Project Description
                      </h1>

                      <div className="mt-3">
                          <label className="text-white-50">Enter your Project Description *</label>
                          <textarea
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Project Description"
                              className="form-control text-white mt-1"
                              style={{
                                  height: "40vh",
                                  backgroundColor: 'rgb(29, 27, 27)',
                                  border: `1px solid ${errors.fullName ? 'red' : '#444'}`,
                                  borderRadius: '4px',
                                  paddingTop: '0.5rem',
                                  resize: 'none'
                              }}
                          />
                          {errors.fullName && (
                              <span className="text-danger" style={{ fontSize: '0.85rem', marginTop: '2px', display: 'block' }}>
                                  {errors.fullName}
                              </span>
                          )}
                      </div>

                      <div className="mt-4">
                          <label className="text-white-50">Additional project files (optional)</label>
                          <div className="form-control d-flex justify-content-between align-items-center text-white mt-1" style={{
                              backgroundColor: "#000",
                              border: "1px solid #444",
                              borderRadius: "4px",
                              padding: "0.375rem 0.75rem",
                              height: "2.7rem"
                          }}>
                              <label htmlFor="fileUpload" style={{
                                  marginBottom: 0,
                                  cursor: "pointer",
                                  backgroundColor: "#444",
                                  color: "#fff",
                                  padding: "2px 10px",
                                  borderRadius: "4px",
                                  fontSize: "0.85rem"
                              }}>
                                  Choose File
                              </label>
                              <span className="text-white-50" style={{ fontSize: "0.85rem" }}>
                                  {formData.fileName || "No file chosen"}
                              </span>
                              <input
                                  id="fileUpload"
                                  name="file"
                                  type="file"
                                  onChange={(e) => {
                                      const file = e.target.files[0];
                                      setFormData((prev) => ({ ...prev, file, fileName: file ? file.name : "" }));
                                  }}
                                  style={{ display: "none" }}
                              />
                          </div>
                          <p className="mt-2 text-white-50" style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "0.8rem",
                              lineHeight: "1.5"
                          }}>
                              You may attach up to 5 files under 100MB each
                          </p>
                      </div>

                      <button
                          type="submit"
                          className="btn btn-primary mt-4 w-100"
                          style={{
                              backgroundColor: '#6a1b9a',
                              border: 'none',
                              padding: '0.75rem',
                              borderRadius: '4px',
                              fontWeight: '500'
                          }}
                      >
                          Submit
                      </button>
                    </div>
                  </div>

                  {/* Empty column to match layout */}
                  <div className="col-12 col-lg-4 d-none d-lg-block"></div>
                </motion.div>
            </form>
        </div>
    );
}