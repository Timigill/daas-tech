// app/privacy-policy/page.jsx or wherever your component lives
import React from 'react';


function Page() {
    return (
        <div className="privacy-page">
            {/* Top Banner */}
            <div className="banner-container w-100">
                <img
                    src="/1234.png"
                    alt="Privacy Banner"
                    className="banner-image w-100"
                />
            </div>

            {/* Title */}
            <h1 className="privacy-title mt-4 text-center">
                DaaS Tech – Remote Work Policies
            </h1>

            {/* Working Hours */}
            <p className="privacy-hours text-center mt-2">
                Working Hours: <strong>10 AM – 6 PM (PKT)</strong>, Monday to Friday.
            </p>

            {/* Policies List */}
            <div className="privacy-content mt-4 px-4 px-md-5">
                <ul>
                    {[
                        ["Availability", "Stay active on Slack/WhatsApp during work hours. Respond promptly."],
                        ["Daily Updates", "Share a short end-of-day update: completed tasks, blockers, next tasks."],
                        ["Meetings", "Be punctual. Keep your camera on unless agreed otherwise."],
                        ["Work Environment", "Quiet, professional setup with stable internet is required."],
                        ["Security", "Use company-approved tools. Secure devices and use VPN when needed."],
                        ["Confidentiality", "All company/client data is strictly confidential."],
                        ["Performance", "Focus on output, not hours. Meet deadlines and quality expectations."],
                        ["Professional Conduct", "Communicate respectfully and maintain team ethics."],
                        ["Policy Violations", "Warnings will be issued for repeated delays, lack of communication, or policy breaches."],
                    ].map(([title, desc], i) => (
                        <li key={i} className="mb-4">
                            <h5 className="privacy-heading">{title}</h5>
                            <p className="privacy-description">{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Page;
