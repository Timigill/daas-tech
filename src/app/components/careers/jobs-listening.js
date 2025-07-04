'use client';
import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const jobs = [
    {
        id: 1,
        title: 'Software Engineer',
        category: 'Engineering',
        type: 'Full-Time',
        timing: '9 AM - 6 PM',
        location: 'Lahore, PK',
        degree: 'BS Computer Science',
        experience: '2+ years',
        requirements: [
            'Proficiency in React.js and Node.js',
            'Strong problem-solving skills',
            'Version control (Git)',
        ],
        description:
            'Develop, test, and maintain software solutions according to client requirements. Collaborate with team members to design efficient and scalable code.',
    },
    {
        id: 2,
        title: 'Marketing Specialist',
        category: 'Marketing',
        type: 'Part-Time',
        timing: 'Flexible',
        location: 'Remote',
        degree: 'BBA / MBA',
        experience: '1+ year',
        requirements: [
            'Knowledge of digital marketing tools',
            'Strong communication skills',
            'Experience with ad campaigns',
        ],
        description:
            'Plan and execute marketing campaigns to increase brand awareness and drive lead generation.',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        category: 'Design',
        type: 'Remote',
        timing: 'Flexible',
        location: 'Remote',
        degree: 'BS in Graphic Design',
        experience: '2+ years',
        requirements: [
            'Expert in Figma and Adobe XD',
            'Strong portfolio with web/app projects',
            'Understanding of user-centered design',
        ],
        description:
            'Design clean, intuitive user interfaces and ensure seamless user experiences across digital platforms.',
    },
    {
        id: 4,
        title: 'Backend Developer',
        category: 'Engineering',
        type: 'Full-Time',
        timing: '10 AM - 7 PM',
        location: 'Karachi, PK',
        degree: 'BS in Computer Science',
        experience: '3+ years',
        requirements: [
            'Expertise in Node.js, Express',
            'Experience with MongoDB/PostgreSQL',
            'API development and integration',
        ],
        description:
            'Develop server-side logic, RESTful APIs, and integrate front-end elements built by your teammates.',
    },
    {
        id: 5,
        title: 'Content Writer',
        category: 'Marketing',
        type: 'Part-Time',
        timing: 'Flexible',
        location: 'Islamabad, PK',
        degree: 'BA in English or Mass Comm',
        experience: '1+ year',
        requirements: [
            'Excellent writing and editing skills',
            'SEO knowledge is a plus',
            'Ability to write for diverse industries',
        ],
        description:
            'Write clear, engaging, and SEO-friendly content for blogs, websites, and social media platforms.',
    },
    {
        id: 6,
        title: 'Project Manager',
        category: 'Management',
        type: 'Hybrid',
        timing: '9 AM - 6 PM',
        location: 'Lahore, PK',
        degree: 'MBA or related field',
        experience: '4+ years',
        requirements: [
            'Strong leadership and communication',
            'Familiarity with Agile/Scrum',
            'Experience managing remote teams',
        ],
        description:
            'Lead cross-functional teams to deliver projects on time and within scope. Monitor progress and mitigate risks.',
    },
    {
        id: 7,
        title: 'QA Engineer',
        category: 'Engineering',
        type: 'Full-Time',
        timing: '9 AM - 5 PM',
        location: 'Remote',
        degree: 'BS in Software Engineering',
        experience: '2+ years',
        requirements: [
            'Manual and automated testing experience',
            'Knowledge of tools like Selenium or Cypress',
            'Bug tracking and documentation skills',
        ],
        description:
            'Ensure the quality and stability of software products by conducting rigorous testing and reporting bugs.',
    }

];

export default function Jobs() {

    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        resume: null,
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.experience) newErrors.experience = 'Experience required';
        if (!formData.resume) newErrors.resume = 'Resume required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast.success('Application Submitted!');
            setShowApplicationForm(false);
            setSelectedJob(null);
            setFormData({ name: '', email: '', phone: '', experience: '', resume: null });
        } else {
            toast.error('Please fill in all required fields');
        }
    };

    const jobsSectionRef = useRef(null);

    <div ref={jobsSectionRef} id="jobs-listening">
        {/* Your Jobs UI */}
    </div>


    return (
        <div id="jobs-listening"
            className="container-fluid px-3 px-md-5 my-5" style={{ overflowX: 'hidden' }}>
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
                                {selectedJob.requirements.map((req, i) => (
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
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#1b1525',
                        color: '#fff',
                        border: '1px solid #6a1b9a',
                    },
                }}
            />
            {showApplicationForm && (
                <div style={overlayStyle}>
                    <div style={modalStyle}>
                        <span onClick={() => setShowApplicationForm(false)} style={closeBtnStyle}>
                            &times;
                        </span>

                        <h4 className="fw-bold mb-3">Apply for: {selectedJob?.title}</h4>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    style={{ ...inputStyle, borderColor: errors.name ? 'red' : '#6a1b9a' }}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                {errors.name && <div className="text-danger mt-1" style={{ fontSize: "0.85rem" }}>{errors.name}</div>}
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    style={{ ...inputStyle, borderColor: errors.email ? 'red' : '#6a1b9a' }}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <div className="text-danger mt-1" style={{ fontSize: "0.85rem" }}>{errors.email}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <PhoneInput
                                    country={'pk'}
                                    value={formData.phone}
                                    onChange={(phone) => {
                                        setFormData({ ...formData, phone });
                                        setErrors({ ...errors, phone: '' });
                                    }}
                                    inputStyle={{
                                        ...inputStyle,
                                        borderColor: errors.phone ? 'red' : '#6a1b9a',
                                        width: '100%',
                                        height: '38px',
                                    }}
                                    buttonStyle={{
                                        backgroundColor: '#6a1b9a',
                                        border: 'none',
                                    }}
                                    dropdownStyle={{
                                        backgroundColor: '#1b1525',
                                        color: '#fff',
                                        width: "100px",
                                    }}
                                    containerStyle={{ width: '100%' }}
                                />
                                {errors.phone && <div className="text-danger mt-1" style={{ fontSize: "0.85rem" }}>{errors.phone}</div>}
                            </div>


                            <div className="mb-4">
                                <label className="form-label">Any Experience</label>
                                <select
                                    name="experience"
                                    className="form-select"
                                    style={{ ...inputStyle, borderColor: errors.experience ? 'red' : '#6a1b9a' }}
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Experience</option>
                                    <option value="lt6months">Less than 6 months</option>
                                    <option value="lt1year">Less than 1 year</option>
                                    <option value="lt2years">Less than 2 years</option>
                                </select>
                                {errors.experience && <div className="text-danger mt-1" style={{ fontSize: "0.85rem" }}>{errors.experience}</div>}
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Upload Resume</label>
                                <input
                                    type="file"
                                    name="resume"
                                    className="form-control"
                                    style={{ ...inputStyle, borderColor: errors.resume ? 'red' : '#6a1b9a' }}
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleInputChange}
                                />
                                {errors.resume && <div className="text-danger mt-1" style={{ fontSize: "0.85rem" }}>{errors.resume}</div>}
                            </div>


                            <button type="submit" className="btn btn-light rounded-pill px-4">
                                Submit
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
                    <div className="col-12 col-md-6" key={job.id}>
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

const inputStyle = {
    backgroundColor: '#1b1525',
    borderColor: '#6a1b9a',
    color: '#fff',
};
