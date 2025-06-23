"use client";

import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const services = [
    ["Website Development", "Artificial Intelligence", "IOS App Development"],
    ["Android App Development", "Hybrid Mobile App", "Flutter App Development"],
    ["Website Design", "UI/UX Design", "Video Ad", "Digital Marketing"],
    ["Social Media Marketing", "Search Engine Optimization(SEO)", "POS System"],
    ["Software Development", "Ecommerce Website", "CRM Development"],
    ["ERP Solution", "Consultation"],
];

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

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted", formData);
            // Handle form submission
        }
    };

    return (
        <div className="mt-5">
            <h1
                className="text-start text-white-50 py-2"
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    lineHeight: 1.1,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    width: "59%",
                    marginLeft: "2rem",
                }}
            >
                Get a Quote
            </h1>

            <form onSubmit={handleSubmit} noValidate>
                <div className="row justify-content-center gap-2 mt-3">
                    <div className='col-7'>
                        <div style={{
                            boxShadow: "inset 0 0 60px #212121",
                            borderTopLeftRadius: "1rem",
                            borderBottomLeftRadius: "1rem",
                            padding: "2rem",
                            color: "#fff"
                        }}>
                            {/* Project Name */}
                            <label className="text-white-50 mt-4">Project Name *</label>
                            <input
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

                            {/* Customer Type */}
                            <label className="text-white-50 mt-3">Customer Type *</label>
                            <select
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

                            {/* Services */}
                            <label className="text-white-50 mt-4">Project Category</label>
                            {services.map((group, idx) => (
                                <ol key={idx} className={`d-flex gap-3 mt-3`} style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                                    {group.map((item, i) => (
                                        <li key={i} className="d-flex align-items-center gap-1">
                                            <input
                                                type="checkbox"
                                                id={`item-${idx}-${i}`}
                                                value={item}
                                                checked={formData.selectedServices.includes(item)}
                                                onChange={handleServiceChange}
                                            />
                                            <label htmlFor={`item-${idx}-${i}`} className="text-white-50" style={{ cursor: "pointer" }}>{item}</label>
                                        </li>
                                    ))}
                                </ol>
                            ))}

                            {/* Timeline */}
                            <label className="text-white-50 mt-4">Project Timeline *</label>
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

                            {/* Budget */}
                            <label className="text-white-50 mt-4">Select your Budget *</label>
                            <select
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
                
                    {/* Sidebar */}
                    <div className="col-4 p-4" style={{ background: "linear-gradient(135deg, #1b1525, #6a1b9a)", boxShadow: "8px 0 30px rgba(106, 27, 154, 0.3)", height: "80vh", color: "#fff", borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}>
                        <h1 className="text-start text-white-50 py-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "1rem", lineHeight: 1.1, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Get in Touch</h1>
                        <p className="mt-4 text-white-50" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1.5" }}>Renowned mobile app and web development company delivering user-engaging mobile applications and responsive websites for multiple industry verticals.</p>
                        <ol className="mt-4 text-white-50" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                            <li className="d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}><HiOutlineMail size={18} /><span><strong>Email:</strong> founder@daastech.info</span></li>
                            <li className="mt-3 d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}><FaPhone size={18} /><span><strong>Phone:</strong> +923188672096</span></li>
                            <li className="mt-3 d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}><MdPhoneIphone size={18} /><span><strong>Mobile:</strong> +923016860925</span></li>
                            <li className="mt-3 d-flex align-items-center gap-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}><TbWorld size={18} /><span><strong>Int. Contact#:</strong> +1-(267)489-6694</span></li>
                        </ol>
                        <h1 className="text-start text-white-50 py-2 mt-4" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "1rem", lineHeight: 1.1, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Working Hours</h1>
                        <p className="mt-4 text-white-50" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1.5" }}>Monday - Friday: 09:00 AM – 06:00 PM</p>
                        <p className="mt-2 text-white-50" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1.5" }}>Saturday - Sunday: Closed</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="row gap-2 mt-3 px-5">
                    <div className="col-7">
                        <div style={{
                            boxShadow: 'inset 0 0 60px #212121',
                            borderTopLeftRadius: '1rem',
                            borderBottomLeftRadius: '1rem',
                            padding: '2rem',
                            color: '#fff',
                        }}>
                            <h1 className="text-start text-white-50 py-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.4rem' }}>Contact Information</h1>

                            {/* Full Name */}
                            <label className="text-white-50 mt-3">Full Name *</label>
                            <input
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

                            {/* Email */}
                            <label className="text-white-50 mt-3">Email Address *</label>
                            <input
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

                            {/* Mobile Number */}
                            <label className="text-white-50 mt-3">Mobile Number *</label>
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

                            <h1 className="text-start text-white-50 py-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.4rem' }}>
                                Preferred contact method
                            </h1>

                            <ol style={{ listStyle: "none", paddingLeft: "0", margin: "0", display: "flex", gap: "1rem", alignItems: "center" }}>
                                <li className="d-flex align-items-center gap-1">
                                    <input type="checkbox" id="phone" value="phone" checked={formData.contactMethod.includes("phone")} onChange={handleContactMethodChange} />
                                    <label htmlFor="phone" className="text-white-50" style={{ cursor: "pointer" }}>Phone</label>
                                </li>
                                <li className="d-flex align-items-center gap-1">
                                    <input type="checkbox" id="email" value="email" checked={formData.contactMethod.includes("email")} onChange={handleContactMethodChange} />
                                    <label htmlFor="email" className="text-white-50" style={{ cursor: "pointer" }}>Email</label>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Project Description Section */}
                <div className="row gap-2 mt-3 px-5">
                    <div className="col-7">
                        <div style={{
                            boxShadow: 'inset 0 0 60px #212121',
                            borderTopLeftRadius: '1rem',
                            borderBottomLeftRadius: '1rem',
                            padding: '2rem',
                            color: '#fff',
                        }}>
                            <h1 className="text-start text-white-50 py-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.4rem' }}>Project Description</h1>

                            <label className="text-white-50 mt-3">Enter your Project Description *</label>
                            <textarea
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Project Description"
                                className="form-control text-white mt-1"
                                style={{ height: "40vh", backgroundColor: 'rgb(41 36 36)', border: `1px solid ${errors.fullName ? 'red' : '#444'}`, borderRadius: '4px', paddingTop: '0.5rem', resize: 'none' }}
                            />
                            {errors.fullName && <span className="text-danger" style={{ fontSize: '0.85rem', marginTop: '2px', display: 'block' }}>{errors.fullName}</span>}

                            <label className="text-white-50 mt-4">Additional project files (optional)</label>
                            <div className="form-control d-flex justify-content-between align-items-center text-white mt-1" style={{ backgroundColor: "#000", border: "1px solid #444", borderRadius: "4px", padding: "0.375rem 0.75rem", height: "2.7rem" }}>
                                <label htmlFor="fileUpload" style={{ marginBottom: 0, cursor: "pointer", backgroundColor: "#444", color: "#fff", padding: "2px 10px", borderRadius: "4px", fontSize: "0.85rem" }}>Choose File</label>
                                <span className="text-white-50" style={{ fontSize: "0.85rem" }}>{formData.fileName || "No file chosen"}</span>
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
                            <p className="mt-2 text-white-50" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: "1.5" }}>You may attach up to 5 files under 100MB each</p>

                            <button type="submit" className="btn btn-primary mt-2" style={{ backgroundColor: '#6a1b9a', border: 'none' }}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}