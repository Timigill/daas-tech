'use client';

import React, { useState } from 'react';
import { FaBuilding, FaWifi, FaTh, FaList } from 'react-icons/fa';
import Link from 'next/link';

function Jobs() {
    const [view, setView] = useState('grid');

    const jobs = [
        { title: 'Software Engineer', category: 'Engineering', type: 'Full-Time' },
        { title: 'Marketing Specialist', category: 'Marketing', type: 'Part-Time' },
        { title: 'Financial Analyst', category: 'Finance', type: 'Full-Time' },
        { title: 'Customer Support Representative', category: 'Customer Service', type: 'Remote' },
        { title: 'Graphic Designer', category: 'Design', type: 'Hybrid' },
        { title: 'Human Resources Manager', category: 'Human Resources', type: 'Contract' },
        { title: 'Senior Human Resources Manager', category: 'Human Resources', type: 'Part-Time' },
    ];

    return (
        <div className="container px-0 my-5">
            {/* ✅ Header */}
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="fw-bold text-white">All Jobs</h2>
                    <p className="text-white-50">Showing {jobs.length} results</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <span className="text-white-50">Sort by:</span>
                    <select className="form-select form-select-sm w-auto border-0 bg-dark text-white">
                        <option>Most relevant</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                    {/* <button
                        className={`btn ${view === 'list' ? 'btn-primary' : 'btn-outline-primary'} rounded`}
                        onClick={() => setView('list')}
                    >
                        <FaList />
                    </button>
                    <button
                        className={`btn ${view === 'grid' ? 'btn-primary' : 'btn-outline-primary'} rounded`}
                        onClick={() => setView('grid')}
                    >
                        <FaTh />
                    </button> */}
                </div>
            </div>

            {/* ✅ Job Listings */}
            <div className={`row g-4 mt-4 ${view === 'list' ? 'flex-column' : ''}`}>
                {jobs.map((job, index) => (
                    <div className={view === 'grid' ? 'col-12 col-sm-6' : 'col-12'} key={index}>
                        <div
                            className="p-4 rounded d-flex align-items-center justify-content-between h-100"
                            style={{
                                background: "rgba(0, 0, 0, 0.5)",
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.7)",
                                border: "1px solid #333",
                            }}
                        >
                            <div className="flex-grow-1">
                                <h4 className="fw-bold text-white">{job.title}</h4>
                                <p className="d-flex align-items-center text-white-50 mb-1">
                                    <FaBuilding className="me-2 text-primary" /> {job.category}
                                </p>
                                <p className="d-flex align-items-center text-white-50">
                                    <FaWifi className="me-2 text-primary" /> {job.type}
                                </p>
                            </div>
                            <Link href="/detail/1/page">
                                <button
                                    className="btn btn-outline-light rounded-pill"
                                    style={{
                                        borderColor: '#444',
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #1b1525, #6a1b9a)';
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                >
                                Apply Now
                                </button>

                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
