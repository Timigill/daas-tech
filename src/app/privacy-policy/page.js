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
                         Updated June 2025
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
                         Your Privacy, Our Priority  <br className="d-none d-md-block" />
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
                         At DaaS Tech, We Protect What Matters   <br className="d-none d-md-block" /> Your Data, Your Trust, Your Peace of Mind.
                       </motion.p>
                     </header>
                   </section>
            </div>

            {/* Policy Content */}
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
                        <h5 className="privacy-heading">1. Introduction &amp; Purpose</h5>
                        <p className="privacy-description">
                            At DaaS Tech, we value your privacy and are committed to protecting your personal data. This policy explains what information we collect, why we collect it, how we use it, and your rights regarding that data.
                        </p>
                        <p className="privacy-description text-white-50">
                            Our commitment is to transparency and clarity, ensuring you always know how your information is handled.
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
                        <h5 className="privacy-heading">2. Information We Collect</h5>
                        <p className="privacy-description mb-1">
                            We collect:
                        </p>
                        <ul>
                            <li>Personal data you provide (name, email, phone, company, etc.).</li>
                            <li>Technical data (IP address, browser type, device information) via cookies and analytics.</li>
                            <li>Usage data from forms, blog subscriptions, quotes, contact forms, etc.</li>
                        </ul>
                        <p className="privacy-description text-white-50">
                            This information helps us tailor our services and communications to your needs, and improve your experience on our platform.
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
                        <h5 className="privacy-heading">3. How We Use Data</h5>
                        <ul>
                            <li>Respond to inquiries, quotes, and support.</li>
                            <li>Send occasional updates, insights, and marketing.</li>
                            <li>Improve our website and services using analytics.</li>
                        </ul>
                        <p className="privacy-description text-white-50">
                            We use your data only for legitimate business purposes and never for unauthorized marketing or sharing.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={4}
                    >
                        <h5 className="privacy-heading">4. Legal Basis for Processing</h5>
                        <ul>
                            <li>Your explicit consent (e.g. newsletter signup).</li>
                            <li>Necessary performance of our services (e.g. responding to requests).</li>
                            <li>Legitimate business interests (e.g. improving UX, client support).</li>
                        </ul>
                        <p className="privacy-description text-white-50">
                            We always ensure there is a valid legal reason for processing your data, and you can withdraw consent at any time.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={5}
                    >
                        <h5 className="privacy-heading">5. Cookies &amp; Tracking</h5>
                        <ul>
                            <li>We use cookies to enable basic site functions.</li>
                            <li>Analyze traffic and behavior (Google Analytics).</li>
                        </ul>
                        <p className="privacy-description mb-0">
                            You can disable cookies via your browser, though this may affect site features.
                        </p>
                        <p className="privacy-description text-white-50">
                            Cookies help us understand how you interact with our site, so we can make improvements and offer a better experience.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={6}
                    >
                        <h5 className="privacy-heading">6. Data Sharing</h5>
                        <ul>
                            <li>We do not sell or rent personal data. Data may be shared with trusted service providers (e.g., hosting, email systems).</li>
                            <li>When legally required (e.g., compliance or legal requests).</li>
                            <li>In event of business transitions (e.g. acquisition), with notice.</li>
                        </ul>
                        <p className="privacy-description text-white-50">
                            Any third parties we work with are carefully vetted and required to protect your data as we do.
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
                        <h5 className="privacy-heading">7. Data Retention</h5>
                        <ul>
                            <li>We retain your data only as long as necessary for active communications or service delivery.</li>
                            <li>Up to 2 years after last contact unless legally required to keep it longer.</li>
                        </ul>
                        <p className="privacy-description text-white-50">
                            We regularly review our retention policies to ensure your data is not kept longer than needed.
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
                        <h5 className="privacy-heading">8. Your Rights</h5>
                        <ul>
                            <li>Access, update, or correct your personal data.</li>
                            <li>Request erasure or restrict processing.</li>
                            <li>Withdraw consent or opt out of newsletters.</li>
                        </ul>
                        <p className="privacy-description mb-0">
                            To exercise any of these, email us at <a href="mailto:privacy@daastech.info">privacy@daastech.info</a>.
                        </p>
                        <p className="privacy-description text-white-50">
                            We are committed to honoring your rights and will respond promptly to all requests.
                        </p>
                    </motion.li>
                    <motion.li
                        className="mb-4"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={9}
                    >
                        <h5 className="privacy-heading">9. Security</h5>
                        <p className="privacy-description mb-0">
                            We implement technical and organizational safeguards to protect your personal data from unauthorized access, disclosure, or alteration.
                        </p>
                        <p className="privacy-description text-white-50">
                            Our security measures are regularly reviewed and updated to keep your data safe.
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
                        <h5 className="privacy-heading">10. Children</h5>
                        <p className="privacy-description mb-0">
                            Our services are not aimed at children under 13. We do not knowingly collect data from minors.
                        </p>
                        <p className="privacy-description text-white-50">
                            If you believe a child has provided us with personal data, please contact us so we can remove it.
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
                        <h5 className="privacy-heading">11. Policy Updates</h5>
                        <p className="privacy-description mb-0">
                            We may revise this policy occasionally. The “Last Updated” date at the top reflects when changes take effect. We’ll notify users of major changes via email or website banner.
                        </p>
                        <p className="privacy-description text-white-50">
                            Please review this policy regularly to stay informed about how we protect your information.
                        </p>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
}

export default Page;
