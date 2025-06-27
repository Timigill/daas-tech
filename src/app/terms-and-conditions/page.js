'use client';
import React from 'react';
import { motion } from "framer-motion";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" }
  }),
};

function Page() {
    return (
        <div className="privacy-page bg-black">
            {/* Top Banner */}
            <div className="banner-container w-100 h-50vh">
                <section
                    className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative"
                    style={{
                        minHeight: "50vh",
                        width: "100%",
                        overflow: "hidden",
                        background: "#000",
                        fontFamily: "Inter, sans-serif",
                        padding: "0 1rem",
                        backgroundColor: "#000",
                        boxShadow: "0 4px 20px rgba(164, 122, 255, 0.1)",
                    }}
                >
                    {/* Main Content */}
                    <header
                        style={{
                            position: "relative",
                            zIndex: 2,
                            background: "#000"
                        }}
                    >
                        <motion.span
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.1}
                            className="badge mb-3"
                            style={{
                                color: "#fff",
                                fontSize: 12,
                            }}
                        >
                            Updated December 2024
                        </motion.span>

                        <motion.h1
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.2}
                            className="fw-bold hero-title mb-2"
                            style={{
                                fontWeight: 600,
                                fontSize: "2.3rem",
                                lineHeight: 1.1,
                                color: "#fff",
                                maxWidth: "100%",
                                width: "100%",
                                padding: "0 1rem"
                            }}
                        >
                            Terms and Conditions That Empower  <br className="d-none d-md-block" />
                        </motion.h1>

                        <motion.p
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.4}
                            className="mb-4 text-white-50"
                            style={{
                                fontSize: 15,
                                maxWidth: 550,
                                margin: "0 auto",
                                padding: "0 1rem"
                            }}
                        >
                             Because Innovation Needs Structure.   <br className="d-none d-md-block" /> Our Commitments, Your Confidence.
                        </motion.p>
                    </header>
                </section>
            </div>

            {/* Terms & Conditions Content */}
            <div className="privacy-content px-md-5" style={{ maxWidth: "80%", margin: "0 auto" }}>
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                    >
                        <h5 className="privacy-heading">1. Acceptance of Terms</h5>
                        <p className="privacy-description">
                            By visiting our site, engaging with our services, or entering into a project with us, you agree to comply with these Terms. If you do not agree, please refrain from using our services.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                    >
                        <h5 className="privacy-heading">2. Who We Are</h5>
                        <p className="privacy-description">
                            DaaS Tech is a remote-first digital solutions company offering services including, but not limited to, web development, UI/UX design, SEO, branding, and digital marketing.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={3}
                    >
                        <h5 className="privacy-heading">3. Use of the Website</h5>
                        <ul>
                            <li>Trying to hack us? We admire the confidence — but no gain, just in vain.</li>
                            <li>You must not post or transmit any unlawful, threatening, or harmful content.</li>
                            <li>You agree not to reproduce, duplicate, copy or resell any part of our website or content.</li>
                        </ul>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={4}
                    >
                        <h5 className="privacy-heading">4. Intellectual Property</h5>
                        <ul>
                            <li>All content on this website — including text, graphics, logos, icons, and code — is the property of DaaS Tech or its licensors.</li>
                            <li>No part may be copied or used without written permission.</li>
                            <li>Our branding (logo, name, slogans) is protected under applicable laws.</li>
                        </ul>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={5}
                    >
                        <h5 className="privacy-heading">5. Service Agreements</h5>
                        <ul>
                            <li>Projects, deliverables, and timelines are defined in individual contracts or proposals.</li>
                            <li>Payments, revisions, and termination clauses are governed by those agreements.</li>
                            <li>Failure to pay or cooperate may result in project delays or cancellations.</li>
                        </ul>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={6}
                    >
                        <h5 className="privacy-heading">6. Privacy Policy</h5>
                        <p className="privacy-description">
                            By using our website, you agree to our Privacy Policy, which outlines how we collect and handle your data.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={7}
                    >
                        <h5 className="privacy-heading">7. Third-Party Tools and Links</h5>
                        <p className="privacy-description">
                            Our website may contain links to external tools, services, or platforms. We are not responsible for the content, privacy practices, or actions of any third parties.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={8}
                    >
                        <h5 className="privacy-heading">8. Limitation of Liability</h5>
                        <ul>
                            <li>DaaS Tech shall not be liable for any indirect or consequential losses.</li>
                            <li>Downtime, loss of profits, or data loss arising from use of our services or site.</li>
                        </ul>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={9}
                    >
                        <h5 className="privacy-heading">9. Termination</h5>
                        <p className="privacy-description">
                            We reserve the right to suspend or terminate access to our services or website without prior notice, if you breach these terms or harm the reputation of DaaS Tech.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={10}
                    >
                        <h5 className="privacy-heading">10. Changes to Terms</h5>
                        <p className="privacy-description">
                            We may update these terms at any time. Changes will be posted on this page with the updated date. Continued use of the site means you accept the changes.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={11}
                    >
                        <h5 className="privacy-heading">11. Governing Law</h5>
                        <p className="privacy-description">
                            These terms are governed by the laws of Pakistan, and any disputes shall be subject to the courts of Faisalabad, Punjab.
                        </p>
                    </motion.li>
                </ul>
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={12}
                    className="mt-4"
                >
                    <h5 className="privacy-heading">📩 Contact Us</h5>
                    <p className="privacy-description">
                        For questions or concerns, contact us at:<br />
                        <a href="mailto:founder@daastech.info" style={{ color: "#8b5cf6" }}>founder@daastech.info</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Page;
